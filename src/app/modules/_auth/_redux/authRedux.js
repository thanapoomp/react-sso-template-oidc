export const actionTypes = {
  Login: "[Login] Action",
  Logout: "[Logout] Action",
};

const initialAuthState = {
  user: null,
  authToken: null,
  roles: [],
  permissions: [],
  userManager: {}
};

export const reducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case actionTypes.Login: {
      return {
        ...state,
        user: action.payload.user,
        authToken: action.payload.authToken,
        roles: [...action.payload.roles],
        permissions: [...action.payload.permissions],
        userManager: action.payload.userManager
      };
    }

    case actionTypes.Logout: {
      return {
        ...state,
        user: null,
        authToken: null,
        roles: [],
        permissions: [],
        userManager: {}
      };
    }

    default:
      return state;
  }
};

export const actions = {
  login: (payload) => ({ type: actionTypes.Login, payload }),
  logout: () => ({ type: actionTypes.Logout }),
};
