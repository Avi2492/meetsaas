// "use client";

// import Link from "next/link";
// import { Card, CardContent } from "@/components/ui/card";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
// 	Form,
// 	FormControl,
// 	FormField,
// 	FormItem,
// 	FormLabel,
// 	FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Alert, AlertTitle } from "@/components/ui/alert";
// import { Loader, OctagonAlertIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";
// import { authClient } from "@/lib/auth-client";
// import Image from "next/image";

// const formSchema = z.object({
// 	name: z.string().min(5, { message: "Minlength is 6" }),
// 	email: z.string().email(),
// 	password: z.string().min(1, { message: "Password is Required" }),
// });

// export const SignUpView = () => {
// 	const router = useRouter();
// 	const [error, setError] = useState<string | null>(null);
// 	const [loading, setLoading] = useState<boolean>(false);

// 	const form = useForm<z.infer<typeof formSchema>>({
// 		resolver: zodResolver(formSchema),
// 		defaultValues: {
// 			name: "",
// 			email: "",
// 			password: "",
// 		},
// 	});

// 	const onSubmit = async (data: z.infer<typeof formSchema>) => {
// 		setError(null);
// 		setLoading(true);

// 		authClient.signUp.email(
// 			{
// 				name: data.name,
// 				email: data.email,
// 				password: data.password,
// 			},
// 			{
// 				onSuccess: () => {
// 					router.push("/dashboard");
// 				},
// 				onError: ({ error }) => {
// 					setError(error.message);
// 				},
// 			},
// 		);

// 		setLoading(false);
// 	};

// 	return (
// 		<div className="flex flex-col gap-6">
// 			<Card className="overflow-hidden p-0">
// 				<CardContent className="grid p-0 md:grid-cols-2">
// 					<Form {...form}>
// 						<form
// 							onSubmit={form.handleSubmit(onSubmit)}
// 							className="p-6 lg:p-8">
// 							<div className="flex flex-col gap-6">
// 								<div className="flex flex-col items-center text-center">
// 									<h1 className="text-2xl font-bold">Create Account</h1>
// 									<p className="text-muted-foreground text-balance">
// 										Login to your account
// 									</p>
// 								</div>
// 								<div className="grid gap-3">
// 									<FormField
// 										control={form.control}
// 										name="name"
// 										render={({ field }) => (
// 											<FormItem>
// 												<FormLabel>Name</FormLabel>
// 												<FormControl>
// 													<Input
// 														type="text"
// 														placeholder="John Doe"
// 														{...field}
// 													/>
// 												</FormControl>
// 												<FormMessage />
// 											</FormItem>
// 										)}
// 									/>
// 								</div>
// 								<div className="grid gap-3">
// 									<FormField
// 										control={form.control}
// 										name="email"
// 										render={({ field }) => (
// 											<FormItem>
// 												<FormLabel>Email</FormLabel>
// 												<FormControl>
// 													<Input
// 														type="email"
// 														placeholder="meetai@example.com"
// 														{...field}
// 													/>
// 												</FormControl>
// 												<FormMessage />
// 											</FormItem>
// 										)}
// 									/>
// 								</div>
// 								<div className="grid gap-3">
// 									<FormField
// 										control={form.control}
// 										name="password"
// 										render={({ field }) => (
// 											<FormItem>
// 												<FormLabel>Password</FormLabel>
// 												<FormControl>
// 													<Input
// 														type="password"
// 														placeholder="Abc123!@#"
// 														{...field}
// 													/>
// 												</FormControl>
// 												<FormMessage />
// 											</FormItem>
// 										)}
// 									/>
// 								</div>
// 								{!!error && (
// 									<Alert className="bg-destructive/10 border-none">
// 										<OctagonAlertIcon className="h-4 w-4 !text-destructive" />
// 										<AlertTitle>{error}</AlertTitle>
// 									</Alert>
// 								)}

// 								<Button
// 									type="submit"
// 									className="w-full">
// 									{loading ? (
// 										<Loader
// 											className="animate-spin"
// 											size={18}
// 										/>
// 									) : (
// 										"Sign Up"
// 									)}
// 								</Button>

