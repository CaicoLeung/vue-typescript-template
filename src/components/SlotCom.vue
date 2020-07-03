<template>
  <div class="slot-com">
    <h2>{{ message }}</h2>
    <slot name="header">header部分缺失</slot>
    <hr />
    <slot name="main">main部分缺失</slot>
    <hr />
    <slot name="footer">footer部分缺失</slot>
    <hr />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    message: {
      type: String,
      required: true
    }
  }
})
export default class SlotCom extends Vue {}
</script>

<style lang="scss" scoped>
.slot-com {
  width: 200px;
  border: 1px solid #643297;
  border-radius: 10px;
  color: #a52a2a;
  font-size: 16px;
}
</style>
