<template>
  <div>
    <label>
      <input type="checkbox" :checked="checked" @change="change" />
    </label>
    {{ checked }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model, Emit } from "vue-property-decorator";

@Component
export default class Modal extends Vue {
  @Model("change", {
    type: Boolean
  })
  readonly checked!: boolean;

  @Emit()
  change(event: any) {
    return event.target.checked;
  }
}
</script>
