<template>
  <div>
    <form action>
      <table>
        <div class="group">
          <tr class="top">
            <td>
              <span>主讲老师</span>
              <span
                style="float: right;  cursor: pointer"
                @click="changeAddteacher"
                :style="addstatus == true ? 'color:#3e9eff' : ''"
                >添加助教</span
              >
            </td>
            <td
              :class="addstatus == true ? `clickaddHelpteacher` : `addchange`"
            >
              助教老师
            </td>
            <td>教室</td>
            <td>单节课扣学员课时</td>
          </tr>
          <tr class="top">
            <td>
              <el-select value=""></el-select>
            </td>
            <td
              :class="addstatus == true ? `clickaddHelpteacher` : `addchange`"
            >
              <el-select value=""></el-select>
            </td>
            <td>
              <el-select value=""></el-select>
            </td>
            <td>
              <el-input></el-input>
            </td>
          </tr>
        </div>

        <!-- tab选项卡 -->
        <div class="group">
          <tr>
            <div class="middle">
              <td class="tabTitle">
                <template v-for="(item, index) in tabList">
                  <span
                    :key="index.id"
                    @click="changetab(index)"
                    :class="{ changetab: checktab == index }"
                    >{{ item.name }}</span
                  >
                </template>
              </td>
            </div>
          </tr>
          <div v-if="isschedule == 0">
            <tr>
              <div class="middle center">
                <td>开课日期</td>
              </div>
            </tr>
            <tr>
              <div class="middle checkcontont">
                <td>
                  <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期"
                  >
                  </el-date-picker>
                </td>
              </div>
            </tr>
            <tr>
              <td>上课时间</td>
            </tr>
            <tr>
              <td class="time">
                <el-time-select
                  placeholder="起始时间"
                  v-model="startTime"
                  :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30',
                  }"
                >
                </el-time-select>
                -
                <el-time-select
                  placeholder="结束时间"
                  v-model="endTime"
                  :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30',
                    minTime: startTime,
                  }"
                >
                </el-time-select>
                <span class="iconfont icon-jiahao add"></span>
              </td>
            </tr>
          </div>
          <div v-else>
            <tr>
              <div class="middle center">
                <td>开课日期</td>
                <td>结束日期</td>
                <td>排课总数</td>
              </div>
            </tr>
            <tr>
              <div class="middle checkcontont">
                <td>
                  <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期"
                  >
                  </el-date-picker>
                </td>
                <td>
                  <input type="radio" name="time" />按课节
                  <input type="radio" name="time" />按日期
                </td>
                <td>
                  <el-input value="0"></el-input>
                </td>
              </div>
            </tr>
            <tr>
              <td>上课时间</td>
            </tr>
            <tr>
              <td class="time">
                <el-time-select
                  placeholder="起始时间"
                  v-model="startTime"
                  :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30',
                  }"
                >
                </el-time-select>
                -
                <el-time-select
                  placeholder="结束时间"
                  v-model="endTime"
                  :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30',
                    minTime: startTime,
                  }"
                >
                </el-time-select>
                <span class="iconfont icon-jiahao add"></span>
              </td>
            </tr>
          </div>
        </div>
      </table>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addstatus: false,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      value1: "",
      checktab: "",
      tabList: [
        {
          name: "单次排课",
        },
        {
          name: "批量排课",
        },
      ],
      startTime: "",
      endTime: "",
      isschedule: 0, //是单选排课换是批量排课
    };
  },
  methods: {
    changeAddteacher() {
      if (this.addstatus) {
        this.addstatus = false;
      } else {
        this.addstatus = true;
      }
    },

    changetab(index) {
      this.checktab = index;
      this.isschedule = index;
    },
  },
};
</script>

<style   scoped>
table {
  font-size: 19px;
  width: 100%;
}
.group {
  padding: 20px;
  background-color: #fff;
}

.top td > .el-select {
  margin: 11px 0px;
}

.top td {
  padding-right: 40px;
}

.addchange {
  display: none;
}
.clickaddHelpteacher {
  display: block;
}

/* 中间 */
.middle {
  margin-top: 20px;
}

.middle .tabTitle {
  width: 220px;
  cursor: pointer;
}
.changetab {
  /* 选中tab */
  height: 40px;
  border-bottom: 2px solid #3e9eff;
  display: inline-block;
}
.middle:first-of-type td span:nth-of-type(2) {
  float: right;
}
.center td {
  padding-right: 180px;
}

.checkcontont td {
  width: 230px;
  padding-right: 25px;
  padding-bottom: 30px;
}

.time {
  padding-top: 14px;
}
@font-face {
  font-family: "iconfont";
  src: url("//at.alicdn.com/t/font_2398736_lqb30kxkd9.eot?t=1614769952777"); /* IE9 */
  src: url("//at.alicdn.com/t/font_2398736_lqb30kxkd9.eot?t=1614769952777#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */
      url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAALAAAsAAAAABqAAAAJyAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqBLIEoATYCJAMICwYABCAFhG0HMBvOBRHVkyFkH6cr4pnirYxU/Dse6Od6/9wkC49QlZFULbNqFTCNb4VD/gRqNzdD16gIxZKcB//Ld6RjhQv55fNcjltAgcwPlMuaw27wUS/AeGtAe2ObrEhib5hevqCBPE9AvlpaCAMGjZggK6GnBYQVSxfPlc0lJRJWyQrSNWsTYb+UbLQjeoZ94ffDd+1ClkgqpmljFg1coM+naWZCvD633ox4g/Xz+cE2EaMFEsKE2uIoscD4sfxioh77Igc+TcvlfLew1z9PSNPEQlADKu9J5dS3SoxAArs7oMeoh5MkpZWFq9KlmVWlNx/WSB961LHszpPamcOPl6gD5zdcKCgIBy/sOidZf3bn+erFsSwMVE7YWRnr9r7VDD2p49NxM+q8jGZEL+ugef/Xf/3borqLyl69KRlQZ0AplPv9S1o3L+lQq/2bE1HJgFq539EH5NYn4g0CAv3/b1BvdkmPv7MFCXixcD9gdb8w2fOEAv9L1bMqERptiY6sRKFIh0xcBCTlI0dHy70aa626OX+QzakYIhk1EctqwEp4LZBSoAPSsnojX3ODNxeosFIsJHloZgtAUOoKIsWeIFbqOSvhvURKtZ9IKw0x2HyTQsWeBRqFpPozakEH5g/JUvfWIyoi3zC8q+asJhS8kK+UgWWci5UDO/IcC65PWEU8eKYGO7gMayU4mTJaGaPIuU2Tr3vTaKkNSn8MaQI5wPgDiUU679cXqvT5GxS8VRq3MHLpF8QuqXewGM09WIex92LcyzWXj2AlhAc8Rhqwg1Goqgg460dlyBKjOCJ/2kymlu9rHNc3t6/bAPm0LQpmWCy9LOmoaRgAAAA=")
      format("woff2"),
    url("//at.alicdn.com/t/font_2398736_lqb30kxkd9.woff?t=1614769952777")
      format("woff"),
    url("//at.alicdn.com/t/font_2398736_lqb30kxkd9.ttf?t=1614769952777")
      format("truetype"),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url("//at.alicdn.com/t/font_2398736_lqb30kxkd9.svg?t=1614769952777#iconfont")
      format("svg"); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 37px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-jiahao:before {
  content: "\e65a";
  color: #d0d0d0;
}

.add {
  position: relative;
  top: 10px;
}
</style>