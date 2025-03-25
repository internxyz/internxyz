"use client";

import { useEffect } from 'react'

// tanstack query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// analytics
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import PostHogPageView from '@/components/posthog-pageview'

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      person_profiles: "identified_only",
      capture_pageview: false // Disable automatic pageview capture, as we capture manually
    })
}, [])

  return (
    <PHProvider client={posthog}>
      <QueryClientProvider client={queryClient}>
        <PostHogPageView />
        {children}
      </QueryClientProvider>
    </PHProvider>
  );
}


