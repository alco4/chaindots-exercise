export const formatNumber = (number: string | number) => number.toLocaleString();
export const encodeURI = (stringUrl: string) => stringUrl.replace(/ /g, "%20");

const utils = {
  formatNumber,
  encodeURI
};

export default utils;
