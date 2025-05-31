import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./authentication/components/login-form";
import SignUpForm from "./authentication/components/sign-up-form";

export default function Home() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 flex-col items-center justify-center p-6 md:p-10">
          <div className="w-full flex flex-col items-center mb-10">
            <a href="#" className="flex items-center justify-center font-medium">
              <div className="text-primary-foreground flex items-center justify-center rounded-md">
                <Image src="/logo.svg" alt="Doutor Agenda" width={180} height={48} />
              </div>
            </a>
            <span className="mt-1 text-muted-foreground text-md font-medium text-center">
              O melhor jeito de gerenciar sua clínica!
            </span>
          </div>
          <div className="w-full max-w-xs mt-5 flex flex-col items-center">
            <Tabs defaultValue="login" className="w-[400px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Criar conta</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <LoginForm />
              </TabsContent>
              <TabsContent value="register">
                <SignUpForm />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          width={1920}
          height={1080}
          src="/background.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