// 								<div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
// 									<span className="bg-card text-muted-foreground relative z-10 px-2">
// 										Or Continue With
// 									</span>
// 								</div>

// 								<div className="grid grid-cols-2 gap-4">
// 									<Button
// 										variant={"outline"}
// 										type="button"
// 										className="w-full py-2">
// 										<Image
// 											src={"/google.png"}
// 											width={30}
// 											height={30}
// 											alt="google"
// 										/>
// 									</Button>
// 									<Button
// 										variant={"outline"}
// 										type="button"
// 										className="w-full py-2">
// 										<Image
// 											src={"/github.png"}
// 											width={30}
// 											height={30}
// 											alt="github"
// 										/>
// 									</Button>
// 								</div>

// 								<div className="text-center text-sm">
// 									Already have an account?{" "}
// 									<Link
// 										href={"/sign-in"}
// 										className="underline underline-offset-4">
// 										Login
// 									</Link>
// 								</div>
// 							</div>
// 						</form>
// 					</Form>
// 					<div className="bg-radial from-[#129990] to-[#06202B] relative hidden md:flex flex-col gap-y-4 items-center justify-center">
// 						<img
// 							src="/auth.png"
// 							alt="image"
// 							className="w-[100%]"
// 							// width={92}
// 							// height={92}
// 						/>
// 						{/* <p className="text-2xl font-semibold text-white">Meet.Ai</p> */}
// 					</div>
// 				</CardContent>
// 			</Card>

