<template>
  <div class="home">
    <img alt="Vue logo" :src="logo" />
    <HelloWorld msg="Hello Vue!"></HelloWorld>
    <SlotCom message="你好">
      <template #header>
        Top
      </template>
      <template #main>
        Middle
      </template>
      <template #footer>
        Bottom
      </template>
    </SlotCom>
    <!-- <MyModal v-model="checked" @change="change"></MyModal> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import SlotCom from "@/components/SlotCom.vue";
import MyModal from "@/components/Modal.vue";
import * as logo from "@/assets/logo.png";

@Component({
  components: {
    HelloWorld,
    SlotCom
  }
})
export default class Home extends Vue {
  checked: boolean = false;
  logo: any = logo;
  public async getTest() {
    try {
      const data = await this.$api.test();
    } catch (e) {
      throw Error(e);
    }
  }

  public change(value: boolean) {
    this.checked = value;
  }

  public mounted() {
    this.getTest();
  }
}
</script>
