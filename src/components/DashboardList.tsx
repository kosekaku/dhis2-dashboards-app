import { useEffect, useState } from 'react';
import DashboardCard from './DashboardCard';
import { fetchDashboards } from '../services/dashboard';
import { Dashboard } from '../types/dashboards';
import { useDashboardData } from '../hooks/useDashboardData';

// DashboardList props interface
interface DashboardListProps {
  expandedDashboardId: string | null;
  setExpandedDashboardId: (id: string) => void;
  filter: string | null;
}

const DashboardList = ({
  expandedDashboardId,
  setExpandedDashboardId,
  filter,
}: DashboardListProps) => {
  const [dashboards, setDashboards] = useState<Dashboard[]>([]);
  // Get and store the list of dashboards
  const { data, isLoading, isError } = useDashboardData<Dashboard[]>(
    'dashboards',
    fetchDashboards
  );

  useEffect(() => {
    if (!isLoading && !isError && data) {
      const { dashboards } = data as any;
      // Get the first dashboard to expand by default
      if (dashboards.length > 0) {
        setExpandedDashboardId(dashboards[0].id);
      }
      setDashboards(dashboards);
    }
  }, [isLoading, isError, data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading dashboards</div>;
  }

  return (
    <div>
      {dashboards &&
        dashboards?.map((dashboard, index) => (
          <DashboardCard
            key={dashboard.id}
            dashboard={dashboard}
            expanded={expandedDashboardId === dashboard.id}
            onExpand={() => setExpandedDashboardId(dashboard.id)}
            filter={filter}
          />
        ))}
    </div>
  );
};

export default DashboardList;

// import React, { useEffect, useState } from 'react';
// import DashboardCard from './DashboardCard';
// import { useQuery } from 'react-query';
// import { fetchDashboards } from '../services/dashboard';
// import { Dashboard } from '../types/dashboards';

// // DashboardList props interface
// interface DashboardListProps {
//   expandedDashboardId: string | null;
//   setExpandedDashboardId: (id: string) => void;
//   filter: string | null;
// }

// const DashboardList = ({
//   expandedDashboardId,
//   setExpandedDashboardId,
//   filter,
// }: DashboardListProps) => {
//   const [dashboards, setDashboards] = useState<Dashboard[]>([]);
//   // Get and store the list of dashboards
//   const { data, isLoading, isError } = useQuery<any[]>(
//     'dashboards',
//     fetchDashboards
//   );

//   useEffect(() => {
//     if (!isLoading && !isError && data) {
//       const { dashboards } = data as any;
//       // Get the first dashboard to expand by default
//       if (dashboards.length > 0) {
//         setExpandedDashboardId(dashboards[0].id);
//       }
//       setDashboards(dashboards);
//     }
//   }, [isLoading, isError, data]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error loading dashboards</div>;
//   }

//   return (
//     <div>
//       {dashboards &&
//         dashboards?.map((dashboard, index) => (
//           <DashboardCard
//             key={dashboard.id}
//             dashboard={dashboard}
//             expanded={expandedDashboardId === dashboard.id}
//             onExpand={() => setExpandedDashboardId(dashboard.id)}
//             filter={filter}
//           />
//         ))}
//     </div>
//   );
// };

// export default DashboardList;
