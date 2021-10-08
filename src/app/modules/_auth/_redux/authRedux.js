export const actionTypes = {
  Login: "[Login] Action",
  Logout: "[Logout] Action",
  RenewToken: "[Renew Token] Action",
};

const initialAuthState = {
  user: null,
  authToken: null,
  roles: [],
};

export const reducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case actionTypes.Login: {
      return {
        ...state,
        user: action.payload.user,
        authToken: action.payload.authToken,
        roles: [...action.payload.roles],
      };
    }

    case actionTypes.Logout: {
      return {
        ...state,
        user: null,
        authToken: null,
        roles: [],
      };
    }

    case actionTypes.RenewToken: {
      return {
        ...state,
        user: action.payload.user,
        authToken: action.payload.authToken,
        roles: [...action.payload.roles],
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
