/**
 * Entry application component used to compose providers and render Routes.
 * */

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ReactQueryDevtools } from "react-query/devtools";
import { Routes } from "./app/routes/Routes";
import VersionChecker from "./app/modules/_auth/components/VersionChecker";
import { AuthProvider } from "oidc-react";

const queryClient = new QueryClient();

export const oidcConfig = {
  onSignIn: async (user) => {
    debugger;
    console.log(user.access_token);
  },

  onSignOut: async (user) => {
    debugger;
    console.log(user);
  },

  onSignOutRedirect: async (user) => {
    console.log(user);
  },

  authority: "https://demoauthserver.devsiamsmile.com/",

  clientId: "1a50bc79-85c7-4ed3-863e-8a67abe3de11",

  responseType: "code",

  scope: "employeeapi",

  redirectUri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : "https://demoauthserver.devsiamsmile.com/",

  silent_redirect_uri: "http://localhost:3000/silent-refresh.html",

  post_logout_redirect_uri: "https://google.com", //"https://demoauthserver.devsiamsmile.com/Auth/Logout",

  automaticSilentRenew: true,

  // this will toggle if profile endpoint is used
  loadUserInfo: true,

  monitorAnonymousSession: true,

  // will revoke (reference) access tokens at logout time
  revokeAccessTokenOnSignout: true,

  // this will allow all the OIDC protocol claims to be visible in the window. normally a client app
  // wouldn't care about them or want them taking up space
  filterProtocolClaims: false,

  //// if we choose to use popup window instead for logins
  popup_redirect_uri: "http://localhost:3000/",
  //popupWindowFeatures: "menubar=yes,location=yes,toolbar=yes,width=1200,height=800,left=100,top=100;resizable=yes",

  checkSessionInterval: 60,

  monitorSession: false,

  state: true,

  nonce: true,

  clearHashAfterLogin: true,
};

export default function App({ store, persistor, basename }) {
  return (
    /* Provide Redux store */
    <Provider store={store}>
      {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
      <PersistGate persistor={persistor}>
        {/* Override `basename` (e.g: `homepage` in `package.json`) */}
        <QueryClientProvider client={queryClient}>
          <AuthProvider {...oidcConfig}>
            <BrowserRouter basename={basename}>
              {/* Render routes with provided `Layout`. */}
              <Routes />
            </BrowserRouter>
          </AuthProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          {/* <VersionChecker></VersionChecker> */}
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
