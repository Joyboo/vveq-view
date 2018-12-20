<template>
    <layoutindex>

      <template slot="layoutbody">
        <div style="width: 100%;height:200px;border:1px solid red;"></div>
      </template>

      <template slot="layoutright">
        <div style="width: 100%;height:200px;border:1px solid green;"></div>
      </template>

    </layoutindex>
</template>

<script>
  import layoutindex from "../../components/layout/index"

  export default {
    name: "add",
    components: {
      layoutindex
    }
  }
</script>

<style scoped>

</style>
