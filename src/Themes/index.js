import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { themeOptions } from "./typography";

const baseOptions = {
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(122, 105, 254, 0.25) !important",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: "200px",
          backgroundColor: "#101017 !important",
          padding: "20px",
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          fontSize: "20px",
          color: "#FFFFFF !important",
          background: "#1C1C23 ",
          padding: "12px",
          width: "50px",
          height: "50px",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: "#000",
          "&.Mui-selected": {
            borderRadius: "10px",
            border: "1px solid rgba(0, 0, 0, 0.25)",
            background: "#7A69FE",
            color: "#FFF",
          },
          "&.Mui-selected:hover": {
            borderRadius: "10px",
            border: "1px solid rgba(0, 0, 0, 0.25)",
            background: "#7A69FE",
            color: "#FFF",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "transparent",
          color: "rgba(0, 0, 0, 0.60)",
          fontSize: "14px",
          fontWeight: "400",
        },
        head: {
          background: "#F4F7FF",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: { color: "#222" },
        colorSecondary: {
          "&.Mui-focused": {
            color: "#222",
          },
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          color: "#000000",
          fontSize: "22px",
          fontWeight: "600",
          lineHeight: "33px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          position: "relative",
          zIndex: "99",
          fontSize: "16px",
          fontWeight: "400",
          color: "#919194",
        },
        root: {
          borderRadius: "10px",
          color: "#fff",
        },
        notchedOutline: {
          background: "#F9F9FF",
          border: "1px solid var(--form-outline-color-and-lines-too, #D2CCFF)",
        },
        colorSecondary: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            color: "#222",
            borderColor:
              "1px solid var(--form-outline-color-and-lines-too, #D2CCFF)",
          },
          "&.Mui-focused": {
            color: "transparent",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        outlined: {
          padding: "20px",
          width: "100%",
        },
        elevation1: {
          background: "#FFF",
          borderRadius: "10px",
          padding: "10px",
          boxShadow: "none",
          border: "0.5px solid rgba(0, 0, 0, 0.25)",
        },
        elevation2: {
          background: "#FFF",
          borderRadius: "25px",
          padding: "15px",
          boxShadow: "none",
        },
        elevation3: {
          padding: "25px",
          background: "#fff",
          borderRadius: "20px",
          position: "relative",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.08)",
          "@media(max-width:768px)": {
            padding: "15px",
          },
        },
      },
    },

    MuiPopover: {
      styleOverrides: {
        root: {
          zIndex: 99999,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          alignItems: "self-start",
        },
        gutters: {
          paddingLeft: 0,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(255, 255, 255, 0.40)",
          borderRadius: "10px !important",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(255, 255, 255, 0.40)",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: "4px",
          fontSize: "12px",
        },
        colorSecondary: {
          "&.Mui-checked": { color: "#000" },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          paddingBottom: "0",
        },
      },
    },
    MuiListItemSecondaryAction: {
      styleOverrides: {
        root: {
          right: 0,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paperScrollPaper: {
          Width: 450,
          maxWidth: "100%",
        },
        paper: {
          overflowY: "unset",
          height: "auto",
          borderRadius: "20px",
        },
        paperWidthSm: {
          maxWidth: "550px !important",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: 16,
          color: "#000",
          padding: "0px 0 0px",
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        option: {
          color: "var(--style, rgba(22, 30, 41, 0.60))",
          fontSize: "14px !important",
          fontWeight: "400",
          lineHeight: "18px",
          letterSpacing: "0px",
          textAlign: "left",
          background: "transparent",
          // height: "40px",
        },
        input: {
          width: "0",
          // minWidth: "30px",
          color: "var(--style, rgba(22, 30, 41, 0.60))",
          fontSize: "14px !important",
          fontWeight: "400",
        },
      },
    },
    MuiButton: {
      root: {
        background: "red",
        textTransform: "capitalize",
      },
      styleOverrides: {
        containedSecondary: {
          color: "#161E29",
          padding: "10px 35px",
          textTransform: "capitalize",
          fontSize: "14px",
          fontWeight: "500",
          borderRadius: "50px !important",
          background: "#fff",
          border: "1px solid #161E29",
          whiteSpace: "pre",
          boxShadow: "none",
          "&:hover": {
            color: "#fff",
            background: "#161E29",
            border: "1px solid #161E29",
          },
        },
        containedPrimary: {
          color: "#fff",
          padding: "10px 35px",
          textTransform: "capitalize",
          fontSize: "14px",
          fontWeight: "500",
          borderRadius: "50px",
          border: "1px solid transparent",
          background: "#161E29",
          whiteSpace: "pre",
          "&:hover": {
            boxShadow: "none",
            color: "#161E29",
            background: "#fff",
            border: "1px solid #161E29",
          },
        },
        outlinedPrimary: {
          color: "#161E29",
          display: "flex",
          padding: "10px 35px",
          fontSize: "14px",
          borderRadius: "50px",
          border: "1px solid #161E29",
          background: "#fff",
          whiteSpace: "pre",
          "&:hover": {
            color: "#fff",
            background: "#161E29",
            border: "1px solid #161E29",
          },
        },
        outlinedSecondary: {
          color: "#161E29",
          display: "flex",
          padding: "10px 35px",
          fontSize: "14px",
          borderRadius: "50px",
          border: "1px solid #161E2926",
          background: "#fff",
          whiteSpace: "pre",
          textTransform: "capitalize",
          "&:hover": {
            color: "#fff",
            background: "#161E29",
            border: "1px solid #161E2926",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paperAnchorDockedLeft: {
          borderRight: "0",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {},
    },
    MuiMenu: {
      styleOverrides: {
        list: {
          background: "whitesmoke !important",
          color: "#000 !important",
          backdropFilter: "blur(40px)",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: { paddingLeft: "20px" },
      },
    },
    MuiModal: {
      styleOverrides: {
        backdrop: {
          background: "transparent !important",
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          // padding: "0px 65px !important",
          "@media (max-width: 780px)": {
            // padding: "0px 16px !important",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none !important",
          cursor: "pointer",
        },
      },
    },
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          "& .MuiPickersArrowSwitcher-button": {
            backgroundColor: "transparent !important",
            color: "#000 !important",
          },
          "& .MuiPickersCalendarHeader-switchViewButton": {
            backgroundColor: "transparent !important",
            color: "#000 !important",
            marginLeft: "-15px !important",
          },
          "& .css-1jsy6pn-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected)":
            {
              color: "#fff !important",
              backgroundColor: "#7A69FE !important",
              border: "none !important",
              borderRadius: "10px !important",
            },
          "& .Mui-selected": {
            backgroundColor: "#7A69FE !important",
            color: "#fff !important",
            border: "none !important",
            borderRadius: "10px !important",
          },
          "& .MuiPickersCalendarHeader-root": {
            paddingLeft: "30px",
          },
          "& .MuiDayCalendar-slideTransition": {
            minHeight: "210px !important",
          },
          "& .MuiPickersCalendarHeader-labelContainer": {
            fontSize: "15px",
          },
        },
      },
    },
  },
};

export const createCustomTheme = (config = {}) => {
  let theme = createTheme({ ...baseOptions, ...themeOptions });

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
