import { useState, useEffect } from 'react';
import type { Job } from '../types/job';

export function useSavedJobs() {
  const [savedJobs, setSavedJobs] = useState<Job[]>(() => {
    try {
      const item = window.localStorage.getItem('savedJobs');
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.warn('Error reading localStorage', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
    } catch (error) {
      console.warn('Error setting localStorage', error);
    }
  }, [savedJobs]);

  const toggleSavedJob = (job: Job) => {
    setSavedJobs((prev) => {
      const isSaved = prev.some((j) => j.id === job.id);
      if (isSaved) {
        return prev.filter((j) => j.id !== job.id);
      } else {
        return [...prev, job];
      }
    });
  };

  const isJobSaved = (jobId: number) => {
    return savedJobs.some((j) => j.id === jobId);
  };

  return { savedJobs, toggleSavedJob, isJobSaved };
}
