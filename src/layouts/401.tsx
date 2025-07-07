import { Lock, Home, ArrowLeft, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function Error401() {
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
          <div className="mx-auto mb-4 w-16 h-16 bg-secondary/50 rounded-full flex items-center justify-center">
            <Lock className="w-8 h-8 text-secondary-foreground" />
          </div>
          <CardTitle className="text-3xl font-bold text-foreground mb-2">Error 401</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">No autorizado</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <Alert className="border-secondary/20 bg-secondary/10">
            <Lock className="h-4 w-4 text-secondary-foreground" />
            <AlertDescription className="text-secondary-foreground">
              Necesitas iniciar sesión para acceder a esta página. Tu sesión puede haber expirado.
            </AlertDescription>
          </Alert>

          <div className="text-center text-sm text-muted-foreground space-y-1">
            <p>
              Código de error: <span className="font-mono font-semibold">401</span>
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

          <p className="text-xs text-muted-foreground text-center mt-4">¿Olvidaste tu contraseña? Recupera tu cuenta</p>
        </CardFooter>
      </Card>
    </div>
  )
}
