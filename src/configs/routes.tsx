import React from "react";
import DemoComponent from "@components/DemoComponent";

export interface ItemRoute {
  name: string;
  private: boolean;
  component?: Function;
  path?: string;
  child?: ItemRoute[];
}

const ROUTES = {
  ADMIN: [
    {
      name: "trang chủ",
      private: false,
      component: () => <DemoComponent name="Admin" />,
      path: "/",
    },
    {
      name: "Sự kiện",
      private: false,
      child: [
        {
          name: "quản lý sự kiện",
          private: false,
          path: "/",
          component: () => <DemoComponent name="abc" />,
        },
        {
          name: "thiết lập nội dung",
          private: false,
          path: "/",
          component: () => <DemoComponent name="abc" />,
        },
      ],
    },
    {
      name: "quản lý tài khoản",
      private: false,
      child: [
        {
          name: "tài khoản người dùng",
          private: false,
          path: "/",
          component: () => <DemoComponent name="abc" />,
        },
        {
          name: "tài khoản quản trị",
          private: false,
          path: "/",
          component: () => <DemoComponent name="abc" />,
        },
        {
          name: "xét duyệt KYC",
          private: false,
          path: "/",
          component: () => <DemoComponent name="abc" />,
        },
      ],
    },
    {
      name: "quyền hạn",
      private: false,
      component: () => <DemoComponent name="abc" />,
      path: "/",
    },
    {
      name: "thiết lập hệ thống",
      private: false,
      child: [
        {
          name: "cài đặt",
          private: false,
          path: "/",
          component: () => <DemoComponent name="abc" />,
        },
        {
          name: "thông báo",
          private: false,
          path: "/",
          component: () => <DemoComponent name="abc" />,
        },
      ],
    },
    {
      name: "báo cáo",
      private: false,
      child: [
        {
          name: "bảng xếp hạng",
          private: false,
          path: "/",
          component: () => <DemoComponent name="abc" />,
        },
      ],
    },
  ],
  USER: [
    {
      name: "trang chủ",
      private: false,
      component: () => <DemoComponent name="abc" />,
      path: "/",
    },
    {
      name: "quản lý thông tin",
      private: false,
      child: [
        {
          name: "thông tin cá nhân",
          private: false,
          path: "/",
          component: () => <DemoComponent name="abc" />,
        },
        {
          name: "xác minh danh tính (KYC)",
          private: false,
          path: "/",
          component: () => <DemoComponent name="abc" />,
        },
      ],
    },
    {
      name: "quản lý sự kiện",
      private: false,
      child: [
        {
          name: "tạo sự kiện",
          private: false,
          path: "/",
          component: () => <DemoComponent name="abc" />,
        },
        {
          name: "thiết lập nội dung",
          private: false,
          path: "/",
          component: () => <DemoComponent name="abc" />,
        },
      ],
    },
    {
      name: "cài đặt",
      private: false,
      component: () => <DemoComponent name="abc" />,
    },
  ],
} as { ADMIN: ItemRoute[]; USER: ItemRoute[] };

export default ROUTES;
