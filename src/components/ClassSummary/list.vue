<template>
    <div>
        <div class="buttongrounp">
            <div class="introduction">课时汇总</div>
            <div class="brief"></div>
            <div class="brief-s"></div>
            <div class="selesss">
                <el-dropdown>
                    <span class="el-dropdownlink">
                        课程<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown>
                    <span class="el-dropdownlink">
                        班级<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <input type="text">
            </div>
        </div>
        <div class="row-course">
            <div class="dates">
                <div class="upper">上一月</div>
                <div class="data">2021年03月</div>
                <div class="lower">下一月</div>
                <ul>
                    <li>
                        <button class="prass">按月</button>
                        <button class="prass1">按日</button>
                    </li>
                    <li>已结果：0</li>
                    <li><div class="result"></div>未结果:303</li>
                    <li>总排学生数：39位</li>
                    <li>总排课时：304</li>
                </ul>
            </div>
        </div>
        <table class="theads">
            <template>
                <tr v-for="(item,index) in navlist ">
                    <td>{{item.week}}</td>
                    <td>
                        <div class="subject" @click="ShowDetails(index)">
                            <th>{{item.name}}:{{item.classes}}</th>
                            <div>{{item.time}}</div>
                            <div>{{item.teacher}}</div>
                        </div>
                    </td>
                </tr>

            </template>
        </table>
          <el-dialog title="课程详情" :visible.sync="CourseDetails" width="60%">
                    <Courselist :listss="list"></Courselist>
                </el-dialog>
    </div>

</template>

<script>
import Courselist from "./courselist.vue"
export default {
    components:{
        Courselist,
    },
    data(){
        return{
            CourseDetails:false,
            list:[],
            navlist:[
   {
                    week:"星期一",
                    name:"架子鼓基础班",
                    classes:"2021",
                    time:"13:30",
                    teacher:"李老师",

                },
                {
                    week:"星期二",
                    name:"架子鼓基础班",
                    classes:"2021",
                    time:"13:30",
                    teacher:"李老师",

                },
                {
                    week:"星期三",
                    name:"架子鼓基础班",
                    classes:"2021",
                    time:"13:30",
                    teacher:"李老师",

                },
                {
                    week:"星期四",
                    name:"架子鼓基础班",
                    classes:"2021",
                    time:"13:30",
                    teacher:"李老师",

                },
                {
                    week:"星期五",
                    name:"架子鼓基础班",
                    classes:"2021",
                    time:"13:30",
                    teacher:"李老师",

                },
                {
                    week:"星期六",
                    name:"架子鼓基础班",
                    classes:"2021",
                    time:"13:30",
                    teacher:"李老师",

                },
                {
                    week:"星期日",
                    name:"架子鼓基础班",
                    classes:"2021",
                    time:"13:30",
                    teacher:"李老师",
                },
            ]
        }
    },
    methods:{
        ShowDetails(index){
            this.CourseDetails=true;
            this.list=this.navlist[index];
        },
        loaddata(){
            this.$http.get('/api/classes/add',null,success=>{

            },error =>{

            })
        }
    }
}
</script>

<style lang='less' scoped>
@import '../../assets/less/indexpublic';

    .el-main {
        background-color: #e9eef3;
        color: #333;
        padding: 0px;
    }
    .row-course{
        width: 100%;
        height: 52px;
        background-color: #ffffff;
        border-bottom: 1px solid #e5e5e5;
        margin-left: 24px;
    }
    .dates{
        margin-left: 9px;
        margin-right: 50px;
        line-height: 52px;
    }
    .upper{
        float: left;
        line-height: 52px;
        width: 80px;
        padding-left: 10px;
        background: url("../../assets/img/ico.png") no-repeat;
        background-position: -164px -887px;
        margin: 0px;
    }
    .data{
        width: 142px;
        float: left;
        line-height: 52px;
    }
    .lower{
        float: left;
        line-height: 52px;
        width: 80px;
        background: url("../../assets/img/ico.png") no-repeat;
        background-position: 47px -887px;
        margin: 0px;
    }
    .total{
        float: right;
    }
    .row-course .dates ul li{
        float: right;
        margin-right: 30px;
        position: relative;
    }
    .row-course .dates ul li .result{
        width: 12px;
        height: 12px;
        background-color: #925ff8;
        position: absolute;
        left:-15px;
        top: 20px;
    }

    .prass{
        border: 1px solid #dcdfe6;
        width: 68px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        height: 33px;
    }
    .prass1{
        border: 1px solid #dcdfe6;
        width: 68px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        height: 33px;
    }
    .theads{
        width: 100%;
        height: 100%;
        background-color: red;
        margin-left: 24px;
    }
    .theads tr{
        width: 100%;
    }
    .theads tr td{
        border-bottom: 2px solid #e5e5e5;
        height: 99px;
        position: relative;
    }
    .theads tr td:first-of-type{
        width: 125px;

        background-color: #f3f3f3;
        line-height: 99px;
    }
    .theads tr td:nth-of-type(2){
        background-color: #f7f7f7;
    }
    .theads tr td .subject{
        width: 150px;
        height: 57px;
        background-color: #ffffff;
        border-radius: 5px;
        font-size: 13px;
        position: absolute;
        top: 20px;
        left: 14px;
        border-left: 4px solid #4381fc;
    }
    .theads tr td .subject th{
        float: left;
        margin: 10px 0 7px 9px;
    }
    .theads tr td .subject div{
        float: left;
        margin-left: 10px;
        color: #c8ccd5;
    }
    .theads tr:nth-of-type(6) td:first-of-type,.theads tr:nth-of-type(7) td:first-of-type{
        background-color: #fefa8f;
    }


</style>