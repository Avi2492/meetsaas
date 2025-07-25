"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { OctagonAlertIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SvgLogo from "@/components/common/svg";

const formSchema = z.object({
	email: z.string().email(),
	password: z.string().min(1, { message: "Password is Required" }),
});

export const SignInView = () => {
	const router = useRouter();
	const [error, setError] = useState<string | null>(null);
	const [pending, setPending] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		setError(null);
		setPending(true);

		authClient.signIn.email(
			{
				email: data.email,
				password: data.password,
				callbackURL: "/dashboard",
			},
			{
				onSuccess: () => {
					setPending(false);
					router.push("/dashboard");
				},
				onError: ({ error }) => {
					setError(error.message);
				},
			},
		);
	};

	const onSocial = async (provider: "github" | "google") => {
		setError(null);
		setPending(true);

		authClient.signIn.social(
			{
				provider: provider,
				callbackURL: "/dashboard",
			},
			{
				onSuccess: () => {
					setPending(false);
				},
				onError: ({ error }) => {
					setError(error.message);
				},
			},
		);
	};

	return (
		<div className="flex flex-col gap-6">
			<Card className="overflow-hidden p-0">
				<CardContent className="grid p-0 md:grid-cols-2">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="p-6 lg:p-8">
							<div className="flex flex-col gap-6">
								<div className="flex flex-col items-center text-center">
									<h1 className="text-2xl font-bold">Welcome Back</h1>
									<p className="text-muted-foreground text-balance">
										Login to your account
									</p>
								</div>
								<div className="grid gap-3">
									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Email</FormLabel>
												<FormControl>
													<Input
														type="email"
														placeholder="meetai@example.com"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<div className="grid gap-3">
									<FormField
										control={form.control}
										name="password"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Password</FormLabel>
												<FormControl>
													<Input
														type="password"
														placeholder="Abc123!@#"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								{!!error && (
									<Alert className="bg-destructive/10 border-none">
										<OctagonAlertIcon className="h-4 w-4 !text-destructive" />
										<AlertTitle>{error}</AlertTitle>
									</Alert>
								)}

								<Button
									type="submit"
									className="w-full"
									disabled={pending}>
									Sign In
								</Button>

								<div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
									<span className="bg-card text-muted-foreground relative z-10 px-2">
										Or Continue With
									</span>
								</div>

								<div className="grid grid-cols-2 gap-4">
									<Button
										variant={"outline"}
										type="button"
										className="w-full py-2"
										disabled={pending}
										onClick={() => onSocial("google")}>
										<Image
											src={"/google.png"}
											width={30}
											height={30}
											alt="google"
										/>
									</Button>
									<Button
										variant={"outline"}
										type="button"
										className="w-full py-2"
										disabled={pending}
										onClick={() => onSocial("github")}>
										<Image
											src={"/github.png"}
											width={30}
											height={30}
											alt="github"
										/>
									</Button>
								</div>

								<div className="text-center text-sm">
									{"Don't"} have and account?{" "}
									<Link
										href={"/sign-up"}
										className="underline underline-offset-4">
										Sign Up
									</Link>
								</div>
							</div>
						</form>
					</Form>
					<div className="bg-radial from-sidebar-accent to-sidebar relative hidden md:flex flex-col gap-y-4 items-center justify-center">
						{/* <img
							src="/logo-1.svg"
							alt="image"
							className="w-[100] h-[100]"
						/> */}
						<SvgLogo />
						<p className="text-2xl font-semibold text-white">Meet.Ai</p>
					</div>
				</CardContent>
			</Card>

			<div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
				By clicking continue, you agree to our <a href="#">Terms Of Service</a>{" "}
				and <a href="#">Privacy Policy</a>
			</div>
		</div>
	);
};
