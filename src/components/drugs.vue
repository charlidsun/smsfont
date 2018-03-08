<template>
  <el-row>
    <el-row>
      <el-col :span="6">
        <el-input
          placeholder="请输入药品首拼"
          v-model="firstSpellsInput"
          prefix-icon="el-icon-search">
        </el-input>
      </el-col>
      <el-col :span="2" :offset="1">
        <el-button v-on:click="getActors" type="primary">搜索</el-button>
      </el-col>
      <el-col :span="2" :offset="1">
        <el-button v-on:click="addDrug" type="primary">新增</el-button>
      </el-col>
    </el-row>
    <el-table
      :data="drugList"
      stripe
      border
      style="width: 100%;margin-top: 20px">
      <el-table-column
        prop="id"
        label="说明书ID"
        width="120">
      </el-table-column>
      <el-table-column
        prop="drugName"
        label="通用名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="tradeName"
        label="商品名">
      </el-table-column>
      <el-table-column
        prop="enterprise"
        label="生产厂家"
        width="280">
      </el-table-column>
      <el-table-column
        prop="firstSpelling"
        label="首拼">
      </el-table-column>
      <el-table-column fixed="right" label="操作" inline-template>
        <template slot-scope="scope">
          <el-button v-on:click="editDrug($index)" type="text">编辑</el-button>
          <el-button type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-row>
</template>
<script>
  import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";

  export default {
    components: {
      ElCol,
      ElRow,
      ElButton
    },
    data() {
      return {
        drugList: [],
        firstSpellsInput: '',
        listUrl: 'http://localhost:8900/drug/list/'
      }
    },
    created: function () {
      this.getActors()
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
        this.$router.push({name: 'DrugDetail',params:{id:this.drugList[index].id}});
        //this.$router.push({name: 'homePage', params: {code : res.data.Code } })

      },
      addDrug: function () {
        this.$router.push({name: 'DrugDetail',params:{id:0}});
      }
    }
  }
</script>
<style>

</style>
