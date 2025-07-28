"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export const DashboardView = () => {
	const router = useRouter();
	const { data: session } = authClient.useSession();

	if (!session) {
		return (
			<div className="flex items-center justify-center h-screen">
				<Loader
					className="animate-spin text-black"
					size={40}
				/>
			</div>
		);
	}
	return (
		<div className="flex flex-col p-4 gap-y-4">
			<p>Logged in as {session.user.name}</p>

			<Button
				onClick={() =>
					authClient.signOut({
						fetchOptions: {
							onSuccess: () => router.push("/sign-in"),
						},
					})
				}>
				Sign Out
			</Button>
		</div>
	);
};
