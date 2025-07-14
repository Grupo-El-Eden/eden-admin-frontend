import * as React from 'react'
import { useErrorManager } from '@config/providers/ErrorManagerProvider'

export function DashboardErrorTest() {
  const { setError } = useErrorManager()

  React.useEffect(() => {
    fetch('/api/dashboard') // endpoint que devuelve error JSON
      .then(async (res) => {
        if (!res.ok) {
          const body = await res.json()
          // transformamos el cuerpo en Error para que lo capture el modal
          throw new Error(JSON.stringify(body, null, 2))
        }
        return res.json()
      })
      .catch(err => {
        setError(err as Error)
      })
  }, [setError])

  return <div>Cargando dashboard…</div>
}