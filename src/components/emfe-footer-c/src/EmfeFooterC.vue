<template>
  <footer class="emfe-footer-c">
    <img class="emfe-footer-c-logo" :src="logo">
    <p class="emfe-footer-c-text">{{ content }}</p>
  </footer>
</template>
<script>
export default {
  name: 'EmfeFooterC',
  props: {
    content: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
  },
};
</script>
