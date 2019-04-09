import Mock from "mockjs";
import qs from "qs";

export default () => {
  // 用户登录
  Mock.mock(/\/login/, config => {
    const {user, pwd} = qs.parse(config.body);
    if (user === "admin" && pwd === "admin") {
      return {
        data: {
          user_id: Mock.mock("@guid"),
          auth_token: Mock.mock("@guid"),
          real_name: "Admin"
        },
        error: {
          code: 0,
          msg: "Login success"
        }
      };
    }
    return {
      error: {
        code: 4000,
        msg: "Your account username or password is incorrect"
      }
    };
  });

  // 菜单获取
  Mock.mock(/\/menu/, {
    data: [
      {
        path: "/",
        name: "首页",
        icon: "md-speedometer",
        compName: "首页",
        compPath: "/dashboard"
      },
      {
        path: "/config",
        name: "配置指南",
        icon: "md-chatbubbles",
        children: [
          {
            path: "/config/configuration",
            name: "配置指南",
            icon: "md-text",
            compName: "基础配置",
            compPath: "/config/configuration"
          }
        ]
      },
      {
        path: "/manage",
        name: "管理",
        icon: "md-folder-open",
        children: [
          {
            path: "/manage/users",
            name: "用户",
            icon: "md-people",
            compName: "用户",
            compPath: "/manage/users"
          }
        ]
      },
      {
        path: "/charts",
        name: "图表",
        icon: "md-folder-open",
        children: [
          {
            path: "/charts/linechart",
            name: "折线图",
            icon: "md-folder-open",
            compName: "折线图",
            compPath: "/charts/linechart"
          },
          {
            path: "/charts/barchart",
            name: "柱状图",
            icon: "md-folder-open",
            compName: "柱状图",
            compPath: "/charts/barchart"
          },
          {
            path: "/charts/piechart",
            name: "饼图",
            icon: "md-folder-open",
            compName: "饼图",
            compPath: "/charts/piechart"
          },
          {
            path: "/charts/scatterchart",
            name: "散点图",
            icon: "md-folder-open",
            compName: "散点图",
            compPath: "/charts/scatterchart"
          },
          {
            path: "/charts/radarchart",
            name: "雷达图图",
            icon: "md-folder-open",
            compName: "雷达图图",
            compPath: "/charts/radarchart"
          }
        ]
      },
      {
        path: "/test",
        name: "测试",
        icon: "md-document",
        compName: "测试",
        compPath: "/Test"
      }
    ],
    error: {
      code: 0,
      msg: "Get menu success"
    }
  });

  // 密码修改
  Mock.mock(/\/edit-password/, config => {
    const {currentPassword} = qs.parse(config.body);
    if (currentPassword === "admin") {
      return {
        error: {
          code: 0,
          msg: "修改密码成功"
        }
      };
    }
    return {
      error: {
        code: 4000,
        msg: "您当前的密码不正确"
      }
    };
  });
};
