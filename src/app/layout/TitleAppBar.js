import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";
import Icon from '@material-ui/core/Icon'
import { useDispatch, useSelector } from "react-redux";
import * as layoutRedux from "./_redux/layoutRedux";
import * as CONST from "../../Constant";
import UserMenu from "./components/UserMenu";
import { useWindowSize } from "react-use";
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TitleAppBar() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { width } = useWindowSize();
  const layoutReducer = useSelector(({ layout }) => layout);

  return (
    <AppBar
      position="fixed"
      color="default"
      style={{ paddingLeft: width >= 1200 ? 240 : 0 }}
    >
      <Toolbar variant="dense">
        {width < 1200 && (
          <IconButton
            edge="start"
            className={classes.menuButton}
            onClick={() => {
              dispatch(layoutRedux.actions.updateDrawerOpen(true));
            }}
            color="inherit"
            aria-label="menu"
          >
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography variant="body1" className={classes.title}>
          {layoutReducer.currentTitle}
        </Typography>
        <React.Fragment>
          <UserMenu />
        </React.Fragment>
      </Toolbar>
    </AppBar>
  );
}
