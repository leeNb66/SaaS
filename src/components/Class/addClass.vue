<template>
  <div>
    <form action="">
      <table>
        <tr>
          <td>所选课程：</td>
          <td>
            <el-select value=""></el-select>
          </td>
        </tr>
        <tr>
          <td>班级名称：</td>
          <td>
            <el-input style="width: 400px"></el-input>
          </td>
        </tr>
        <tr>
          <td>计划课时：</td>
          <td><el-input style="width: 400px" value="0"></el-input>&nbsp;&nbsp;&nbsp;课时</td>
        </tr>
        <tr>
          <td>开始日期：</td>
          <td>
            <div class="block">
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
            </div>
          </td>
        </tr>
        <tr>
          <td>结束日期：</td>
          <td>
            <div class="block">
              <el-date-picker
                v-model="value2"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
            </div>
          </td>
        </tr>
      </table>
      <div class="bottom"></div>
      <el-button type="primary preservation">报存</el-button>
    </form>
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
      value1:'',
      value2:''
    };
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
.bottom{
    width: 850px;
    border-bottom: 1px solid #e9e9e9;
    margin-top: 70px;
    margin-left: -18px;
}
.preservation{
    width: 150px;
    margin-left: 650px;
    margin-top: 20px;
}

</style>