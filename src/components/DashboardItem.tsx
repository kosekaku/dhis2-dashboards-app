import {
  IconTextBox16,
  IconVisualizationColumn16,
  IconWorld16,
  IconLayoutColumns16,
  DataTable,
  DataTableBody,
  DataTableRow,
  DataTableCell,
} from '@dhis2/ui';
import {
  MAP_OPTION,
  TEXT_OPTION,
  VISUALIZATION_OPTION,
} from '../constants/dashboardCard';

interface DashboardItemProps {
  item: {
    id: string;
    type: string;
    name: string;
    text: string;
    visualization: {
      id: string;
      name: string;
      type: string;
    };
    map: {
      id: string;
      name: string;
    };
  };
  filter: string | null;
}

const DashboardItem = ({ item, filter }: DashboardItemProps) => {
  if (filter && item.type !== filter) {
    return null; // Should not render if filter doesn't match
  }
  // Determine the icon and name based on the item type
  let icon;
  let itemName;
  switch (item.type) {
    case VISUALIZATION_OPTION:
      icon = <IconVisualizationColumn16 />;
      itemName = item.visualization.name;
      break;
    case MAP_OPTION:
      icon = <IconWorld16 />;
      itemName = item.map.name;
      break;
    case TEXT_OPTION:
      icon = <IconTextBox16 />;
      itemName = item?.text; // Using the text content for the item names
      break;
    default:
      icon = <IconLayoutColumns16 />;
      itemName = item.type;
  }

  return (
    <DataTable>
      <DataTableBody>
        <DataTableRow>
          <DataTableCell>{icon}</DataTableCell>
          <DataTableCell>
            <h4>{itemName}</h4>
          </DataTableCell>
        </DataTableRow>
      </DataTableBody>
    </DataTable>
  );
};

export default DashboardItem;
