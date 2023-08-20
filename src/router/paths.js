export const PATHS = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  USER: {
    ROOT: "/user",
    DETAIL: `/user/:id`,
  },
  ADMIN: {
    ROOT: "/admin",
    USERS: "/admin/users",
    DETAIL:`/admin/:id`
  },
  ERRORS: {
    NOT_FOUND: "404",
  },
};
