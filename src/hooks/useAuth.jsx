import { useReducer } from "react";
import { ROLES } from "../constants";
import { AUTH_ACTIONS, AUTH_API_PATHS } from "../constants/auth";
import { AUTH_API } from "../config/api";
import axios from "axios";

const getIsAuth = () => localStorage.getItem("isAuth") || false;
const getUserData = () => JSON.parse(localStorage.getItem("user")) || null;
const getToken = () => localStorage.getItem("token") || null;
const getRole = () => localStorage.getItem("role") || ROLES.GUEST;
// console.log("isAuth:", localStorage.getItem("isAuth"));
// console.log("user:", localStorage.getItem("user"));
// console.log("token:", localStorage.getItem("token"));
// console.log("role:", localStorage.getItem("role"));

const initialState = {
  isAuth: getIsAuth(),
  user: getUserData(),
  token: getToken(),
  role: getRole(),
  error: null,
  isLoading: false,
};

const reduce = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case AUTH_ACTIONS.AUTHORIZE:
      const token = action?.payload?.token || state?.token;
      const role = action?.payload?.isAdmin ? ROLES.ADMIN : ROLES.USER;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("user", JSON.stringify(action.payload));

      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
        token: token,
        role: role,
        error: null,
        isLoading: false,
      };
    case AUTH_ACTIONS.LOGOUT:
      ["token", "role", "user", "isAuth"].forEach((item) =>
        localStorage.removeItem(item)
      );
      return {
        isAuth: false,
        user: null,
        token: null,
        role: ROLES.GUEST,
        error: null,
        isLoading: false,
      };
    case AUTH_ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

const useAuth = () => {
  const [state, dispatch] = useReducer(reduce, initialState);
  const token = state.token || localStorage.getItem("token");

  const config = {
    header: {
      Authorization: `Bearer ${token}`,
    },
  };

  const login = async (body) => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING });
    try {
      const { data } = await axios.post(AUTH_API + AUTH_API_PATHS.LOGIN, body);
      dispatch({ type: AUTH_ACTIONS.AUTHORIZE, payload: data?.data || data });
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
    }
  };
  const signup = async (body) => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING });
    try {
      const { data } = await axios.post(AUTH_API + AUTH_API_PATHS.SIGNUP, body);
      dispatch({ type: AUTH_ACTIONS.AUTHORIZE, payload: data?.data || data });
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
    }
  };
  const logout = () => {
    dispatch({ type: AUTH_ACTIONS.LOGOUT });
  };
  const getProfileData = async () => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING });

    try {
      const { data } = await axios.get(
        AUTH_API + AUTH_API_PATHS.PROFILE,
        config
      );
      dispatch({ type: AUTH_ACTIONS.AUTHORIZE, payload: data?.data || data });
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
    }
  };
  return {
    ...state,
    login,
    signup,
    logout,
    getProfileData,
  };
};

export default useAuth;
