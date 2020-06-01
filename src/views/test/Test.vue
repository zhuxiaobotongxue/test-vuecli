<template>
  <div class="test">
    <TestComp msg="This is an test page" />
  </div>
</template>
<script>
// 自定义组件
import TestComp from "@/components/TestComp.vue";
export default {
  components: {
    TestComp
  }
};
</script>
