import type { AppRouter } from "@/trpc/routers/_app";
import type { inferRouterOutputs } from "@trpc/server";

type AgentGetOne = inferRouterOutputs<AppRouter>["agents"]["getOne"];

export default AgentGetOne;
