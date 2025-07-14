//// filepath: src/config/providers/ErrorManagerProvider.tsx
import * as React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@components/ui/Dialog'
import { Button } from '@components/ui/Button'

interface ErrorManagerContextProps {
  error: Error | null
  setError: (error: Error) => void
  clearError: () => void
}

const ErrorManagerContext = React.createContext<ErrorManagerContextProps | undefined>(undefined)

export const ErrorBoundary = class extends React.Component<{ children: React.ReactNode }, { error: Error | null }> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { error: null }
  }
  static getDerivedStateFromError(error: Error) {
    return { error }
  }
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error(error, info)
  }
  render() {
    if (this.state.error) {
      // lo dejamos al contexto para mostrar modal
      return this.props.children
    }
    return this.props.children
  }
}

export const ErrorManagerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [error, setErrorState] = React.useState<Error | null>(null)
  const clearError = () => setErrorState(null)

  return (
    <ErrorManagerContext.Provider value={{ error, setError: setErrorState, clearError }}>
      <ErrorBoundary>{children}</ErrorBoundary>

      {/* modal que se abre cada vez que hay un error */}
      <Dialog open={!!error} onOpenChange={clearError}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Se ha producido un error</DialogTitle>
            <DialogDescription>
              {error?.message.startsWith('<') ? (
                <div dangerouslySetInnerHTML={{ __html: error.message }} />
              ) : (
                <pre className="overflow-auto text-xs">{JSON.stringify(error, null, 2)}</pre>
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={clearError}>Cerrar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </ErrorManagerContext.Provider>
  )
}

export const useErrorManager = () => {
  const ctx = React.useContext(ErrorManagerContext)
  if (!ctx) throw new Error('useErrorManager debe usarse dentro de <ErrorManagerProvider>')
  return ctx
}