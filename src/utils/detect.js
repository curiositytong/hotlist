export const isMobileDevice = () =>
  typeof window.orientation !== 'undefined' ||
  navigator.userAgent.indexOf('IEMobile') !== -1;
