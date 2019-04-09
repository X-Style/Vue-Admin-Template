<template>
  <Content>
    <h1>{{ msg }}</h1>
    <p>
      有关如何配置/自定义此项目的指南和方法,<br>
      查看<a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli文档</a>。
    </p>
    <h3>已安装的CLI插件</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>相关链接</h3>
    <ul>
      <li><a href="https://cn.vuejs.org/index.html" target="_blank" rel="noopener">Vue.js</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Vue.js论坛</a></li>
      <li><a href="https://router.vuejs.org/zh/" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org/zh/" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org/zh/" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </Content>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
