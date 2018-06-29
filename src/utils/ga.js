export const GA_TRACKING_ID = 'UA-100086807-2';

export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url, /* eslint-disable-line camelcase */
  });
};
