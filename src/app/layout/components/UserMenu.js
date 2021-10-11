import React from "react";
import { UserManager, WebStorageStateStore } from "oidc-client";
import {
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Divider,
} from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import Link from "@material-ui/core/Link";
import UserProfile from "./UserProfile";
import Icon from "@material-ui/core/Icon";
import { useSelector } from "react-redux";
import * as CONST from "../../../Constant";
import * as swal from "../../modules/_common/components/SweetAlert";

function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const authReducer = useSelector(({ auth }) => auth);
  const userStore = new WebStorageStateStore({
    store: localStorage,
  });

  const userManager = new UserManager({
    ...CONST.SSO_CONFIG,
    userStore: userStore,
  });

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutClick = () => {
    swal
      .swalConfirm("ยืนยัน?", "คุณต้องการออกจากระบบใช่หรือไม่?")
      .then((res) => {
        if (res.isConfirmed) {
          userManager.signoutRedirect();
        }
      });
  };

  return (
    <div>
      <React.Fragment>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <Typography variant="caption">{authReducer.user}</Typography>
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          onClose={handleClose}
        >
          {/* start  User Profile*/}
          <MenuItem>
            <UserProfile></UserProfile>
          </MenuItem>
          {/* end User Profile */}

          <Divider light />

          {/* start Sign out*/}
          <MenuItem onClick={logoutClick}>
            <Chip
              size="small"
              style={{ marginTop: 10 }}
              icon={
                <Icon style={{ fontSize: 20, marginLeft: 11 }}>logout</Icon>
              }
              color="default"
            />
            <Link
              style={{ color: "#000000", marginLeft: 20, marginTop: 10 }}
              component="button"
              variant="inherit"
              onClick={() => {
                logoutClick();
              }}
            >
              ออกจากระบบ
            </Link>
          </MenuItem>
          {/* end Sign out */}
        </Menu>
      </React.Fragment>
    </div>
  );
}

export default UserMenu;
