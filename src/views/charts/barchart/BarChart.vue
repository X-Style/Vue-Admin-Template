<template>
<Content id="linechart">
  <Spin v-if="loading" size="large" fix />
  <h2>{{ title }}</h2>
  <div id="chart_example">

  </div>
</Content>
</template>
<script>
import { _charts } from "@/services/charts/charts";
import echarts from 'echarts';

export default {
  name: "Test",
  data: () => ({
    title: "",
    loading: false,
    barchartoption: Object
  }),
  mounted() {
    this.$Loading.start();
    this.loading = true;
    // 模拟异步请求

    setTimeout(() => {
      _charts()
        .then(res => {
          this.$Loading.finish();
          this.loading = false;
          this.title = res.data + res.barchart.title;
          console.log(res);
          let myChart = echarts.init(document.getElementById('chart_example'));
          this.barchartoption = res.barchart.option;
          myChart.setOption(this.barchartoption);
          //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
          window.addEventListener('resize',function() {myChart.resize()});
        })
        .catch(err => {
          this.$Loading.error();
          this.loading = false;
          console.log(err);
        });
    }, 500);
  }
};
</script>
<style lang="postcss" scoped>
/* 样式使用 cssnext 预处理 */
:root {
  --bdColor: #ccc;
}
#linechart {
  & h2 {
    border-left: 4px solid var(--bdColor);
    padding-left: 12px;
  }
  & #chart_example{
    width: 100%;
    height: 500px;
    /* border: 1px solid red; */
    margin: 20px auto 0;
  }
}


</style>
