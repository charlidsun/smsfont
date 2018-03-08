<template>
  <el-row class="layout">
    <el-row class="layout-top">
      <el-col :span='23' :push="1">
        <el-col :span="4" class="layout-top-left">
          <span>药品<i style="color:#20a0ff">说明书</i></span>
        </el-col>
        <el-col :span="20" class="layout-top-right">
        </el-col>
      </el-col>
    </el-row>
    <el-row class="layout-center">
      <el-col :span='5' class="layout-center-left">
        <el-menu theme="dark" default-active="drugs" v-bind:router="true">
          <el-menu-item index="drugs">说明书</el-menu-item>
          <el-menu-item index="home">药理分类</el-menu-item>
          <el-menu-item index="4">药品字典</el-menu-item>
          <el-menu-item index="6">给药途径</el-menu-item>
          <el-menu-item index="7">诊断目录</el-menu-item>
          <el-submenu index="9">
            <template slot="title">药品规则</template>
            <el-menu-item index="1">适应症</el-menu-item>
            <el-menu-item index="2">相互作用</el-menu-item>
            <el-menu-item index="76">配伍禁忌</el-menu-item>
          </el-submenu>

        </el-menu>
      </el-col>
      <el-col :span='19' class="layout-center-right">
        <router-view></router-view>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
export default {
  methods : {
    select(name){
      console.log(name);
    }
  }
}
</script>

<style>
  .layout{
    position: absolute;
    bottom: 0;
    top: 0;
    width: 100%;
    background: #1F2D3D
  }
  .layout-top{
    height: 60px;
    background: #c0ccda;
    line-height: 60px;
  }
  .layout-center{
    background: #324057;
    position: absolute;
    top: 60px;
    bottom: 0px;
    width: 100%;
  }
  .layout-top-left{
    font-size: 27px;
  }
  .layout-center-right{
    background: #f1f2f7;
    position: absolute;
    right: 0px;
    top: 0px;
    bottom: 0px;
    padding: 30px;
    overflow: scroll;
  }
</style>
