import Vue from "vue";
import Component from "vue-class-component";

@Component
export class Hello extends Vue {
  hello = "Hello";
}

@Component
export class World extends Vue {
  world = "World";
}
