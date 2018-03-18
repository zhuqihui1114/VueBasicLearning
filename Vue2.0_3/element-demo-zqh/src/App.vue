<template>
  <div id="app">
    <el-button type="primary" plain @click='get'>get_msg</el-button>
    <el-button type="danger" @click="init">init_msg</el-button>
    <el-button type="info" icon="el-icon-delete">主要按钮</el-button>
    <el-button type="success" icon="el-icon-edit">主要按钮</el-button>
    <el-button type="warning" icon="el-icon-search">主要按钮</el-button>

    <span class="el-icon-delete"></span>
    <span class="el-icon-loading"></span>

    <el-row>
      <el-col :span="12">
        <div class="my-grid"></div>
      </el-col>
      <el-col :span="12">
        <div class="my-grid"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="my-grid">
        </div>
      </el-col>
      <el-col :span="8">
        <div class="my-grid"></div>
      </el-col>
      <el-col :span="8">
        <div class="my-grid"></div>
      </el-col>
    </el-row>

    <div>
      {{msg}}
    </div>

    <hr>

    <el-radio class="radio" v-model="radio" label="1">备选项1</el-radio>
    <el-radio class="radio" v-model="radio" label="2">备选项2</el-radio>

    <!-- 日历 -->
    <Date></Date>

    <!-- rate -->
    <el-rate v-model="val"></el-rate>

    <!-- 分页 -->
    <el-pagination
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>

    <!-- 选项卡 -->
    <el-tabs type="card">
      <el-tab-pane label="用户管理">

        <el-badge :value="200" :max="99" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
        <br/>
        <el-badge :value="98" :max="99" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>

      </el-tab-pane>
      <el-tab-pane label="配置管理">
        <el-switch
          v-model="bSign"
          on-text=""
          off-text="">
        </el-switch>
      </el-tab-pane>
      <el-tab-pane label="角色管理">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>

    <!-- button 自定义组件要加事件需要使用：@click.native="get" -->
    <myButton @click.native="get"></myButton>

  </div>

</template>

<script>
  import Date from './components/Date.vue'
  import myButton from './components/Button.vue'
  import axios from 'axios'
  export default {
    components:{
      myButton,Date
    },
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        radio:"2",
        value1:'',
        val:5,
        bSign:true,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市闵行区北翟路申长路路口申长北路186号'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海'
        }]
      }
    },
    mounted(){
      this.init();
    },
    methods:{
      get(){
        axios.get('index.html')
        // axios.get('https://api.github.com/users/itstrive')
          .then(function(res){
            this.msg=res.data;
          }.bind(this)).catch(function(err){
            console.log(err);
        })
      },
      init(){
        this.msg='初始化';
      }
    }
  }
</script>

<style scoped lang="less">
  @color:red;
  .height(@h){
    height:@h;
  }
  .my-grid{
    .height(50px);
    border:1px solid @color;

  }
  .item{
    margin-top:30px;
  }
</style>
