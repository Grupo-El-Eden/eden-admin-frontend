import { GET } from '@config/fetcher/Get'
import { useErrorManager } from '@config/providers/ErrorManagerProvider'

export function DashboardErrorTest() {
	const { setError } = useErrorManager()

  const { data, isLoading } = useQuery({
    queryKey: ['dashboard'],
    queryFn: () => GET('/api/dashboad'), // This request is to simulate an error
    onError: (err) => {
      setError(err as Error)
    },
  })

  if (isLoading) {
    return <div>Cargando dashboard…</div>
  }

  return (
		<div>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	)
}
