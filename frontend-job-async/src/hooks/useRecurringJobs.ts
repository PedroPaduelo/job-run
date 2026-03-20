import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { recurringJobsApi, type CreateRecurringJobData, type UpdateRecurringJobData } from '../lib/api';

export function useRecurringJobs(filters?: { isActive?: string; queue?: string }) {
  return useQuery({
    queryKey: ['recurring-jobs', filters],
    queryFn: () => recurringJobsApi.list(filters || {}),
  });
}

export function useRecurringJob(id: string) {
  return useQuery({
    queryKey: ['recurring-job', id],
    queryFn: () => recurringJobsApi.get(id),
    enabled: !!id,
  });
}

export function useCreateRecurringJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateRecurringJobData) => recurringJobsApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recurring-jobs'] });
      queryClient.invalidateQueries({ queryKey: ['stats'] });
    },
  });
}

export function useUpdateRecurringJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateRecurringJobData }) =>
      recurringJobsApi.update(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['recurring-jobs'] });
      queryClient.invalidateQueries({ queryKey: ['recurring-job', variables.id] });
    },
  });
}

export function usePauseRecurringJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => recurringJobsApi.pause(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recurring-jobs'] });
    },
  });
}

export function useResumeRecurringJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => recurringJobsApi.resume(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recurring-jobs'] });
    },
  });
}

export function useDeleteRecurringJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => recurringJobsApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recurring-jobs'] });
      queryClient.invalidateQueries({ queryKey: ['stats'] });
    },
  });
}

export function useTriggerRecurringJob() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => recurringJobsApi.trigger(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['recurring-jobs'] });
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
    },
  });
}
