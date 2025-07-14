import { useEffect } from 'react'
import { useErrorManager } from '@config/providers/ErrorManagerProvider'

export function DashboardErrorTest() {
	const { setError } = useErrorManager()

  const errMessage = {
    message: 'Error de prueba en el dashboard',
    stack: 'Stack de error de prueba'
  }

  const htmlError = `<div style='width: 100%; background-color: #fff; padding: 1rem; border-radius: 5px'><h1 style='color:red; font-weight: 700'>Error 404: Not found :-(</h1>
    <p>I have no idea where that file is, sorry.  Are you sure you typed in the correct URL?</p>
    <h1>Oops! Something went wrong...</h1>
    <p>We seem to be having some technical difficulties. Hang tight.</p></div>`
  
  useEffect(() => {
    setTimeout(() => {
      setError(errMessage as Error)
      setError(new Error(htmlError))
      throw new Error('Error de prueba en el dashboard')
    }, 1000)
  }, [])

  return (
		<div>
			Some data will be displayed here.
      <p>Check the error manager for the error.</p>
		</div>
	)
}
