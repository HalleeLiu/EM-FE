<template>
  <div class="page-demo">
    <emfe-pagination :pageCount="pageCount" :curPage="curPage" @togglePage="togglePage($event)"></emfe-pagination>
  </div>
</template>

<script>
export default {
  name:  'pageDemo',
  data()  {
    return{
      pageCount: 12,
      curPage: 3,
    }
  },
  methods:  {
    togglePage(indexPage)  {
      console.log(indexPage);
    }
  }
}
</script>
