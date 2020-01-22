import Typography from 'typography';
import theme from 'typography-theme-fairy-gates';
theme.headerColor = '#fefefe';
theme.bodyColor = '#fafafa';
const linkColor = theme.bodyColor;
theme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    color: linkColor,
    textDecoration: 'none',
    backgroundImage: 'none',
    textShadow: 'none',
  },
  'a:hover,a:active': {
    textDecoration: 'underline',
    textShadow: 'none',
    backgroundImage: 'none',
  },
});

const typography = new Typography(theme);
export const { scale, rhythm, options } = typography;
export default typography;
