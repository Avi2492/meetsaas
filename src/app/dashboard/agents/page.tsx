import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient, trpc } from "@/trpc/server";
import { AgentsView } from "@/modules/agents/ui/view/agents-view";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import LoadingState from "@/components/common/loading-state";
import ErrorState from "@/components/common/error-state";
import ListHeader from "@/modules/agents/components/list-header";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SearchParams } from "nuqs";
import { loadSearchParams } from "@/modules/agents/params";

interface Props {
	searchParams: Promise<SearchParams>;
}

const AgentsPage = async ({ searchParams }: Props) => {
	const filters = await loadSearchParams(searchParams);
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) {
		redirect("/sign-in");
	}

	const queryClient = getQueryClient();
	void queryClient.prefetchQuery(
		trpc.agents.getMany.queryOptions({
			...filters,
		}),
	);

	return (
		<>
			<ListHeader />
			<HydrationBoundary state={dehydrate(queryClient)}>
				<Suspense
					fallback={
						<LoadingState
							title="Loading Agents"
							description="This may take a few seconds"
						/>
					}>
					<ErrorBoundary
						fallback={
							<ErrorState
								title="Error Loading Agents"
								description="Please try again later."
							/>
						}>
						<AgentsView />
					</ErrorBoundary>
				</Suspense>
			</HydrationBoundary>
		</>
	);
};

export default AgentsPage;
