<template>
  <div class="home">
    <img alt="Vue logo" :src="logo" />
    <h4>{{ response }}</h4>
    <div>
      <input type="text" placeholder="自动获取焦点" ref="inputRef" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import MyModal from "@/components/Modal.vue";
import * as logo from "@/assets/logo.png";

@Component
export default class Home extends Vue {
  checked = false;
  logo = logo;
  response = "加载中...";
  $refs!: {
    inputRef: HTMLInputElement;
  };

  async getTest() {
    try {
      const reqParam = {
        name: "Caico",
        age: 26,
        school: "华南理工大学"
      };
      const { title } = await this.$api.TestModule.test(1);
      this.response = title;
    } catch (e) {
      throw Error(e);
    }
  }

  change(value: boolean) {
    this.checked = value;
  }

  async mounted() {
    this.$refs.inputRef.focus();
    await this.getTest();
    this.$cookiejs.setCookie("name", "caico");
    console.log("获取name的cookie值： ", this.$cookiejs.getCookie("name"));
  }
}
</script>
