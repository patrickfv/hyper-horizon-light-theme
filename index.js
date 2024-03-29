const background = "#FDF0ED";
const foreground = "#06060C";
const ansiBlue = "#26BBD9";
const ansiBrightBlue = "#3FC4DE";
const ansiBrightCyan = "#6BE4E6";
const ansiBrightGreen = "#3FDAA4";
const ansiBrightMagenta = "#F075B5";
const ansiBrightRed = "#EC6A88";
const ansiBrightYellow = "#FBC3A7";
const ansiCyan = "#59E1E3";
const ansiGreen = "#29D398";
const ansiMagenta = "#EE64AC";
const ansiRed = "#E95678";
const ansiYellow = "#FAB795";
const selectionBackground = "#F9CEC380";
//const backgroundCursor = "#06060C";
const foregroundCursor = "#F9CEC3B3";

const colors = {
  red: ansiRed,
  green: ansiGreen,
  yellow: ansiYellow,
  blue: ansiBlue,
  magenta: ansiMagenta,
  cyan: ansiCyan,
  lightRed: ansiBrightRed,
  lightGreen: ansiBrightGreen,
  lightYellow: ansiBrightYellow,
  lightBlue: ansiBrightBlue,
  lightMagenta: ansiBrightMagenta,
  lightCyan: ansiBrightCyan,
};

module.exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor: background,
    foregroundColor: foreground,
    cursorColor: foregroundCursor,
    borderColor: background,
    selectionColor: selectionBackground,
    colors,
    css: `
      .tab_text { color: ${foreground} }
      .tabs_nav {
        background-color: ${background};
        border-bottom: 1px solid ${ansiRed};
      }
      .header_header {
        color: ${foreground};
        font-weight: bold;
      }
    `,
  });
};
