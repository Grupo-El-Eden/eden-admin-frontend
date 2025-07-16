import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { useTranslation } from "react-i18next"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { t } = useTranslation("common")


  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">{t("translation.login.welcome")}</h1>
                <p className="text-muted-foreground text-balance">
                  {t("translation.login.login_to_account")}
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">{t("translation.login.email")}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="micorreo@eleden.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">{t("translation.login.password")}</Label>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    {t("translation.login.forgot_password")}
                  </a>
                </div>
                <Input id="password" placeholder="********" type="password" required />
              </div>
              <Button type="submit" className="w-full cursor-pointer">
                {t("translation.login.continue")}
              </Button>

            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="/el-eden-icon.jpg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </CardContent>
      </Card>

    </div>
  )
}
