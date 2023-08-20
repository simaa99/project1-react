import { Navigate } from "react-router-dom";
import React from "react";
import { PATHS } from "./paths";
import AdminGuard from "../components/Guards/AdminGuard";
import GuestGuard from "../components/Guards/GuestGuard";
import UserGuard from "../components/Guards/UserGuard";
const LoginPage = React.lazy(() => import("../pages/LoginPage"));
const SignUpPage = React.lazy(() => import("../pages/SignUpPage"));
const UserPage = React.lazy(() => import("../pages/UserPage/UserPage"));
const UserDetails = React.lazy(() => import("../pages/UserPage/UserDetails"));
const UserTable = React.lazy(() => import("../pages/AdminPage/UserTable"));

// available for admins only
const adminPages = [
  {
    path: PATHS.ADMIN.ROOT,
    element: <AdminGuard />,
    children: [
      {
        index: true,
        element: <UserPage/>,
      },
      {
        path: PATHS.ADMIN.DETAIL,
        element: <UserDetails />,
      },
      {
        path: PATHS.ADMIN.USERS,
        element: <UserTable />,
      },
    ],
  },
];

// available for only users with an account
const userPages = [
  {
    path: PATHS.USER.ROOT,
    element: <UserGuard />,
    children: [
      {
        index: true,
        element: <UserPage />,
      },
      {
        path: PATHS.USER.DETAIL,
        element: <UserDetails />,
      },
    ],
  },
];

const authPages = [
  {
    path: PATHS.LOGIN,
    element: (
      <GuestGuard>
        <LoginPage />
      </GuestGuard>
    ),
  },
  {
    path: PATHS.SIGNUP,
    element: (
      <GuestGuard>
        <SignUpPage />
      </GuestGuard>
    ),
  },
];

const guestPages = [
  {
    index: true,
    element: (
      <GuestGuard>
        <LoginPage />
      </GuestGuard>
    ),
  },

  ...authPages,
];

// available for all roles
const routes = [
  ...guestPages,
  ...userPages,
  ...adminPages,
  {
    path: PATHS.ERRORS.NOT_FOUND,
    element: <h1>Page not found 404</h1>,
  },
  {
    path: "*",
    element: <Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />,
  },
];

export { adminPages, userPages, routes };
