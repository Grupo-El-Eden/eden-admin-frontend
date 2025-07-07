import { Search, Home, ArrowLeft, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function Error404() {
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
          <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Search className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold text-foreground mb-2">Error 404</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">Página no encontrada</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <Alert className="border-primary/20 bg-primary/5">
            <Search className="h-4 w-4 text-primary" />
            <AlertDescription className="text-primary">
              La página que estás buscando no existe o ha sido movida. Verifica la URL o navega desde el menú principal.
            </AlertDescription>
          </Alert>

          <div className="text-center text-sm text-muted-foreground space-y-1">
            <p>
              Código de error: <span className="font-mono font-semibold">404</span>
            </p>
            <p>
              Tiempo: <span className="font-mono">{new Date().toLocaleString()}</span>
            </p>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-2 pt-4">
          <Button onClick={handleGoHome} className="w-full" size="lg">
            <Home className="w-4 h-4 mr-2" />
            Ir al inicio
          </Button>

          <div className="flex space-x-2 w-full">
            <Button onClick={handleGoBack} variant="outline" className="flex-1 bg-background">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>

            <Button onClick={handleRefresh} variant="outline" className="flex-1 bg-background">
              <RefreshCw className="w-4 h-4 mr-2" />
              Recargar
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-4">
            ¿Necesitas ayuda? Contacta a nuestro equipo de soporte
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
