<template>
  <div class="loading"></div>
</template>

<script>
export default {
  name: 'loading'
}
</script>

<style lang="scss" scoped>  
  .loading {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid rgba(255,255,255,.3);
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
    position:fixed;
    z-index: 100;  
    top:50%;  
    left:50%;  
  }

  @keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
  @-webkit-keyframes spin {
    to { -webkit-transform: rotate(360deg); }
}
</style>
