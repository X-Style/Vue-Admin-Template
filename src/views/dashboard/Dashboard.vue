<template>
<Content id="dashboard">
  <h1>{{ msg }}</h1>
  <h3>基于 Vue, Vue Router, Vuex, Axios, iView, Mock.js 后台管理系统模板</h3>
  <h3>Vue：
    <a href="https://www.iviewui.com/docs/guide/install" target="_blank">https://www.iviewui.com/docs/guide/install</a>
  </h3>
  <h3>Vue Router：
    <a href="https://router.vuejs.org/zh/" target="_blank">https://router.vuejs.org/zh/</a>
  </h3>
  <h3>Vuex：
    <a href="https://vuex.vuejs.org/zh/" target="_blank">https://vuex.vuejs.org/zh/</a>
  </h3>
  <h3>Axios：
    <a href="https://cn.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html" target="_blank">https://cn.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html</a>
  </h3>
  <h3>iView UI 组件库：
    <a href="https://www.iviewui.com/docs/guide/install" target="_blank">https://www.iviewui.com/docs/guide/install</a>
  </h3>
  <h3>Mock.js：
    <a href="http://mockjs.com/examples.html" target="_blank">http://mockjs.com/examples.html</a>
  </h3>
  <img class="logo" src="@/assets/avatar.jpg" alt="logo">
</Content>
</template>
<script>
export default {
  name: "Dashboard",
  data: () => ({
    msg: "后台管理系统模板"
  })
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
#dashboard {
  text-align: center;
  & h1 {
    margin-bottom: 10px;
    font-size: 20px;
  }
  & h3 {
    margin: 20px 0;
    font-weight: 400;
    & a {
      color: #51b883;
    }
  }
}
</style>
