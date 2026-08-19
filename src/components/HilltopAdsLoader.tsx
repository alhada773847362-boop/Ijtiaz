import React, { useEffect } from 'react';

export const HilltopAdsLoader: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Helper to safely append script tag if not already injected
    const injectHilltopScript = (src: string, id: string) => {
      if (document.getElementById(id)) return;
      try {
        const script = document.createElement('script');
        script.id = id;
        script.src = src;
        script.async = true;
        script.referrerPolicy = 'no-referrer-when-downgrade';
        document.body.appendChild(script);
      } catch (err) {
        console.warn('HilltopAds script injection warning:', err);
      }
    };

    // 1. فيديو التمرير (In-Page Scroll Video) - Highly profitable video format
    injectHilltopScript(
      '//massivesalad.com/bWXfVRskd.Gpl/0eYaWvco/veQmw9-uWZFUAlVksP_TOcyznMzzEMM5/NHDVkYtbNUzJM/z_Mszpk/1/MPwp',
      'hilltop-scroll-video'
    );

    // 2. إشعارات الدفع (In-Page Push Notifications) - High subscription yield
    injectHilltopScript(
      '//massivesalad.com/b.XcVVs/d/GFlR0QYdWpcv/pezmh9_u/ZlUilZkBPqTYcvziMzzqMV5MM/zFMDtcNQz/MrzuMjzBkLzqN/wx',
      'hilltop-push-notifications'
    );

    // 3. بوب اندر الخلفي الآمن والتلقائي (Smart Background Popunder with Anti-Adblock)
    // Runs cleanly in the background of the page, registering click events to serve ads securely,
    // without ever opening raw script code in active windows.
    injectHilltopScript(
      '//massivesalad.com/b/XJVps.dWGfl/0GYwWfcX/NeCmY9iurZjUrl/kLPLTKcezoMMDxI_ybOEDSU/tDNWzVMVwLMRjBIb4wOlQe',
      'hilltop-background-popunder'
    );

    // 4. البانر الذكي متعدد الأشكال (Dynamic Multiformat Ad Script)
    injectHilltopScript(
      '//massivesalad.com/bdXpV/sad.GslG0QYsWScj/reQmm9ouRZ_U/lUkePDT/c/z/MUD/I/y/OATrc/t/NKznM-wAM/jeMEwzMkQP',
      'hilltop-multiformat-banner'
    );

    // 5. بوب اندر هيلتوب المطور والمضاد لحظر الإعلانات (First-Party Anti-AdBlock Popunder)
    // Dynamic background popunder fetched directly from the secure server endpoint
    injectHilltopScript(
      '/antiadblock.js',
      'hilltop-antiadblock-popunder'
    );
  }, []);

  return null;
};
