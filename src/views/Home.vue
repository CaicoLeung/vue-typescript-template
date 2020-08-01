<template>
  <div class="home">
    <img alt="Vue logo" :src="logo" />
    <h4>{{ response }}</h4>
    <div>
      <input type="text" placeholder="自动获取焦点" ref="inputRef" v-model="text" />
      <h4>{{ myName }}</h4>
      <button @click="setMyName(text)">setName</button>
      <h5>{{ count }}</h5>
      <button @click="incrementHandle">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import MyModal from "@/components/Modal.vue";
import * as logo from "@/assets/logo.png";
import { State, Action, Getter, Mutation, namespace } from "vuex-class";

const profileModule = namespace("profile");

@Component
export default class Home extends Vue {
  @State("count") count: undefined;
  @Mutation("incrementHandle") incrementHandle!: () => void;
  @profileModule.Getter("getName") myName!: string;
  @profileModule.Action("setName") setMyName!: (value: string) => void;
  text = "";
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
