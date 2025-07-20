import { auth } from "@/lib/auth";
import { DashboardView } from "@/modules/home/ui/views/dashboard-view";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) {
		redirect("/sign-in");
	}
	
	return <DashboardView />;
};

export default DashboardPage;
