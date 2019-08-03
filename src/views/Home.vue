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
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import MyModal from "@/components/Modal.vue";
import * as logo from "@/assets/logo.png";

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  checked: boolean = false;
  logo: any = logo;
  data: string = "加载中...";
  public async getTest() {
    try {
      const reqParam = {
        name: "Caico",
        age: 26,
        school: "华南理工大学"
      };
      this.data = await this.$api.test(reqParam);
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
