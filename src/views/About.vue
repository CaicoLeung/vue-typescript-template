<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" v-model="message" />
    <p>reversedMessage: {{ reversedMessage }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { Hello, World } from "@/components/Mixins.js";

@Component
export default class About extends mixins(Hello, World) {
  message = "";

  created() {
    console.log(`${this.hello} ${this.world}`);
  }

  get reversedMessage(): string {
    return this.message
      .split("")
      .reverse()
      .join("");
  }
}
</script>