// 			<div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
// 				By clicking continue, you agree to our <a href="#">Terms Of Service</a>{" "}
// 				and <a href="#">Privacy Policy</a>
// 			</div>
// 		</div>
// 	);
// };

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
import { Loader, AlertTriangle, Bot, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const formSchema = z.object({
	name: z.string().min(5, { message: "Minlength is 6" }),
	email: z.string().email(),
	password: z.string().min(1, { message: "Password is Required" }),
});

export const SignUpView = () => {
	const router = useRouter();
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		setError(null);
		setLoading(true);

		authClient.signUp.email(
			{
				name: data.name,
				email: data.email,
				password: data.password,
			},
			{
				onSuccess: () => {
					router.push("/dashboard");
				},
				onError: ({ error }) => {
					setError(error.message);
				},
			},
		);

		setLoading(false);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
			<div className="w-full max-w-6xl">
				<Card className="overflow-hidden border-0 bg-black/20 backdrop-blur-lg shadow-2xl">
					<CardContent className="grid p-0 md:grid-cols-2">
						{/* Form Section */}
						<div className="p-8 lg:p-12">
							{/* Logo/Branding */}
							<div className="flex items-center space-x-2 mb-8">
								<div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
									<Bot className="w-6 h-6 text-white" />
								</div>
								<span className="text-xl font-bold text-white">CallBot AI</span>
							</div>

							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className="space-y-6">
									<div className="text-center mb-8">
										<h1 className="text-3xl font-bold text-white mb-2">
											Create Account
										</h1>
										<p className="text-gray-400">
											Join thousands of businesses revolutionizing their
											communications
										</p>
									</div>

									{/* Name Field */}
									<FormField
										control={form.control}
										name="name"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="text-white font-medium">
													Full Name
												</FormLabel>
												<FormControl>
													<Input
														type="text"
														placeholder="John Doe"
														className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20 h-12"
														{...field}
													/>
												</FormControl>
												<FormMessage className="text-red-400" />
											</FormItem>
										)}
									/>

									{/* Email Field */}
									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="text-white font-medium">
													Email Address
												</FormLabel>
												<FormControl>
													<Input
														type="email"
														placeholder="your@email.com"
														className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20 h-12"
														{...field}
													/>
												</FormControl>
												<FormMessage className="text-red-400" />
											</FormItem>
										)}
									/>

									{/* Password Field */}
									<FormField
										control={form.control}
										name="password"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="text-white font-medium">
													Password
												</FormLabel>
												<FormControl>
													<div className="relative">
														<Input
															type={showPassword ? "text" : "password"}
															placeholder="Create a strong password"
															className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20 h-12 pr-12"
															{...field}
														/>
														<button
															type="button"
															onClick={() => setShowPassword(!showPassword)}
															className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors">
															{showPassword ? (
																<EyeOff className="w-5 h-5" />
															) : (
																<Eye className="w-5 h-5" />
															)}
														</button>
													</div>
												</FormControl>
												<FormMessage className="text-red-400" />
											</FormItem>
										)}
									/>

									{/* Error Alert */}
									{!!error && (
										<Alert className="bg-red-500/10 border-red-500/20 backdrop-blur-sm">
											<AlertTriangle className="h-4 w-4 text-red-400" />
											<AlertTitle className="text-red-400">{error}</AlertTitle>
										</Alert>
									)}

									{/* Submit Button */}
									<Button
										type="submit"
										disabled={loading}
										className="w-full h-12 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold text-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
										{loading ? (
											<Loader
												className="animate-spin"
												size={20}
											/>
										) : (
											"Create Account"
										)}
									</Button>

									{/* Divider */}
									<div className="relative">
										<div className="absolute inset-0 flex items-center">
											<span className="w-full border-t border-white/20" />
										</div>
										<div className="relative flex justify-center text-xs uppercase">
											<span className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-2 text-gray-400">
												Or continue with
											</span>
										</div>
									</div>

									{/* Social Login Buttons */}
									<div className="grid grid-cols-2 gap-4">
										<Button
											variant="outline"
											type="button"
											className="h-12 bg-white/5 border-white/20 hover:bg-white/10 text-white transition-all">
											<Image
												src="/google.png"
												width={24}
												height={24}
												alt="Google"
												className="mr-2"
											/>
											Google
										</Button>
										<Button
											variant="outline"
											type="button"
											className="h-12 bg-white/5 border-white/20 hover:bg-white/10 text-white transition-all">
											<Image
												src="/github.png"
												width={24}
												height={24}
												alt="GitHub"
												className="mr-2"
											/>
											GitHub
										</Button>
									</div>

									{/* Sign In Link */}
									<div className="text-center">
										<span className="text-gray-400">
											Already have an account?{" "}
										</span>
										<Link
											href="/sign-in"
											className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
											Sign In
										</Link>
									</div>
								</form>
							</Form>
						</div>

						{/* Image/Branding Section */}
						<div className="bg-gradient-to-br from-cyan-600/20 to-purple-600/20 backdrop-blur-sm relative hidden md:flex flex-col items-center justify-center p-12 border-l border-white/10">
							<div className="text-center space-y-6">
								<div className="w-32 h-32 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mb-8">
									<Bot className="w-16 h-16 text-white" />
								</div>
								<h2 className="text-3xl font-bold text-white mb-4">
									Welcome to the Future of Communication
								</h2>
								<p className="text-gray-300 text-lg leading-relaxed max-w-md">
									Join thousands of businesses already using AI to transform
									their call management and customer interactions.
								</p>
								<div className="flex items-center justify-center space-x-6 mt-8">
									<div className="text-center">
										<div className="text-2xl font-bold text-cyan-400">
											99.9%
										</div>
										<div className="text-sm text-gray-400">Uptime</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold text-purple-400">
											10K+
										</div>
										<div className="text-sm text-gray-400">Active Users</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold text-green-400">
											4.9★
										</div>
										<div className="text-sm text-gray-400">Rating</div>
									</div>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Terms and Privacy */}
				<div className="text-center text-sm text-gray-400 mt-6">
					By creating an account, you agree to our{" "}
					<Link
						href="#"
						className="text-cyan-400 hover:text-cyan-300 transition-colors">
						Terms of Service
					</Link>{" "}
					and{" "}
					<Link
						href="#"
						className="text-cyan-400 hover:text-cyan-300 transition-colors">
						Privacy Policy
					</Link>
				</div>
			</div>
		</div>
	);
};
