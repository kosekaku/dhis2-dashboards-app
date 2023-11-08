import { useEffect, useState } from 'react';

import { useQuery } from 'react-query';
import {
  Divider,
  Box,
  IconStar16,
  IconStarFilled16,
  IconArrowUp16,
  IconArrowDown16,
} from '@dhis2/ui';
import DashboardItem from './DashboardItem';
import { fetchDashboardItems } from '../services/dashboard';
import { Dashboard } from '../types/dashboards';
import { getFavourite, storeFavourite } from '../utils/favouriteDashboard';
import {
  CARD_WIDTH,
  FAVOURITE_MARGIN,
  ITEMS_PADDING,
} from '../constants/dashboardCard';
import { useDashboardData } from '../hooks/useDashboardData';

interface DashboardCardProps {
  dashboard: {
    id: string;
    displayName: string;
    items: Array<{
      id: string;
    }>;
    dashboardItems?: any;
  };

  expanded: boolean;
  onExpand: () => void;
  filter: string | null;
}

const DashboardCard = ({
  dashboard,
  expanded,
  onExpand,
  filter,
}: DashboardCardProps) => {
  // Get starred dashboard from local storage
  const favourite = getFavourite(dashboard.id);

  const [dashboardItem, setDashboardItem] = useState<any>([]);
  const [isExpanded, setExpanded] = useState<boolean>(true);
  const [isFavourite, setIsFavourite] = useState<boolean>(favourite === 'true');

  // Get and store dashboard information
  const { data, isLoading, isError } = useDashboardData<Dashboard>(
    ['dashboard', dashboard.id],
    () => fetchDashboardItems(dashboard.id)
  );

  useEffect(() => {
    if (!isLoading && !isError && data) {
      setDashboardItem(data);
    }
  }, [isLoading, isError, data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading dashboards</div>;
  }
  // Expand dashboard using Up and Down Arrow toggling
  const handleToggle = () => {
    setExpanded(!isExpanded);
    onExpand();
  };
  // store favourited state in local storage
  const handleFavourite = (dashboard: Dashboard) => {
    setIsFavourite(!isFavourite);
    storeFavourite(dashboard.id, !isFavourite); // store the toggled value !isFavourite
  };

  return (
    <div style={{ width: CARD_WIDTH }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: ITEMS_PADDING,
        }}
      >
        <div>
          <h3>{dashboard.displayName}</h3>
        </div>
        {/* Arrow Icons and Star Icon  */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'end',
            paddingRight: ITEMS_PADDING,
          }}
        >
          <div
            style={{ paddingRight: FAVOURITE_MARGIN }}
            onClick={() => handleFavourite(dashboard)}
          >
            {isFavourite ? <IconStarFilled16 /> : <IconStar16 />}
          </div>

          <div></div>

          <div onClick={handleToggle}>
            {expanded && isExpanded ? (
              <IconArrowUp16 onClick={handleToggle} />
            ) : (
              <IconArrowDown16 onClick={handleToggle} />
            )}
          </div>
        </div>
      </div>
      {expanded && isExpanded && (
        <div>
          {dashboardItem?.dashboardItems?.map((item: any) => {
            // Render items with the matching filter
            return filter === item.type ? (
              <Box key={item.id}>
                <DashboardItem
                  key={item.id}
                  filter={filter}
                  item={{
                    id: item.id,
                    type: item.type,
                    name: item.name,
                    text: item.text,
                    visualization: item.visualization,
                    map: item.map,
                  }}
                />
                <Divider dense />
              </Box>
            ) : (
              <DashboardItem
                key={item.id}
                filter={filter}
                item={{
                  id: item.id,
                  type: item.type,
                  name: item.name,
                  text: item.text,
                  visualization: item.visualization,
                  map: item.map,
                }}
              />
            );
          })}
        </div>
      )}
      <Divider />
    </div>
  );
};

export default DashboardCard;
