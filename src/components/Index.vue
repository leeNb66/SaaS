<template>
  <!-- 首页 -->
  <div>
    <el-container style="height: 100vh">
      <el-header>
        <img class="logo-img" src="../assets/img/logo.jpg" alt="" />
        <h1>云教务管理系统</h1>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <ul class="ul">
            <template v-for="item in navList" >
              <li :key="item.id">{{ item.meta.name }}</li>
            </template>
          </ul>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          path: "",
          meta: {
            name: "班级管理",
          },
        },
        {
          path: "",
          meta: {
            name: "课程管理",
          },
        },
        {
          path: "",
          meta: {
            name: "考勤管理",
          },
        },
        {
          path: "",
          meta: {
            name: "课时汇总",
          },
        },
        {
          path: "",
          meta: {
            name: "学员管理",
          },
        },
      ],
    };
  },
};
</script>

<style>
.el-header,
.el-footer {
  color: #333;
  line-height: 60px;
  background-color: #fafafc;
}
.ul{
    padding-bottom: 38px;
}
li{
  background: url("../assets/img/ico.png") no-repeat;
  background-size: 370px;
}
ul li:first-of-type {
  background-position: 22px -575px;
  margin-top: 38px;
}
ul li:nth-of-type(2) {
  background-position: 22px -194px;
}
ul li:nth-of-type(3) {
  background-position: 22px -980px;
}
ul li:nth-of-type(4) {
  background-position: -260px -193px;
}
ul li:nth-of-type(5) {
  background-position: -141px -1474px;
}
h1 {
  display: inline-block;
  height: 100%;
  line-height: 60px;
  font-size: 30px;
  position: relative;
  top: -20px;
  font-weight: bold;
  font-family: "华文楷体";
}
.logo-img {
  height: 100%;
}

.el-aside {
  background-color: #fafafc;
  color: #333;
  text-align: center;
  line-height: 130px;
  width: 123px !important;
  border: 1px solid #dee3e9;
  font-size: 18px;
  color: #505e79;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>