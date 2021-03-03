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
          <router-view></router-view>
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
          path: "/class",
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
          path: "/course",
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
          path: "/attendance",
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
          path: "/classSummary",
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
          path: "/students",
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
      isChange: "",
    };
  },
  methods: {
    addClass(val) {
      this.isChange = val;
      this.$router.push({
        path: this.navList[val].path,
      });
    },
  },

  created() {
    // this.$route.path  获取当前路由
    for (var i = 0; i < this.navList.length; i++) {
      if (this.navList[i].path == this.$route.path) {
        this.isChange = i;
      }
    }
  },
};
</script>

<style scoped>
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

<<<<<<< HEAD
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  padding: 0px;
  float: left;
}

body > .el-container {
  margin-bottom: 40px;
}


=======
body > .el-container {
  margin-bottom: 40px;
}
.el-main{
  padding: 0;
}
>>>>>>> d687b8aa644290ff633763f5bebd510dad32f0e9
</style>