import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient, trpc } from "@/trpc/server";
import AgentIdView from "@/modules/agents/ui/view/agent-id-view";
import LoadingState from "@/components/common/loading-state";
import ErrorState from "@/components/common/error-state";

interface Props {
	params: Promise<{ agentId: string }>;
}

const Page = async ({ params }: Props) => {
	const { agentId } = await params;
	const queryClient = getQueryClient();
	void queryClient.prefetchQuery(
		trpc.agents.getOne.queryOptions({ id: agentId }),
	);

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Suspense
				fallback={
					<LoadingState
						title="Loading Agent"
						description="Please wait while we fetch the agent data."
					/>
				}>
				<ErrorBoundary
					fallback={
						<ErrorState
							title="Error Loading Agent"
							description="Please try again later."
						/>
					}>
					<AgentIdView agentId={agentId} />
				</ErrorBoundary>
			</Suspense>
		</HydrationBoundary>
	);
};

export default Page;
