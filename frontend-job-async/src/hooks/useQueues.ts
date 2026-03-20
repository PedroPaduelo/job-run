import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { queuesApi } from "../lib/api";
import { REFETCH_INTERVALS } from "../lib/constants";

export function useQueues() {
  return useQuery({
    queryKey: ["queues"],
    queryFn: queuesApi.list,
    refetchInterval: REFETCH_INTERVALS.QUEUES,
  });
}

export function useQueue(id: string) {
  return useQuery({
    queryKey: ["queue", id],
    queryFn: () => queuesApi.get(id),
    enabled: !!id,
  });
}

export function useQueueStats(id: string) {
  return useQuery({
    queryKey: ["queue-stats", id],
    queryFn: () => queuesApi.stats(id),
    enabled: !!id,
    refetchInterval: REFETCH_INTERVALS.QUEUE_STATS,
  });
}

export function useCreateQueue() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: queuesApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["queues"] });
    },
  });
}

export function useUpdateQueue() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Parameters<typeof queuesApi.update>[1] }) =>
      queuesApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["queues"] });
    },
  });
}

export function useDeleteQueue() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: queuesApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["queues"] });
    },
  });
}

export function usePauseQueue() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: queuesApi.pause,
    onSuccess: (_data, id) => {
      queryClient.invalidateQueries({ queryKey: ["queues"] });
      queryClient.invalidateQueries({ queryKey: ["queue", id] });
    },
  });
}

export function useResumeQueue() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: queuesApi.resume,
    onSuccess: (_data, id) => {
      queryClient.invalidateQueries({ queryKey: ["queues"] });
      queryClient.invalidateQueries({ queryKey: ["queue", id] });
    },
  });
}
