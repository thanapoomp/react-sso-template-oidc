export const APP_INFO = {
  name: "client1",
  version: "0.1",
  since: "2021",
  description: "Client1 Website",
  contactUrl: "https://client1.thanapoom.cc",
};

export const VERSION_CHECKER = {
  ENABLE_VERSION_CHECKER: false,
  CHECKVERSION_EVERY_MINUTE: 10,
  VERSIONCHECK_URL:
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      ? "https://localhost:44388/api/SystemConfig" //dev
      : "https://localhost:44388/api/SystemConfig", // Production
};

export const SSO_CONFIG = {
  authority:
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      ? "https://demoauthserver.devsiamsmile.com/" //dev
      : "https://demoauthserver.devsiamsmile.com/", // Production
  client_id:
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      ? "1a50bc79-85c7-4ed3-863e-8a67abe3de11" //dev
      : "e6a381f7-b94d-4195-97a3-4dcd47b62f11", // Production
  redirect_uri:
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      ? `http://localhost:3000/signin-callback` //dev
      : `https://demoauthadminapi.devsiamsmile.com/signin-callback`, // Production
  silent_redirect_uri:
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      ? `http://localhost:3000/silent-callback`
      : `https://demoauthadminapi.devsiamsmile.com/silent-callback`,
  response_type: "code",
  scope: "openid profile roles employeeapi email",
  automaticSilentRenew: true,
  monitorSession:
    // if deploy on same domain set = true,
    // if deploy on different domain must set = false
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      ? true
      : true,
};

export const API_URL =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? "https://localhost:44388/api" //dev
    : "https://localhost:44388/api"; // Production

export const ROLES = {
  user: "User",
  Manager: "Supervisor",
  admin: "Admin",
  developer: "Developer",
};
