<template>
    <div class="box">
        <div class="header">
            <div class="left">
                <div class="sign">考勤管理</div>
                <div class="brief1"></div>
                <div class="brief2"></div>
            </div>
            <div class="middle">
                <el-date-picker class="date1" type="date" placeholder="开始日期" v-model="form.date1"></el-date-picker>
                
                <!-- <el-col class="line" :span="2">-</el-col> -->
                <img src="../../assets/img/bolangxian.jpg" alt="">

                <el-date-picker class="date2" type="date" placeholder="结束日期" v-model="form.date2"></el-date-picker>

                <!-- <input class="date1" type="text" placeholder="开始日期">  -->
                <!-- <input class="date2" type="text" placeholder="结束日期"> -->
            </div>
            <div class="right">

                <el-select class="right1" v-model="form.region" placeholder="课程">
                    <el-option label="体育" value="1"></el-option>
                    <el-option label="微机" value="2"></el-option>
                </el-select>
                <el-input class="right2" placeholder="搜索学院快速签到" v-model="input" clearable></el-input>


                <!-- <select class="right1">
                    <option>课程</option>
                </select>
                <input class="right2" type="search" placeholder="搜索学院快速签到"> -->
            </div>
        </div>
        <div class="main">
            <span class="top">今日课表</span>
            <div class="bottom">
                <table>
                    <tr>
                        <td class="td1">
                            架子鼓基础班2101 
                            <span class="span1">班课</span>
                        </td>
                        <td class="td2">
                            <span class="img1"><img src="../../assets/img/jiazigu.jpg" alt=""> 架子鼓课</span>
                            <span class="img2"><img src="../../assets/img/shijian.jpg" alt=""> 13:30-14:15</span>
                            <span class="img3"><img src="../../assets/img/mingming.jpg" alt=""> 明明</span>
                        </td>
                        <td class="td3">
                            <span> 已到达</span>
                            <a href="#" @click="detail">
                                <span class="img5"><img src="../../assets/img/qiandao.jpg" alt=""></span> 签到
                            </a>
                            
                            <el-dialog :visible.sync="detailss">
                            <detail></detail>
                            </el-dialog>
                       
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
 
<script>
import detail from "./detail.vue";
import axios from 'axios';
export default {
  components: {
    detail,
  },
  data() {
    return {
      detailss: false,
      form: {
          date1: '',
          date2: '',
          region: '',
          
      },
      input: ''
    };
  },
  created(){
    //   this.loaddata();
  },
  methods: {
    detail() {
      this.detailss = true;
    },
    loaddata(){   //请求接口，获取数据
        axios.post('/api/classes/list').then(function (res){
            console.log(res)
            var _this=this
        })
    },      
  },
};
</script>

<style scoped>
    .box{
        width: 1816px;
        height: 870px;
        background: white;
    }
    .box .header{
        height: 52px;
        background: #f5f6fa;
        font-size: 18px;
        border: 1px solid #e0e4ed;
        position: relative;
    }
    .box .header .left{
        width: 108px;
        height: 52px;
        background: #dfe3ec;
        float: left;
        position: relative;
    }
    .box .header .left .sign{
        width: 108px;
        height: 52px;
        /* position: absolute;
        left: 0;
        top: 0; */
        line-height: 52px;
        text-align: center;
    }
    .box .header .left .brief1{
        width: 0;
        height: 0;
        border-right: 19px solid transparent;
        border-bottom: 28px solid #dfe3ec;
        position: absolute;
        left: 106px;
        top: 0px;
    }
    .box .header .left .brief2{
        width: 0;
        height: 0;
        border-right: 19px solid transparent;
        border-top: 28px solid #dfe3ec;
        position: absolute;
        left: 106px;
        top: 25px;
    }
    .box .header .middle{
        width: 298px;
        height: 38px;
        border: 1px solid #dee3e9;
        background: white;
        /* background-image: url('../../assets/img/riqi.jpg');
        background-repeat: no-repeat;
        background-position: 12px, 10px; */
        position: absolute;
        left: 158px;
        top: 6px;
        font-size: 17px;
        position: relative;
        /* background-image: url('../../assets/img/bolangxian.jpg');
        background-repeat: no-repeat;
        background-position: 12px 160px; */
    }
    
    .box .header .middle .date1{
        width: 134px;
        /* height: 36px; */
        /* border: 1px solid #dee3e9; */
        position: absolute;
        left: 0;
        top: 0;
        /* border: none; */
    }
    .box .header .middle .date2{
        width: 134px;
        /* height: 36px; */
        position: absolute;
        left: 165px;
        top: 0;
        /* border: none; */
    }
    .box .header .right{
        width: 425px;
        height: 38px;
        border: 1px solid #dee3e9;
        position: absolute;
        left: 473px;
        top: 6px;
        background: white url('../../assets/img/ico.png') no-repeat;
        background-position: 288px -432px;
        /* background-size: 179px 1050px; */
    }
    .box .header .right .right1{
        width: 79px;
        height: 36px;
        border: none;
        float: left;
        /* margin-left: 25px; */
        /* margin-right: 24px; */
        color: #9fadc7;
    }
    .box .header .right .right2{
        width: 307px;
        height: 36px;
        border: white;
        float: left;
    }
    .box .main{
        height: 818px;
        position: relative;
    }
    .box .main .top{
        font-size: 20px;
        position: absolute;
        left: 25px;
        top: 29px;
    }
    .box .main .bottom{
        width: 1766px;
        height: 78px;
        font-size: 19px;
        border: 1px solid #e5e5e5;
        border-left: 7px solid #1890ff;
        border-radius: 6px/6px;
        position: absolute;
        left: 25px;
        top: 91px;
    }
    .box .main .bottom table{
        width: 1758px;
        height: 76px;
        line-height: 76px;
    }
    .box .main .bottom td{
        color: #7e8b9c;
    }
    .box .main .bottom .td1{
        padding-left: 32px;
        padding-right: 260px;
        /* margin: 29px 260px 29px 32px; */
    }
    .box .main .bottom .td1 .span1{
        background: #c7edde;
        color: #2dcfa8;
        font-size: 13px;
        padding: 4px 10px 3px 10px;
        margin-left: 15px;
    }
    .box .main .bottom .td2{
        padding-right: 322px;
        background: white url('../../assets/img/ico.png') no-repeat;
        background-position: 642px -451px;
    } 
    
    .box .main .bottom .td3{
        padding-right: 300px;
    }
    
    .box .main .bottom .td3 a{
        margin-left: 60px;
        color: #4080fc;
        text-decoration: none;
    }
</style>