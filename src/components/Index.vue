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
            <template v-for="(item, index) in navList">
              <li
                :key="index.id"
                ref="changeInit"
                @click="addClass(index)"
                :class="index == isChange ? 'changeClass' : ''"
                :style="index == isChange ? item.checked : item.unchecked"
              >
                {{ item.meta.name }}
              </li>
            </template>
          </ul>
        </el-aside>
        <el-main>
          <router-view>路由出口</router-view>
        </el-main>
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
          checked: {
            backgroundPosition: "20px -290px",
          },
          unchecked: {
            backgroundPosition: "20px -458px",
          },
        },
        {
          path: "",
          meta: {
            name: "课程管理",
          },
          checked: {
            backgroundPosition: "20px 7px",
          },
          unchecked: {
            backgroundPosition: "20px -150px",
          },
        },
        {
          path: "",
          meta: {
            name: "考勤管理",
          },
          checked: {
            backgroundPosition: "20px -630px",
          },
          unchecked: {
            backgroundPosition: "20px -788px",
          },
        },
        {
          path: "",
          meta: {
            name: "课时汇总",
          },
          checked: {
            backgroundPosition: "-211px 12px",
          },
          unchecked: {
            backgroundPosition: "-211px -146px",
          },
        },
        {
          path: "",
          meta: {
            name: "学员管理",
          },
          checked: {
            backgroundPosition: "31px -1190px",
          },
          unchecked: {
            backgroundPosition: "-112px -1190px",
          },
        },
      ],
      isChange: 0,
    };
  },
  methods: {
    addClass(val) {
      this.isChange = val;
    },
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
.ul {
  padding-bottom: 38px;
}
.changeClass {
  color: #66aff4;
  background-color: #e8ebf0;
  border-radius: 10px;
}
li {
  background: url("../assets/img/ico.png") no-repeat;
  background-size: 300px;
  height: 93px;
  margin: 17px 7px;
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