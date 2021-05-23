import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import SideMenu from "../components/SideMenu";
import style from "./App.module.css";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#207398",
      dark: "#03203C",
      light: "#5DA3FA",
    },
    secondary: {
      main: "#E6425E",
      dark: "#B9345A",
      light: "#E83A59",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  shape: {
    borderRadius: "12px",
  },
  overrides: {
    MuiAppBar: {
      root: { transform: "translateZ(0)" },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={style.appMain}>
        <Header />
        <PageHeader
          title="Page Header"
          subtitle="page description"
          icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
        />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
