import { API_BASE_URL } from '../config/api';
import { Dashboard } from '../types/dashboards';
// Below functions Implement fetch api to get api data

const fetchDashboards = async () => {
  const response = await fetch(`${API_BASE_URL}/dashboards.json`);
  if (!response.ok) {
    throw new Error(
      'Failed to fetch dashboards. HTTP status: ' + response.status
    );
  }

  return (await response.json()) as Dashboard[]; // Type assertion to specify the data shape Array of dashboards
};

const fetchDashboardItems = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/${id}.json`);
  if (!response.ok) {
    throw new Error(
      'Failed to fetch dashboards. HTTP status: ' + response.status
    );
  }

  return (await response.json()) as unknown as Dashboard; // Type assertion to specify the data shape Single dashboard
};

export { fetchDashboards, fetchDashboardItems };
