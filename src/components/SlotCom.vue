<template>
  <div class="slot-com">
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
    message: String
  }
})
export default class SlotCom extends Vue {}
</script>

<style lang="scss" scoped>
.slot-com {
  width: 200px;
  border: 1px solid rebeccapurple;
  border-radius: 10px;
  color: brown;
  font-size: 16px;
}
</style>
