
import { Toaster } from 'sonner'
import './App.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ControlLayer from './layouts/ControlLayout'
import AuthButton from './components/Global/AuthButton/index'
import Widget from './components/Global/Widget/index'

function App() {

  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
    <ControlLayer>
      <AuthButton/>
      <Widget/>
    </ControlLayer >
      <Toaster />
    </QueryClientProvider>

  )
}

export default App