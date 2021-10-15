/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Link from "@material-ui/core/Link";
import * as layoutRedux from "../_redux/layoutRedux";

function MenuItem(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const authReducer = useSelector(({ auth }) => auth);
  const [showMenu, setShowMenu] = React.useState(false);
  const preventDefault = (event) => event.preventDefault();
  const location = useLocation();

  React.useEffect(() => {
    //set Show menu
    if (props.permissions.length === 0) {
      //allow all permissions
      setShowMenu(true);
    } else {
      // check if route is restricted by role
      let intersection = props.permissions.filter((x) =>
        authReducer.permissions.includes(x)
      );
      if (intersection.length > 0) {
        setShowMenu(true);
      }
    }
  }, [authReducer]);

  return (
    <React.Fragment>
      {showMenu && (
        <ListItem
          button
          selected={props.path === location.pathname}
          onClick={() => {
            history.push(props.path);
            dispatch(layoutRedux.actions.updateDrawerOpen(false));
          }}
        >
          <ListItemIcon>
            <Icon>{props.iconName}</Icon>
          </ListItemIcon>
          <Link
            underline="none"
            to={`${props.path}`}
            href={`${window.location.origin}${props.path}`}
            onClick={preventDefault}
            color="inherit"
          >
            {props.text}
          </Link>
        </ListItem>
      )}
    </React.Fragment>
  );
}

MenuItem.propTypes = {
  iconName: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
  permissions: PropTypes.array,
};

MenuItem.defaultProps = {
  iconName: "",
  text: "",
  path: "",
  permissions: [],
};

export default MenuItem;
