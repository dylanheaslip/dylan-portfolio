"use client";
import Script from "next/script";

const GoogleAnalytics = ({ GA_TRACKING_ID }) => {
  return (
    <>
        <Script 
              id="ga-script" 
              strategy="afterInteractive"
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script
          id="ga-script-html" 
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
            `,
          }}
        />
    </>
  );
};

export default GoogleAnalytics;