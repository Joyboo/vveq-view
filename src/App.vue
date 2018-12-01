<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside style="background: inherit;" width="200px" class="hidden-sm-only hidden-xs-only"></el-aside>
        <el-aside width="200px" class="hidden-sm-only hidden-xs-only">Aside</el-aside>
        <el-main>Main</el-main>
        <el-aside width="200px" class="hidden-sm-only hidden-xs-only">Aside</el-aside>
        <el-aside style="background: inherit;" width="200px" class="hidden-sm-only hidden-xs-only"></el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import 'element-ui/lib/theme-chalk/display.css'

  export default {
    name: 'app',
    components: {
      HelloWorld
    }
  }
</script>

<style>
  body {
    margin: 0;
  }

  .el-header, .el-footer {
    background-color: #515a6e;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    margin: 10px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 1000px;
    margin: 10px;
  }

  body > .el-container {
    width: 100%;
    margin-bottom: 40px;
  }

</style>
