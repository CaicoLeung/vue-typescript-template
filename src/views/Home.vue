<template>
  <div class="home">
    <img alt="Vue logo" :src="logo" />
    <HelloWorld msg="Hello Vue!"></HelloWorld>
    <h4>{{ data }}</h4>
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
  data = "加载中...";
  public async getTest() {
    try {
      const reqParam = {
        name: "Caico",
        age: 26,
        school: "华南理工大学"
      };
      const { title } = await this.$api.TestModule.test(1);
      this.data = title;
    } catch (e) {
      throw Error(e);
    }
  }

  public change(value: boolean) {
    this.checked = value;
  }

  public mounted() {
    this.getTest();
    this.$cookiejs.setCookie("name", "caico");
    console.log("获取name的cookie值： ", this.$cookiejs.getCookie("name"));
  }
}
</script>
