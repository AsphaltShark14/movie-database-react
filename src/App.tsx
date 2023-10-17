
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Root } from './routes/root/Root';

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Root />
    </QueryClientProvider>
  )
}

export default App
