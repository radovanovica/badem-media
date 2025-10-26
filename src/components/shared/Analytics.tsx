import Script from 'next/script';
import React, { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';

import { pageView } from '../../../lib/fbPixel';

type Props = {
    children: ReactNode;
};

const Analytics = ({ children }: Props) => {
    const router = useRouter();

    useEffect(() => {
        pageView();

        const handleChangeRoute = () => {
            pageView();
        };

        router.events.on('routeChangeComplete', handleChangeRoute);

        return () => {
            router.events.off('routeChangeComplete', handleChangeRoute);
        };
    }, []);

    return (
        <>
            <Script
                strategy='afterInteractive'
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_TRACKING_ID}`}
            />

            <Script
                id='google-analytics'
                strategy='afterInteractive'
                dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_TRACKING_ID}', {
          page_path: window.location.pathname,
          });`,
                }}
            />

            <Script
                id='fb-pixel'
                strategy='afterInteractive'
                dangerouslySetInnerHTML={{
                    __html: `!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');`,
                }}
            />
            {children}
        </>
    );
};

export default Analytics;
