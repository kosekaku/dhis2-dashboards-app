import { useQuery } from 'react-query';

export const useDashboardData = <T,>(
  queryKey: string | string[],
  fetchDashboard: () => Promise<T>
) => {
  const { data, isLoading, isError } = useQuery<T>(queryKey, fetchDashboard);
  return { data, isLoading, isError };
};
