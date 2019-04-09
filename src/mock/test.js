import Mock from "mockjs";

export default () => {
  // 测试数据
  Mock.mock(/\/test/, () => ({
    data: "测试1 页面",
    error: {
      code: 0,
      msg: "Get test success"
    }
  }));
};
