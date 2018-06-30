import { isBrowser } from '../constants';

export const GA_TRACKING_ID = 'UA-100086807-2';

export const pageview = (url) => {
  if (isBrowser && typeof window.ga === 'function') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url, /* eslint-disable-line camelcase */
    });
  }
};
