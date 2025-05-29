"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Form } from "react-hook-form";

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";

const registerSchema = z.object({
	name: z.string().trim().min(1, { message: "Nome é obrigatório!" }),
	email: z.string().trim().min(1, { message: "E-mail é obrigatório!" }).email({ message: "E-mail inválido!" }),
	password: z.string().trim().min(6, { message: "A senha deve ter pelo menos 6 caracteres!" }),
})

const SignUpForm = () => {
	const form = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	})

	function onSubmit(values: z.infer<typeof registerSchema>) {
		console.log(values)
	}

	return (
		<Card>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<CardHeader>
						<CardTitle>Criar Conta</CardTitle>
						<CardDescription>
							Preencha suas informações para criar uma nova conta.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nome Completo</FormLabel>
									<FormControl>
										<Input placeholder="Pedro Duarte" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>E-mail</FormLabel>
									<FormControl>
										<Input placeholder="pedro@exemplo.com" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Senha</FormLabel>
									<FormControl>
										<Input type="password" placeholder="******" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</CardContent>
					<CardFooter>
						<Button type="submit" className="w-full">Criar Conta</Button>
					</CardFooter>
				</form>
			</Form>
		</Card>
	);
}

export default SignUpForm;