<template>
<div id="edit-password">
  <Modal v-model="modal.visible" :title="modal.title" footer-hide>
    <IForm :key="modal.visible" ref="editPassword" label-position="top" :elem="editPasswordElem" :model="editPassword" :rules="editPasswordRule" :btn-loading="loading" :width="320" @on-submit="handleSubmit" @on-click="modal.visible = false"
      submit-text="Save password" button button-text="Cancel" />
    <!-- IForm -->
  </Modal>
</div>
</template>
<script>
import { _editPwd } from "@/services/app";
export default {
  name: "EditPassword",
  data() {
    const validPwd = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入您的新密码"));
      } else {
        if (this.editPassword.passwordConfirmation) {
          // 对第二个密码框单独验证
          this.$refs["editPassword"].validateField("passwordConfirmation");
        }
        callback();
      }
    };
    const validPwdCheck = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入您的密码确认"));
      } else {
        if (value !== this.editPassword.password) {
          callback(new Error("两个输入密码不匹配!"));
        } else {
          callback();
        }
      }
    };
    return {
      // 加载状态
      loading: false,
      // 模态框属性
      modal: {
        title: "",
        visible: false
      },
      // 表单元素数组
      editPasswordElem: [
        {
          label: "当前密码",
          prop: "currentPassword",
          placeholder: "请输入您当前的密码",
          type: "password"
        },
        {
          label: "新密码",
          prop: "password",
          placeholder: "请输入您的新密码",
          type: "password"
        },
        {
          label: "确认密码",
          prop: "passwordConfirmation",
          placeholder: "请输入您的密码确认",
          type: "password"
        }
      ],
      // 表单数据对象
      editPassword: {
        currentPassword: "",
        password: "",
        passwordConfirmation: ""
      },
      // 表单验证规则
      editPasswordRule: {
        currentPassword: [
          {
            required: true,
            message: "请输入您当前的密码",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            validator: validPwd,
            trigger: "blur"
          }
        ],
        passwordConfirmation: [
          {
            required: true,
            validator: validPwdCheck,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    showModal() {
      this.modal = {
        title: "修改密码",
        visible: true
      };
      this.editPassword = {
        currentPassword: "",
        password: "",
        passwordConfirmation: ""
      };
    },
    handleSubmit() {
      this.$Loading.start();
      this.loading = true;
      setTimeout(() => {
        _editPwd(this.editPassword)
          .then(res => {
            this.$Message.success(res.error.msg);
            this.$Loading.finish();
            this.loading = false;
            this.modal.visible = false;
          })
          .catch(() => {
            this.$Loading.error();
            this.loading = false;
          });
      }, 500);
    }
  }
};
</script>
