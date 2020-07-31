<template>
  <div class="wrapper">
    <p>{{ foo }}</p>
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
export default class SyncCom extends Vue {}
</script>
