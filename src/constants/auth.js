export const AUTH_API_PATHS={
    LOGIN:'users/login',
    SIGNUP:'users/signup',
    PROFILE:'users/profile',
}

export const AUTH_ACTIONS={
    AUTHORIZE:'AUTHORIZE',
    LOGOUT: 'LOGOUT',
    SET_LOADING:'SET_LOADING',
    SET_ERROR:'SET_ERROR',
}

export const SIGNUP_INPUTS = [
    {
      label: "username",
      type: "text",
      id: "username",
    },
    {
      label: "email",
      type: "email",
      id: "email",
    },
    {
      label: "password",
      type: "password",
      id: "password",
    },
    {
      label: "repeate password",
      type: "password",
      id: "repassword",
    },
  ];

  export const LOGIN_INPUTS = [
    { id: "email", label: "Email", type: "email" },
    { id: "password", label: "Password", type: "password" },
  
  ];