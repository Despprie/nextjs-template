import type { AppProps } from 'next/app';
import { useRef } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import '~/styles/globals.css';
import '~/styles/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
    const queryClient = useRef(new QueryClient());

    return (
        <QueryClientProvider client={queryClient.current}>
            <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} />
                {process.env.NEXT_PUBLIC_ENVIRONMENT === 'development' ? <ReactQueryDevtools /> : null}
            </Hydrate>
        </QueryClientProvider>
    );
};

export default MyApp;
