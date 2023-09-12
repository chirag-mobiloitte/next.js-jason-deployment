export const themeOptions = {
  typography: {
    h1: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 600,
      fontSize: 50,
      "@media (max-width:1024px)": {
        fontSize: "40px !important",
      },
      "@media(max-width:767px)": {
        fontSize: "30px !important",
      },
    },
    h2: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 500,
      fontSize: 42,
      wordBreak: "break-word",
      "@media(max-width:767px)": {
        fontSize: "30px !important",
      },
    },
    h3: {
      fontFamily: "'Pacifico', cursive",
      fontWeight: 500,
      fontSize: 37,
      color: "#161E29",

      "@media(max-width:767px)": {
        fontSize: "20px !important",
      },
    },
    h4: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 500,
      fontSize: 32,
      lineHeight: "45px",
      "@media(max-width:767px)": {
        fontSize: "18px !important",
      },
    },
    h5: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 400,
      fontSize: 22,
      "@media(max-width:767px)": {
        fontSize: "16px !important",
      },
    },
    h6: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 500,
      fontSize: 18,
      "@media(max-width:767px)": {
        fontSize: "14px !important",
      },
    },
    body2: {
      fontFamily: "'Outfit', normal",
      color: "rgba(0, 0, 0, 0.60)",
      fontSize: 16,
      fontWeight: 300,
      "@media(max-width:767px)": {
        fontSize: 14,
      },
    },
    body1: {
      fontFamily: "'Outfit', normal",
      fontSize: 14,
      fontWeight: 400,
      "@media(max-width:767px)": {
        fontSize: 12,
      },
    },
    subTitle1: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 400,
      fontSize: 12,
    },
  },
};
