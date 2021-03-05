<template>
  <div>
    <table>
      <tr>
        <td>所选课程：</td>
        <td>
          <el-select v-model="addList.courseid" placeholder="请选择课程">
            <el-option
              v-for="(item, index) in courseList"
              :label="item.name"
              :key="index.id"
              :value="item.id"
              >{{ item.name }}</el-option
            >
          </el-select>
        </td>
      </tr>
      <tr>
        <td>班级名称：</td>
        <td>
          <el-input v-model="addList.name" style="width: 400px"></el-input>
        </td>
      </tr>
      <tr>
        <td>计划课时：</td>
        <td>
          <el-input
            style="width: 400px"
            v-model="addList.coursecounts"
          ></el-input
          >&nbsp;&nbsp;&nbsp;课时
        </td>
      </tr>
      <tr>
        <td>开始日期：</td>
        <td>
          <div class="block">
            <el-date-picker
              v-model="addList.startdate"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </div>
        </td>
      </tr>
      <tr>
        <td>结束日期：</td>
        <td>
          <div class="block">
            <el-date-picker
              v-model="addList.enddate"
              value-format="yyyy-MM-dd"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </div>
        </td>
      </tr>
    </table>
    <div class="bottom"></div>
    <el-button type="primary preservation" @click="addclass">报存</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      addList: {
        id: 0,
        courseid: "",
        coursename: "",
        name: "",
        startdate: "",
        enddate: "",
        coursecounts: 0,
        schcourses: 0,
      },
      courseList: [],
    };
  },

  created() {
    //获取课程

    this.$http.get(
      "/api/courses/list",
      null,
      (success) => {
        this.courseList = success.data.list;
        console.log(this.courseList);
      },
      (fail) => {
        console.log(fail);
      }
    );
  },
  methods: {
    addclass() {
      let that = this;
      //添加班级
      this.$http.post(
        "/api/classes/add",
        this.addList,
        (success) => {
          console.log(success);
          if (this.addList.id) {
            this.$message({
              message: "恭喜你，班级修改成功",
              type: "success",
            });
          }else{
            this.$message({
              message: "恭喜你，班级添加成功",
              type: "success",
            });
          }
          this.addList = {};
          that.$emit("addClassChild"); //回到函数
        },
        (fail) => {
          this.$message.error("班级添加失败");
          console.log(fail);
        }
      );
    },
  },
};
</script>

<style scoped>
table {
  width: 610px;
  height: 330px;
  font-size: 19px;
  margin-left: 44px;
}
.bottom {
  width: 100%;
  border-bottom: 1px solid #e9e9e9;
  margin-top: 70px;
}
.preservation {
  width: 150px;
  margin-left: 650px;
  margin-top: 20px;
}
</style>