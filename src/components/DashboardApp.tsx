import { useState } from 'react';
import DashboardList from './DashboardList';
import FilterSelect from './FilterSelect/FilterSelect';

const DashboardApp = () => {
  const [expandedDashboardId, setExpandedDashboardId] = useState<string | null>(
    null
  );
  const [filter, setFilter] = useState<string | null>(null);

  return (
    <div>
      <h1>DHIS2 Dashboards</h1>

      <div>
        <FilterSelect filter={filter} setFilter={setFilter} />
        <DashboardList
          expandedDashboardId={expandedDashboardId}
          setExpandedDashboardId={setExpandedDashboardId}
          filter={filter}
        />
      </div>
    </div>
  );
};

export default DashboardApp;
