"use client";

// import ErrorState from "@/components/common/error-state";
// import LoadingState from "@/components/common/loading-state";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { DataTable } from "../../components/data-table";
import { columns } from "../../components/columns";
import EmptyState from "@/components/common/empty-state";
import { useAgentsFilters } from "../../hooks/use-agentsfilters";
import { DataPagination } from "../../components/data-pagination";

export const AgentsView = () => {
	const [filters, setFilters] = useAgentsFilters();
	const trpc = useTRPC();
	// const { data, isLoading, isError } = useQuery(
	// 	trpc.agents.getMany.queryOptions(),
	// );
	const { data } = useSuspenseQuery(
		trpc.agents.getMany.queryOptions({
			...filters,
		}),
	);

	// if (isLoading) {
	// 	return (
	// 		<LoadingState
	// 			title="Loading Agents"
	// 			description="This may take a few seconds"
	// 		/>
	// 	);
	// }

	// if (isError) {
	// 	return (
	// 		<ErrorState
	// 			title="Error Loading Agents"
	// 			description="Please try again later."
	// 		/>
	// 	);
	// }
	return (
		<div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
			<DataTable
				data={data.items}
				columns={columns}
			/>

			<DataPagination
				page={filters.page}
				totalPages={data.totalPages}
				onPageChange={(page) => setFilters({ page })}
			/>

			{data.items.length === 0 && (
				<EmptyState
					title="No Agents Found"
					description="Try creating a new agent."
				/>
			)}
		</div>
	);
};
