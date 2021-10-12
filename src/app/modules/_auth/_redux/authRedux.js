export const actionTypes = {
  Login: "[Login] Action",
  Logout: "[Logout] Action",
};

const initialAuthState = {
  user: null,
  authToken: null,
  roles: [],
  permission: [],
};

export const reducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case actionTypes.Login: {
      return {
        ...state,
        user: action.payload.user,
        authToken: action.payload.authToken,
        roles: [...action.payload.roles],
        permission: [...action.payload.permission],
      };
    }

    case actionTypes.Logout: {
      return {
        ...state,
        user: null,
        authToken: null,
        roles: [],
        permission: [],
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
