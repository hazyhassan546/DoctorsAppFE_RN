const COLORS = {
  WHITE: '#ffffff',
  BLACK: '#000000',
  PRIMARY: '#0FD3C4',
  SECONDARY: '#E7FAF9',
  GREEN_FONT: '#FF6A6A',
  PRIMARY_GREY: '#B9B9B9',
  PRIMARY_TEXT: '#848484',
  RED: '#FF0000',
};

const lighten = value => {
  const MAX_HEX_VALUE = 255;
  const hexValue = Math.floor(MAX_HEX_VALUE * Math.min(value, 1)).toString(16);
  return hexValue.length < 2 ? `0${hexValue}` : hexValue;
};

const alpha = (color, value) =>
  color.startsWith('#') ? `${color}${lighten(value)}` : color;

export {alpha, lighten};

export default COLORS;
