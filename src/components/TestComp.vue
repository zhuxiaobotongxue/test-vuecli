<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

// 以“类“的形式创建组件
@Component
export default class TestComp extends Vue {
  @Prop([String, Number]) private msg!: string | number | undefined;

  // 类属性相当于data
  // 这里给了默认值，ts会自动推断它的类型
  count = 0;
  firstName = "John";
  lastName = "Doe";
  // 属性x虽然给了类型，但是由于没有初始化,ts会给出提示，那么这里加个“！”可避免警告
  x!: number;
  // get和set方法相当于计算属性computed
  get name() {
    return this.firstName + " " + this.lastName;
  }
  // 类方法相对于methods，注意不要用箭头函数，因为这样会导致this无法绑定vue实例
  add() {
    this.count++;
  }
  // 钩子函数，建议不要用constructor，因为该属性会被改造
  mounted() {
    console.log(this.count + "," + this.name);
  }
}
</script>

<style scoped lang="scss"></style>
