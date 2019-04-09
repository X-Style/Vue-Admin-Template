import app from "./app";
import users from "./users";
import test from "./test";
import charts from "./charts";

export default () => {
  // 登录，菜单，改密
  app();
  // 用户管理
  users();
  // 测试
  test();
  // 图表
  charts();
};
