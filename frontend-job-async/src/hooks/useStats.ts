import { useQuery } from "@tanstack/react-query";
import { statsApi } from "../lib/api";
import { REFETCH_INTERVALS } from "../lib/constants";

export function useOverviewStats() {
  return useQuery({
    queryKey: ["stats", "overview"],
    queryFn: statsApi.overview,
    refetchInterval: REFETCH_INTERVALS.STATS,
  });
}

export function useTimeline(hours = 24) {
  return useQuery({
    queryKey: ["stats", "timeline", hours],
    queryFn: () => statsApi.timeline(hours),
    refetchInterval: REFETCH_INTERVALS.TIMELINE,
  });
}
