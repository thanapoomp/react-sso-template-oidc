/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
//import { useAuth } from "oidc-react";
import { UserManager, WebStorageStateStore } from "oidc-client";
import * as CONST from "../../Constant";
import { useSelector } from "react-redux";
import * as authRedux from "../modules/_auth/_redux/authRedux";

const txtKeySession =
  "oidc.user:https://demoauthserver.devsiamsmile.com/:frontend";
const txtAPIPath = "http://192.168.200.49:3000/api/Employee?filterResign=true";

function LoggedIn(props) {
  const [token, setToken] = React.useState("");
  const authReducer = useSelector(({ auth }) => auth);

  var os = require("os");
  var ip = require("ip"); //npm install ip
  var hostname = os.hostname();
  var ipaddress = ip.address();
  let history = useHistory();

  // React.useEffect(() => {
  //   if (token === "") {

  //     const userStore = new WebStorageStateStore({
  //       store: localStorage,
  //     });

  //     const userManager = new UserManager({
  //       ...CONST.SSO_CONFIG,
  //       userStore: userStore,
  //     });

  //     userManager
  //       .getUser()
  //       .then((user) => {
  //         let tk = user.access_token;
  //         setToken(tk);
  //       })
  //       .catch((err) => {
  //         alert(err.message);
  //       });
  //   }
  // }, [token]);

  const handlePostAPIWTK = () => {
    try {
      let tk = authReducer.authToken;
      setToken(tk);
      axios
        .get(txtAPIPath, {
          // headers: {
          //   Authorization: `bearer ${token}`,
          // },
        })
        .then((res) => {
          alert(JSON.stringify(res.data.data));
        })
        .catch((err) => {
          alert(err.message);
        });
    } catch (error) {
      alert(error.response);
    }
  };

  const handlePostAPIWOTK = () => {
    try {
      axios
        .get(txtAPIPath, {
          headers: {
            Authorization: "",
          },
        })
        .then((res) => {
          alert("Cannot test because bearer is already bundle in axios");
          //alert(JSON.stringify(res.data.data));
        })
        .catch((err) => {
          alert(err.message);
        });
    } catch (error) {
      alert(error.response);
    }
  };
  return (
    <div>
      <h1>Call API! 🎉</h1>
      <textarea
        style={{ width: "100%", height: "100px" }}
        value={authReducer.authToken}
      ></textarea>

      <br />
      <button style={{ width: "250px" }} onClick={handlePostAPIWTK.bind(this)}>
        Call API With token
      </button>
      <button style={{ width: "250px" }} onClick={handlePostAPIWOTK.bind(this)}>
        Call API Without token
      </button>
    </div>
  );
}

export default LoggedIn;
