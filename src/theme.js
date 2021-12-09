import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "36px",
      lineHeight: "125%",
      color: "#091156",
      letterSpacing: "0.1em",
    },
    h2: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "16px",
      color: "#FF64AE",
      lineHeight: "125%",
    },
    h3: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      lineHeight: "125%",
      fontSize: "16px",
      letterSpacing: "0.1em",
      color: "#8B8B8B",
    },
    h4: {
      color: "#091156",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "125%",
    },
    h5: {
      color: "#8B8B8B",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "21px",
      letterSpacing: "0.1em",
    },
    h6: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "48px",
      lineHeight: "125%",
      color: "#FFFFFF",
      marginBottom: "15px"
    },
    subtitle1: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      color: "#D8DCFF",
      letterSpacing: "0.15em",
    }
  },
  button: {
    background: "#FF64AE",
    borderRadius: "50px",
    width: "158px",
    height: "52px",
  },
});
