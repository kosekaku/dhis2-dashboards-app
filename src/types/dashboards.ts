// Dashboard props interface
export interface Dashboard {
  id: string;
  displayName: string;
  // Dasboard items with visualizations details
  items: Array<{
    id: string;
    type?: string;
    name?: string;
  }>;
  dashboardItems?: any;
}
