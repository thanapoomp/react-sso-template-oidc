import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import MenuItem from "./components/MenuItem";
import ParentsMenu from "./components/ParentsMenu";
import * as CONST from "../../Constant";
import { PERMISSIONS } from "../../Constant";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function ASideMenuList() {
  const classes = useStyles();

  return (
    <List
      dense
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListSubheader
        component="div"
        id="nested-list-subheader"
        style={{ height: 42 }}
      >
        {CONST.APP_INFO.name} - <small>{CONST.APP_INFO.version}</small>
      </ListSubheader>
      <Divider style={{ marginBottom: 15 }} />

      <MenuItem iconName="home" text="Home" path="/home"></MenuItem>

      <MenuItem iconName="quiz" text="Test" path="/test"></MenuItem>

      <MenuItem iconName="face_retouching_natural" text="Manage employee" path="/employeeManage" permissions={[PERMISSIONS.employee_read]}></MenuItem>
      
      <ParentsMenu iconName="admin_panel_settings" text="Admin">
        <MenuItem iconName="star" text="Title" path="/title"></MenuItem>
      </ParentsMenu>

      <ParentsMenu iconName="admin_panel_settings" text="Test Permission" permissions={[PERMISSIONS.employee_delete]}>
        <MenuItem iconName="star" text="Title" path="/permissionTest" permissions={[PERMISSIONS.employee_delete]}></MenuItem>
      </ParentsMenu>
      
    </List>
  );
}
