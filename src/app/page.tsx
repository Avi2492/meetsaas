"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import {
	Phone,
	Bot,
	Zap,
	Shield,
	Users,
	CheckCircle,
	ArrowRight,
	Menu,
	X,
	Star,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
	const { data: session } = authClient.useSession();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	if (session) {
		return (
			<div className="flex flex-col p-4 gap-y-4">
				<p>Logged in as {session.user.name}</p>
				<Button onClick={() => authClient.signOut()}>Signout</Button>
			</div>
		);
	}
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
			<nav className="fixed w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center py-4">
						<div className="flex items-center space-x-2">
							<div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
								<Bot className="w-6 h-6 text-white" />
							</div>
							<span className="text-xl font-bold text-white">CallBot AI</span>
						</div>

						<div className="hidden md:flex items-center space-x-8">
							<a
								href="#features"
								className="text-gray-300 hover:text-white transition-colors">
								Features
							</a>
							<a
								href="#pricing"
								className="text-gray-300 hover:text-white transition-colors">
								Pricing
							</a>
							<a
								href="#about"
								className="text-gray-300 hover:text-white transition-colors">
								About
							</a>
							<button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all transform hover:scale-105">
								<Link href={"/sign-in"}>Get Started</Link>
							</button>
						</div>

						<button
							className="md:hidden text-white"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
							{mobileMenuOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</button>
					</div>

					{mobileMenuOpen && (
						<div className="md:hidden bg-black/40 backdrop-blur-lg rounded-lg mt-2 p-4">
							<div className="flex flex-col space-y-4">
								<a
									href="#features"
									className="text-gray-300 hover:text-white transition-colors">
									Features
								</a>
								<a
									href="#pricing"
									className="text-gray-300 hover:text-white transition-colors">
									Pricing
								</a>
								<a
									href="#about"
									className="text-gray-300 hover:text-white transition-colors">
									About
								</a>
								<button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold w-full">
									Get Started
								</button>
							</div>
						</div>
					)}
				</div>
			</nav>

			<main className="pt-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
					<div className="text-center">
						<div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full px-6 py-2 mb-8 border border-cyan-500/30">
							<Zap className="w-4 h-4 text-cyan-400 mr-2" />
							<span className="text-cyan-300 text-sm font-medium">
								AI-Powered Call Management
							</span>
						</div>

						<h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
							Transfer Your Calls &
							<span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
								{" "}
								Meets with AI Bots
							</span>
						</h1>

						<p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
							Revolutionize your communication workflow with intelligent AI bots
							that seamlessly handle call transfers, meeting scheduling, and
							customer interactions with human-like precision.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center">
								Start Free Trial <ArrowRight className="w-5 h-5 ml-2" />
							</button>
							<button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all">
								Watch Demo
							</button>
						</div>

						<div className="mt-12 flex justify-center items-center space-x-8 text-gray-400">
							<div className="flex items-center">
								<Star className="w-5 h-5 text-yellow-400 mr-1" />
								<span>4.9/5 Rating</span>
							</div>
							<div className="flex items-center">
								<Users className="w-5 h-5 text-cyan-400 mr-1" />
								<span>10K+ Users</span>
							</div>
						</div>
					</div>
				</div>
			</main>

			{/* Features Section */}
			<section
				id="features"
				className="py-20 bg-black/20 backdrop-blur-sm">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-white mb-4">
							Powerful AI Features
						</h2>
						<p className="text-xl text-gray-300">
							Advanced capabilities that transform how you handle communications
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all group">
							<div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
								<Phone className="w-6 h-6 text-white" />
							</div>
							<h3 className="text-2xl font-bold text-white mb-4">
								Smart Call Transfer
							</h3>
							<p className="text-gray-300 leading-relaxed">
								AI bots intelligently route calls based on context, urgency, and
								availability, ensuring every call reaches the right person
								instantly.
							</p>
						</div>

						<div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all group">
							<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
								<Bot className="w-6 h-6 text-white" />
							</div>
							<h3 className="text-2xl font-bold text-white mb-4">
								Meeting Automation
							</h3>
							<p className="text-gray-300 leading-relaxed">
								Schedule, reschedule, and manage meetings automatically while
								maintaining natural conversation flow with clients.
							</p>
						</div>

						<div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-white/10 hover:border-green-500/30 transition-all group">
							<div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
								<Shield className="w-6 h-6 text-white" />
							</div>
							<h3 className="text-2xl font-bold text-white mb-4">
								Enterprise Security
							</h3>
							<p className="text-gray-300 leading-relaxed">
								Bank-grade encryption and compliance with industry standards
								ensure your communications remain secure and private.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-4xl font-bold text-white mb-6">
								Why Choose CallBot AI?
							</h2>
							<div className="space-y-6">
								<div className="flex items-start">
									<CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1" />
									<div>
										<h3 className="text-xl font-semibold text-white mb-2">
											24/7 Availability
										</h3>
										<p className="text-gray-300">
											Your AI assistant never sleeps, handling calls and
											meetings around the clock.
										</p>
									</div>
								</div>
								<div className="flex items-start">
									<CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1" />
									<div>
										<h3 className="text-xl font-semibold text-white mb-2">
											Reduce Wait Times
										</h3>
										<p className="text-gray-300">
											Instant call routing eliminates hold times and improves
											customer satisfaction.
										</p>
									</div>
								</div>
								<div className="flex items-start">
									<CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1" />
									<div>
										<h3 className="text-xl font-semibold text-white mb-2">
											Cost Effective
										</h3>
										<p className="text-gray-300">
											Reduce staffing costs while improving service quality and
											response times.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 p-8 rounded-2xl border border-white/10">
							<div className="text-center">
								<div className="text-5xl font-bold text-cyan-400 mb-2">
									99.9%
								</div>
								<div className="text-gray-300 mb-6">Uptime Guarantee</div>
								<div className="grid grid-cols-2 gap-4 text-center">
									<div>
										<div className="text-2xl font-bold text-white">50%</div>
										<div className="text-sm text-gray-400">Faster Response</div>
									</div>
									<div>
										<div className="text-2xl font-bold text-white">85%</div>
										<div className="text-sm text-gray-400">Cost Reduction</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border-y border-white/10">
				<div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
					<h2 className="text-4xl font-bold text-white mb-6">
						Ready to Transform Your Communications?
					</h2>
					<p className="text-xl text-gray-300 mb-8">
						Join thousands of businesses already using CallBot AI to streamline
						their operations.
					</p>
					<button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all transform hover:scale-105">
						Start Your Free Trial Today
					</button>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-black/40 backdrop-blur-sm border-t border-white/10">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
					<div className="grid md:grid-cols-4 gap-8">
						<div>
							<div className="flex items-center space-x-2 mb-4">
								<div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
									<Bot className="w-5 h-5 text-white" />
								</div>
								<span className="text-lg font-bold text-white">CallBot AI</span>
							</div>
							<p className="text-gray-400 leading-relaxed">
								Revolutionizing business communications with intelligent AI
								automation.
							</p>
						</div>

						<div>
							<h3 className="text-white font-semibold mb-4">Product</h3>
							<div className="space-y-2 text-gray-400">
								<div>
									<a
										href="#"
										className="hover:text-white transition-colors">
										Features
									</a>
								</div>
								<div>
									<a
										href="#"
										className="hover:text-white transition-colors">
										Pricing
									</a>
								</div>
								<div>
									<a
										href="#"
										className="hover:text-white transition-colors">
										API
									</a>
								</div>
							</div>
						</div>

						<div>
							<h3 className="text-white font-semibold mb-4">Company</h3>
							<div className="space-y-2 text-gray-400">
								<div>
									<a
										href="#"
										className="hover:text-white transition-colors">
										About
									</a>
								</div>
								<div>
									<a
										href="#"
										className="hover:text-white transition-colors">
										Careers
									</a>
								</div>
								<div>
									<a
										href="#"
										className="hover:text-white transition-colors">
										Contact
									</a>
								</div>
							</div>
						</div>

						<div>
							<h3 className="text-white font-semibold mb-4">Support</h3>
							<div className="space-y-2 text-gray-400">
								<div>
									<a
										href="#"
										className="hover:text-white transition-colors">
										Help Center
									</a>
								</div>
								<div>
									<a
										href="#"
										className="hover:text-white transition-colors">
										Documentation
									</a>
								</div>
								<div>
									<a
										href="#"
										className="hover:text-white transition-colors">
										Status
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
						<p className="text-gray-400 text-sm">
							© 2025 CallBot AI. All rights reserved.
						</p>
						<div className="flex space-x-6 mt-4 md:mt-0">
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors text-sm">
								Privacy Policy
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors text-sm">
								Terms of Service
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
