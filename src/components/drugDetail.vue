<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="通用名">
      <el-input v-model="drug.drugName"></el-input>
    </el-form-item>
    <el-form-item label="商品名">
      <el-input v-model="drug.tradeName"></el-input>
    </el-form-item>
    <el-form-item label="生产厂家">
      <el-input v-model="drug.enterprise"></el-input>
    </el-form-item>
    <el-form-item label="有效成分">
      <el-input type="textarea" v-model="drug.ingredient"></el-input>
    </el-form-item>
    <el-form-item label="适应症">
      <el-input type="textarea" v-model="drug.indication"></el-input>
    </el-form-item>
    <el-form-item label="用法用量">
      <el-input type="textarea" v-model="drug.dosage"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">保存</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";

  export default {
    data() {
      return {
        id: this.$route.params.id,
        url: 'http://localhost:8900/drug/',
        drug: [],
        drugs :{
          id : 0,
          drugName:'阿米片',
          tradeName:'阿米片'
        }
      }
    },
    created: function () {
      if (this.id != 0)
        this.getDrug()
    },
    methods: {
      getDrug: function () {
        var url = this.url;
        url += this.id;
        this.$http.get(url)
          .then((response) => {
            this.drug = response.data
          }, (response) => {
            console.log("error");
          })
      },
      onSubmit() {
        alert('submit!');
        //判断是新增还是保存
        if (this.id == 0){
          //保存
          alert('保存')
          this.$http.post("http://localhost:8900/drug/add/"+this.id, this.drugs)
            .then((response) => {
              console.log("succ");
              //跳转回上一个界面
              this.$router.push({name: 'Drugs'});
            }, (response) => {
              console.log("err");
            })
        }else{
          //更新
          this.$http.post("http://localhost:8900/drug/"+this.id, this.drug)
            .then((response) => {
              console.log("succ");
              //跳转回上一个界面
              this.$router.push({name: 'Drugs'});
            }, (response) => {
              console.log("err");
            })
        }
      },
      saveActor: function (actors) {

        //  console.log(actors.actorName);

        //传递参数
        this.$http.post("http://localhost:8099/addactors", actors)
          .then((response) => {
            console.log("succ");
          }, (response) => {
            console.log("err");
          })

        this.dialogFormVisible = false;
        console.log(this.dialogFormVisible);
      }
    }
  }
</script>
<style>

</style>
