import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Fab from "@material-ui/core/Fab";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import * as layoutRedux from "./_redux/layoutRedux";
import ASideMenuList from "./ASideMenuList";
import TitleAppBar from "./TitleAppBar";

const drawerWidth = 245;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  scrollTopRoot: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  list: {
    width: 240,
  },
  fullList: {
    width: "auto",
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={classes.scrollTopRoot}
      >
        {children}
      </div>
    </Zoom>
  );
}

function Layout(props) {
  const { window } = props;
  const classes = useStyles();
  const layoutReducer = useSelector(({ layout }) => layout);
  const dispatch = useDispatch();

  const theme = createTheme({
    typography: {
      fontFamily: ["Sarabun", "sans-serif"].join(","),
    },
  });

  const handleDrawerToggle = () => {
    dispatch(layoutRedux.actions.updateDrawerOpen(!layoutReducer.drawerOpen));
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
    >
      <ASideMenuList></ASideMenuList>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <TitleAppBar></TitleAppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={layoutReducer.drawerOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {list("left")}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {list("left")}
            </Drawer>
          </Hidden>
        </nav>

        <main className={classes.content}>
          <Toolbar variant="dense" id="back-to-top-anchor" />
          {props.children}
          <ScrollTop {...props}>
            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </main>
      </div>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout;
