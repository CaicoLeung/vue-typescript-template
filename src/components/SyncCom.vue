<template>
  <div class="wrapper">
    <p>{{ foo }}</p>
    <button @click="emitHandle">submit</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    foo: {
      type: String,
      required: true,
      default: ""
    }
  }
})
export default class SyncCom extends Vue {
  emitHandle() {
    this.$emit("update:foo", "更新父组件");
  }
}
</script>
