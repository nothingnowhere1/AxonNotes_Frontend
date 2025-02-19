'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AuthMainPage } from '@/modules/auth';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 1000
		}
	}
});

export default function Home() {
	return (
    <div>
        <QueryClientProvider client={queryClient}>
            <AuthMainPage />
        </QueryClientProvider>
    </div>
	);
}
