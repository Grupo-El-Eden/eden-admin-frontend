import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

export interface IQueryProvider {
  children?: ReactNode
}

const queryClient = new QueryClient()

function QueryProvider({ children }: IQueryProvider) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default QueryProvider;