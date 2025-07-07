import { AlertTriangle, Home, RefreshCw, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function Error500() {
  const handleRefresh = () => {
    window.location.reload()
  }

  const handleGoHome = () => {
    window.location.href = "/"
  }

  const handleGoBack = () => {
    window.history.back()
  }

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl border-0 bg-card/80 backdrop-blur-sm">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-4 w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-destructive" />
          </div>
          <CardTitle className="text-3xl font-bold text-foreground mb-2">Error 500</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">Error interno del servidor</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <Alert className="border-destructive/20 bg-destructive/5">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <AlertDescription className="text-destructive">
              Lo sentimos, algo salió mal en nuestros servidores. Nuestro equipo técnico ha sido notificado y está
              trabajando para resolver el problema.
            </AlertDescription>
          </Alert>

          <div className="text-center text-sm text-muted-foreground space-y-1">
            <p>
              Código de error: <span className="font-mono font-semibold">500</span>
            </p>
            <p>
              Tiempo: <span className="font-mono">{new Date().toLocaleString()}</span>
            </p>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-2 pt-4">
          <Button
            onClick={handleRefresh}
            className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground"
            size="lg"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Intentar de nuevo
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
            Si el problema persiste, contacta a nuestro equipo de soporte
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
