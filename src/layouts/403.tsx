import { Shield, Home, ArrowLeft, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function Error403() {
  const handleGoHome = () => {
    window.location.href = "/"
  }

  const handleGoBack = () => {
    window.history.back()
  }

  const handleLogin = () => {
    window.location.href = "/login"
  }

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl border-0 bg-card/80 backdrop-blur-sm">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-4 w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
            <Shield className="w-8 h-8 text-destructive" />
          </div>
          <CardTitle className="text-3xl font-bold text-foreground mb-2">Error 403</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">Acceso prohibido</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <Alert className="border-destructive/20 bg-destructive/5">
            <Shield className="h-4 w-4 text-destructive" />
            <AlertDescription className="text-destructive">
              No tienes permisos para acceder a esta página. Contacta al administrador si crees que esto es un error.
            </AlertDescription>
          </Alert>

          <div className="text-center text-sm text-muted-foreground space-y-1">
            <p>
              Código de error: <span className="font-mono font-semibold">403</span>
            </p>
            <p>
              Tiempo: <span className="font-mono">{new Date().toLocaleString()}</span>
            </p>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-2 pt-4">
          <Button onClick={handleLogin} className="w-full" size="lg">
            <LogIn className="w-4 h-4 mr-2" />
            Iniciar sesión
          </Button>

          <div className="flex space-x-2 w-full">
            <Button onClick={handleGoBack} variant="outline" className="flex-1 bg-background">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>

            <Button onClick={handleGoHome} variant="outline" className="flex-1 bg-background">
              <Home className="w-4 h-4 mr-2" />
              Inicio
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-4">
            Si necesitas acceso, contacta al administrador del sistema
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
