import { QueryClient, QueryClientProvider } from 'react-query';
import DashboardApp from './components/DashboardApp';
import './App.css';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <DashboardApp />
      </div>
    </QueryClientProvider>
  );
}

export default App;
