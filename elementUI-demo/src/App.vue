<template>
  <div id="app">
    <el-button type="primary" class="el-icon-search">主要按钮</el-button>
    <el-button type="danger" class="el-icon-error">主要按钮</el-button>
    <el-button type="info" class="el-icon-info">主要按钮</el-button>
    <el-button type="success" class="el-icon-success">主要按钮</el-button>
    <el-button type="warning" class="el-icon-warning">主要按钮</el-button>
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
