import React from "react";
import { routerLinks } from "utils";

export const pages = [
  {
    layout: React.lazy(() => import("../layouts/auth")),
    isPublic: true,
    child: [
      {
        path: routerLinks("Login"),
        component: React.lazy(() => import("./auth/login")),
        title: "Login",
      },
      {
        path: routerLinks("ForgotPass"),
        component: React.lazy(() => import("./auth/forget-password")),
        title: "Forgot Password",
      },
      {
        path: routerLinks("ResetPass"),
        component: React.lazy(() => import("./auth/reset-password")),
        title: "Reset Password",
      },
      {
        path: routerLinks("SendOTP"),
        component: React.lazy(() => import("./auth/send-otp")),
        title: "Send OTP",
      },
      {
        path: routerLinks("Register"),
        component: React.lazy(() => import("./auth/register")),
        title: "Register",
      },
    ],
  },
  {
    layout: React.lazy(() => import("../layouts/admin")),
    isPublic: false,
    child: [
      {
        path: '/',
        component: routerLinks("Dashboard"),
        title: "Home",
      },
      {
        path: routerLinks("Dashboard"),
        component: React.lazy(() => import("./admin/dashboard")),
        title: "Dashboard",
      },
      {
        path: routerLinks("Building list"),
        component: React.lazy(() => import("./admin/building")),
        title: "Building list",
      },
      // {
      //   path: routerLinks("Building detail"),
      //   component: React.lazy(() => import("./admin/building/buiding_detail")),
      //   title: "Building detail",
      // },
      {
        path: routerLinks("Building"),
        component: React.lazy(() => import("./admin/building/detail")),
        title: "Building detail",
      },
      {
        path: routerLinks("Room"),
        component: React.lazy(() => import("./admin/building/detail/room/detail")),
        title: "Motel room",
      },
      {
        path: routerLinks("Room list"),
        component: React.lazy(() => import("./admin/building/detail/room")),
        title: "Room list",
      },
      {
        path: routerLinks("Role setting"),
        component: React.lazy(() => import("./admin/role")),
        title: "Role setting",
      },
      {
        path: routerLinks("User managerment"),
        component: React.lazy(() => import("./admin/user")),
        title: "User managerment",
      },
      {
        path: routerLinks("User profile"),
        component: React.lazy(() => import("./admin/user_profile")),
        title: "User profile",
      },
      {
        path: routerLinks("Employee list"),
        component: React.lazy(() => import("./admin/employee")),
        title: "Employee list",
      },
      {
        path: routerLinks("Job list"),
        component: React.lazy(() => import("./admin/job")),
        title: "Job list",
      },
      {
        path: routerLinks("Preview Contract"),
        component: React.lazy(() => import("./admin/preview-contract")),
        title: "Preview Contract",
      },
    ], // 💬 generate link to here
  },
];

export const arrayPaths = [];
pages.map((layout) => {
  const paths = [];
  layout.child.map((page) => {
    paths.push(page.path);
    return page;
  });
  arrayPaths.push(paths);
  return layout;
});
