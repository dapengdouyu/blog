<template>
  <span>
    <span
      ref="btn"
      class="v-copy-code-btn"
      @click="copyClick"
    >{{
      copyText
    }}</span>
  </span>
</template>

<script>
import clipboard from "./clipboard";
import Vue from "vue";
export default {
  props: {
    copyText: {
      type: String,
      default: "复制代码",
    },
    code: String,
  },
  methods: {
    copyClick() {
      clipboard(this.$el, this.code);
      // 执行复制具体实现省略
      alert("复制成功");
    },
  },
};
</script>

<style>
.v-copy-code-btn {
  cursor: pointer;
  color: hsla(0, 0%, 54.9%, 0.8);
  -webkit-transition: color 0.1s;
  transition: color 0.1s;
  position: absolute;
  z-index: 3;
  top: 0.8em;
  right: 15px;
  font-size: 0.75rem;
}
div[class*="language-"]::before {
  content: "" !important;
}
</style>
