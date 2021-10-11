import React from "react";
import { UserManager, WebStorageStateStore } from "oidc-client";
import { useHistory } from "react-router";
import { CircularProgress } from "@material-ui/core";
import { useDispatch } from "react-redux";
import * as authRedux from "../_redux/authRedux";
import * as authCRUD from "../_redux/authCrud";
import * as CONST from "../../../../Constant";

function SSOHandler(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const userStore = new WebStorageStateStore({
    store: localStorage,
  });

  const userManager = new UserManager({
    ...CONST.SSO_CONFIG,
    userStore: userStore,
  });

  const getUser = () => {
    userManager
      .getUser()
      .then((user) => {
        if (user) {
          // console.log(user);
          //keep user detail in redux
          let payload = {
            user: authCRUD.getUserByToken(user.id_token),
            authToken: user.access_token,
            roles: [], //TODO: get roles
          };
          setLoggedIn(true);
          dispatch(authRedux.actions.login(payload));
        } else {
          //Remove redux auth values
          dispatch(authRedux.actions.logout());
          userManager.signinRedirect();
        }
      })
      .catch((err) => alert(err));
  };

  React.useEffect(() => {
    getUser();

    userManager.events.addUserSignedOut(() => {
      //TODO: Remove redux auth values
      userManager.removeUser().then(() => {
        userManager.clearStaleState().then(() => {
          history.push("/");
        });
      });
    });

    userManager.events.addAccessTokenExpiring(() => {
      console.log("token expiring...");
    });

    userManager.events.addSilentRenewError(() => {
      console.log("renew error");
    });

    userManager.events.addUserSignedIn((res) => {
      console.log("logged in");
      getUser();
    });

    userManager.events.addAccessTokenExpired(() => {
      console.log("expired");
      //Remove redux auth values
      dispatch(authRedux.actions.logout());
      userManager.signinRedirect();
    });

    userManager.events.addUserLoaded(() => {
      console.log("user loaded");
      getUser();
    });

    userManager.events.addUserSessionChanged(() => {
      console.log("session changed");
    });

    userManager.events.addUserUnloaded(() => {
      console.log("user unloaded");
      //Remove redux auth values
      dispatch(authRedux.actions.logout());
      userManager.signinRedirect();
    });
  }, []);

  return (
    <React.Fragment>
      {!loggedIn && <CircularProgress></CircularProgress>}
      {loggedIn && props.children}
    </React.Fragment>
  );
}

export default SSOHandler;
