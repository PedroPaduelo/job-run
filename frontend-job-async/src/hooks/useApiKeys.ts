import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiKeysApi, type CreateApiKeyData, type UpdateApiKeyData } from "../lib/api";
import { REFETCH_INTERVALS } from "../lib/constants";

export function useApiKeys() {
  return useQuery({
    queryKey: ["apikeys"],
    queryFn: () => apiKeysApi.list(),
    refetchInterval: REFETCH_INTERVALS.QUEUES,
  });
}

export function useApiKey(id: string) {
  return useQuery({
    queryKey: ["apikey", id],
    queryFn: () => apiKeysApi.get(id),
    enabled: !!id,
  });
}

export function useCreateApiKey() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateApiKeyData) => apiKeysApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["apikeys"] });
    },
  });
}

export function useUpdateApiKey() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateApiKeyData }) =>
      apiKeysApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["apikeys"] });
    },
  });
}

export function useDeleteApiKey() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => apiKeysApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["apikeys"] });
    },
  });
}

export function useRevokeApiKey() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => apiKeysApi.revoke(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["apikeys"] });
    },
  });
}
