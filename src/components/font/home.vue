<template>
  <div style="background-color: white;position: absolute;top: 0;bottom: 0;left: 0;right: 0">
    <el-row>
      <!--title-->
      <el-col :span="4" style="text-align: center;line-height: 60px;background-color: #545c64">
        <span>药品<i style="color:#20a0ff">说明书</i></span>
      </el-col>
      <el-col :span="20">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="22">说明书</el-menu-item>
          <el-menu-item index="13">药品规则</el-menu-item>
          <el-submenu index="2">
            <template slot="title">关于我们</template>
            <el-menu-item index="2-1">公司介绍</el-menu-item>
            <el-menu-item index="2-2">联系地址</el-menu-item>
            <el-menu-item index="2-3">人才招聘</el-menu-item>
          </el-submenu>
          <el-menu-item index="3" disabled>版权中心</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <el-row>
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in bannerList" :key="item">
          <img :src="item.imageUrl">
        </el-carousel-item>
      </el-carousel>
    </el-row>
    <el-row>
      <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img src="http://element.eleme.io/static/hamburger.50e4091.png" class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }">
          <ul>
            <li>阿司匹林肠溶片</li>
            <li>阿司匹林肠溶片</li>
            <li>阿司匹林肠溶片</li>
            <li>阿司匹林肠溶片</li>
            <li>阿司匹林肠溶片</li>
          </ul>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }">
          <ul>
            <li>阿司匹林肠溶片</li>
            <li>阿司匹林肠溶片</li>
            <li>阿司匹林肠溶片</li>
            <li>阿司匹林肠溶片</li>
            <li>阿司匹林肠溶片</li>
          </ul>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="color: white;font-size: 15px; height: 60px;text-align:center;line-height: 60px; width: 100%;background-color: lightsteelblue">
      Copyright © 2013-2018 菜鸟教程  runoob.com All Rights Reserved. 备案号：闽ICP备15012807号-1
    </el-row>
  </div>
</template>
<script>
  import ElCol from "element-ui/packages/col/src/col";
  import ElRow from "element-ui/packages/row/src/row";

  export default {
    components: {
      ElRow,
      ElCol
    },
    data() {
      return {
        bannerList : [{
          imageName: '111',
          imageUrl:'http://img.zcool.cn/community/0101945774f35c0000018c1b113714.png@1280w_1l_2o_100sh.webp'
        },{
          imageName: '22222',
          imageUrl:'http://img.zcool.cn/community/013a885774f37d0000018c1be30ddd.jpg@1280w_1l_2o_100sh.webp'
        }],
        activeIndex2: '1',
        drugList: [],
        firstSpellsInput: '',
        listUrl: 'http://localhost:8900/drug/list/'
      }
    },
    created: function () {
      //this.getActors()
    },
    methods: {
      getActors: function () {
        var url = this.listUrl;
        if (this.firstSpellsInput == '')
          url += 'all'
        else
          url += this.firstSpellsInput

        console.log(url)

        this.$http.get(url)
          .then((response) => {
            this.drugList = response.data
          }, (response) => {
            console.log("error");
          })
      },
      editDrug: function (index) {
        alert(this.drugList[index].id)
        //打开一个新的页码
        this.$router.push({name: 'DrugDetail', params: {id: this.drugList[index].id}});
        //this.$router.push({name: 'homePage', params: {code : res.data.Code } })

      },
      addDrug: function () {
        this.$router.push({name: 'DrugDetail', params: {id: 0}});
      }
    }
  }
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
