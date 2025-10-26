import type { AppProps } from 'next/app';
import { Prompt } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { appWithTranslation, i18n } from 'next-i18next';

import '@/styles/globals.css';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

import UseLocoScroll from '@/store/useLocoScroll';
import CursorFollower from '@/components/shared/CursorFollower';

import Analytics from '@/components/shared/Analytics';

const prompt = Prompt({
    weight: ['100', '200', '300', '400', '600', '800'],
    subsets: ['latin'],
    style: ['normal'],
    variable: '--font-prompt',
});

function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    const { locomotiveScroll, setLocomotiveScroll } = UseLocoScroll();

    useEffect(() => {
        router.events.on('routeChangeComplete', () => {
            i18n?.language &&
                document.documentElement.setAttribute('lang', i18n?.language);
        });
    }, [router.events]);

    useEffect(() => {
        if (Object.keys(locomotiveScroll).length === 0) {
            import('locomotive-scroll').then(locomotiveModule => {
                const scroll = new locomotiveModule.default({
                    el: document.querySelector(
                        '[data-scroll-container]',
                    ) as HTMLElement,
                    smooth: window.innerWidth > 1024,
                    lerp: 0.08,
                    smartphone: {
                        smooth: false,
                    },
                });
                setLocomotiveScroll(scroll);
            });
        } else if (Object.keys(locomotiveScroll).length > 0) {
            router.events.on('routeChangeComplete', () => {
                locomotiveScroll.scrollTo(0, {
                    duration: 0,
                    disableLerp: true,
                });
                setTimeout(() => {
                    locomotiveScroll.update();
                }, 100);
            });
        }

        return () => {
            if (Object.keys(locomotiveScroll).length > 0)
                locomotiveScroll.destroy();
        };
    }, [router.events, setLocomotiveScroll, locomotiveScroll]);

    return (
        <ThemeProvider
            defaultTheme='dark'
            enableSystem={false}
            attribute='class'
        >
            <Analytics>
                <div
                    data-scroll-container
                    id='app-wrapper'
                    className={`${prompt.variable} font-prompt`}
                >
                    <CursorFollower>
                        <Component {...pageProps} />
                    </CursorFollower>
                </div>
            </Analytics>
        </ThemeProvider>
    );
}

export default appWithTranslation(App);
