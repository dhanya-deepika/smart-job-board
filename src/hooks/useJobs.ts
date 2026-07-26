import { useState, useEffect } from 'react';
import type { Job } from '../types/job';
import { jobs as initialJobs } from '../data/jobs';

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate network delay
    const timer = setTimeout(() => {
      setJobs(initialJobs);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return { jobs, loading };
}

export function useJob(id: number | null) {
  const [job, setJob] = useState<Job | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [prevId, setPrevId] = useState(id);

  if (id !== prevId) {
    setPrevId(id);
    setLoading(true);
    setJob(undefined);
  }

  useEffect(() => {
    if (id === null) return;
    
    // Simulate network delay
    const timer = setTimeout(() => {
      const foundJob = initialJobs.find(j => j.id === id);
      setJob(foundJob);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  return { job, loading };
}
