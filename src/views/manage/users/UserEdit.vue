<template>
<div id="user-edit">
  <Modal v-model="modal.visible" :title="modal.title" footer-hide>
    <IForm :key="modal.visible" :model="edit" :elem="userElem" :rules="userRule" :loading="loading.form" :btn-loading="loading.btn" :width="360" :label-width="80" button submit-text="确定" button-text="取消" @on-submit="handleSubmit" @on-click="modal.visible = false" />
    <!-- IForm -->
  </Modal>
</div>
</template>
<script>
import {
  _editUser // 创建编辑
} from "@/services/manage/users";
export default {
  name: "UserEdit",
  data() {
    // 自定义验证(年龄)
    const validAge = (rule, value, callback) => {
      if (!value) {
        callback(new Error("年龄不能为空"));
      }
      // 模拟异步验证
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 500);
    };
    return {
      // 模态框属性
      modal: {
        title: "",
        visible: false
      },
      // 表单数据
      edit: {
        name: "",
        age: "",
        gender: "",
        email: "",
        city: "",
        hobby: [],
        birth: "",
        desc: ""
      },
      // 初始表单数据
      init: "",
      // 加载状态
      loading: {
        form: false,
        btn: false
      },
      // 表单元素
      userElem: [
        {
          label: "姓名",
          prop: "name",
          placeholder: "输入你的名字"
        },
        {
          label: "年龄",
          prop: "age",
          placeholder: "输入你的年龄",
          number: true
        },
        {
          label: "邮箱",
          prop: "email",
          placeholder: "输入你的邮箱"
        },
        {
          label: "城市",
          prop: "city",
          placeholder: "选择你的城市",
          element: "select",
          option: []
        },
        {
          label: "生日",
          prop: "birth",
          placeholder: "选择你的生日",
          element: "date"
        },
        {
          label: "性别",
          prop: "gender",
          element: "radio",
          option: [
            {
              label: "男",
              value: 1
            },
            {
              label: "女",
              value: 0
            }
          ]
        },
        {
          label: "爱好",
          prop: "hobby",
          element: "checkbox",
          option: []
        },
        {
          label: "个人介绍",
          prop: "desc",
          placeholder: "输入你的个人介绍...",
          type: "textarea"
        }
      ],
      // 表单验证(用户)
      userRule: {
        name: [
          {
            required: true,
            message: "名称不能为空",
            trigger: "blur"
          }
        ],
        age: [
          {
            required: true,
            validator: validAge,
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            message: "邮箱不能为空",
            trigger: "blur"
          },
          {
            message: "邮件格式不正确",
            trigger: "blur",
            type: "email"
          }
        ],
        city: [
          {
            required: true,
            message: "请选择城市",
            trigger: "change"
          }
        ],
        birth: [
          {
            required: true,
            message: "请选择日期",
            trigger: "change",
            type: "date"
          }
        ],
        gender: [
          {
            required: true,
            message: "请选择性别",
            trigger: "change",
            type: "number"
          }
        ],
        hobby: [
          {
            required: true,
            message: "选择至少一个爱好",
            trigger: "change",
            type: "array",
            min: 1
          },
          {
            message: "最多选择三个爱好",
            trigger: "change",
            type: "array",
            max: 3
          }
        ],
        desc: [
          {
            required: true,
            message: "请输入个人介绍",
            trigger: "blur"
          },
          {
            message: "个人介绍介绍不少于20个字",
            trigger: "blur",
            type: "string",
            min: 20
          }
        ]
      },
      // 补丁数据(城市)
      city: [
        {
          label: "北京",
          value: "110100"
        },
        {
          label: "福州",
          value: "350000"
        },
        {
          label: "上海",
          value: "310100"
        },
        {
          label: "广州",
          value: "440100"
        },
        {
          label: "深圳",
          value: "518000"
        },
        {
          label: "杭州",
          value: "330100"
        },
        {
          label: "宁波",
          value: "330200"
        }
      ],
      // 补丁数据(爱好)
      hobby: [
        {
          label: "美食",
          value: "eat"
        },
        {
          label: "宅",
          value: "sleep"
        },
        {
          label: "运动",
          value: "run"
        },
        {
          label: "电影",
          value: "movie"
        }
      ]
    };
  },
  mounted() {
    this.init = Object.assign({}, this.edit); // 复制初始表单数据
  },
  methods: {
    /**
     * 显示模态框
     * @param  {string} title 模态框标题名称
     * @param  {object} row 当前行数据
     */
    handleModal(title, row) {
      this.modal = {
        title: title,
        visible: true
      };
      this.loading.form = true; // 表单加载状态
      if (title === "新增") {
        this.handleCreate(); // 创建
      } else {
        this.handleEdit(row); // 编辑
      }
    },
    // 创建
    handleCreate() {
      this.edit = Object.assign({}, this.init);
      this.handlePatch(); // 获取补丁数据
    },
    // 编辑
    handleEdit(row) {
      // 模拟异步请求(获取详情)
      setTimeout(() => {
        console.log(row);
        const edit = Object.assign({}, row);
        const birth = row.birth
          ? this.$Utils.formatDate.parse(row.birth, "yyyy-MM-dd")
          : "--";
        let city;
        for (const key of Object.keys(row.city)) {
          city = key;
        }
        const hobby = [];
        for (const key of Object.keys(row.hobby)) {
          hobby.push(key);
        }
        this.edit = {
          ...edit,
          city,
          birth,
          hobby
        };
        this.handlePatch(); // 获取补丁数据
      }, 800);
    },
    // 获取补丁数据
    handlePatch() {
      const _false = false;
      const data = this.userElem.filter(
        name => name.option && !name.option.length
      );
      let total = data.length;
      if (!total) {
        this.loading.form = _false; // 表单加载状态
        return;
      }
      for (const item of data) {
        if (item["prop"] === "city") {
          // 模拟异步请求(获取补丁数据-城市)
          setTimeout(() => {
            item["option"] = this.city;
            total--;
            this.loading.form = total ? true : _false; // 补丁完成状态
          }, 800);
        }
        if (item["prop"] === "hobby") {
          // 模拟异步请求(获取补丁数据-爱好)
          setTimeout(() => {
            item["option"] = this.hobby;
            total--;
            this.loading.form = total ? true : _false; // 补丁完成状态
          }, 400);
        }
      }
    },
    // 表单提交
    handleSubmit() {
      this.$Loading.start();
      console.log(11111111);
      this.loading.btn = true;
      const payload = this.edit;
      payload.birth = this.$Utils.formatDate.format(
        new Date(payload.birth),
        "yyyy-MM-dd"
      );
      // 模拟异步请求(编辑 Or 新增)
      setTimeout(() => {
        _editUser(payload)
          .then(res => {
            this.$Message.success(res.error.msg);
            this.$emit("on-update");
            this.$Loading.finish();
            this.loading.btn = false;
            this.modal.visible = false;
          })
          .catch(() => {
            this.$Loading.error();
            this.loading.btn = false;
            this.modal.visible = false;
          });
      }, 500);
    }
  }
};
</script>
<style lang="postcss" scoped>
</style>
