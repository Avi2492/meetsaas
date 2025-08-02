import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient, trpc } from "@/trpc/server";
import { AgentsView } from "@/modules/agents/ui/view/agents-view";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import LoadingState from "@/components/common/loading-state";
import ErrorState from "@/components/common/error-state";

const AgentsPage = async () => {
	const queryClient = getQueryClient();
	void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions());

	return (
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
	);
};

export default AgentsPage;
