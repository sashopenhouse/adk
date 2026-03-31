export type AnalyticsEventParams = {
  link_text?: string;
  link_url?: string;
  link_location?: string;
  service?: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params: AnalyticsEventParams = {}) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', eventName, params);
}
