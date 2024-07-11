// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    butler: "'Butler', sans-serif",
    poppins: "'Poppins', serif",
    newsreader: "'Newsreader', serif",
  },
  breakpoints: {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    "2xl": "96em", // 1536px
    desktop: "64.25em", // Custom breakpoint for 1028px (1028px / 16 = 64.25em)
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "normal",
      },
      sizes: {
        xl: {
          fontSize: "6xl",
          fontFamily: "'Butler', sans-serif",
        },
        lg: {
          fontSize: "1.75rem",
          fontFamily: "'Butler', sans-serif",
        },
        md: {
          fontSize: "1.75rem",
          fontFamily: "'Butler', sans-serif",
        },
        sm: {
          fontSize: "1.25rem",
          fontFamily: "'Butler', sans-serif",
        },
      },
      defaultProps: {
        size: "md",
      },
    },
    Text: {
      sizes: {
        lg: {
          fontSize: "1rem",
          fontFamily: "'Poppins', serif",
          fontWeight: "700",
          letterSpacing: "2px",
        },
        md: {
          fontSize: "1.125rem",
          fontFamily: "'Newsreader', serif",
        },
        sm: {
          fontSize: "sm",
          lineHeight: "base",
        },
      },
      defaultProps: {
        size: "md",
      },
    },
  },
});

export default theme;
