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

        <div class="box group">
            <tr>
              <td>
                <div class="students">学员
                  <span class=" iconfont icon-tianjiarenyuan">
                    <a href="javascript:;" class="addstudents">添加学员</a></span> 
                    </div>
              </td>
               <td>
                 <div>痢菌净</div> <div>痢菌净</div> <div>痢菌净</div> <div>痢菌净</div>
               </td>
            </tr>
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
  margin: 20px;
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

/* 引入精灵图 */
.elf {
  width: 24px;
  height: 24px;
  background-image: url("../../assets/img/ico.png");
}
.userCap {
  display: inline-block;
  background-position: -2px -630px;
}
.box .user > div {
  margin-top: 30px;
  margin-right: 100px;
  float: left;
}
/* 引入精灵图 */

.box tr td{
  width: 100%;
  float: left;
}
.box tr td .students{
    font-size: 20px;
    margin-top: 26px;
}
.box tr td .students span{
  margin-left: 30px;
}
.box tr td .students a{
  margin-left: 7px;
  text-decoration:none;
  color: #4281fc;
  font-weight: normal;
}
.box tr td:nth-of-type(2) div{
  float: left;
    background: url('../../assets/img/ico.png');
  background-position: 0px -620px;
  margin: 27px 100px 20px 10px;
  padding-left: 32px;
}
.box tr td:nth-of-type(2){
  height: 57px;
  line-height: 57px;

}
@font-face {font-family: "iconfont";
    src: url('//at.alicdn.com/t/font_2397874_f8g10mwklol.eot?t=1614758616054'); /* IE9 */
    src: url('//at.alicdn.com/t/font_2397874_f8g10mwklol.eot?t=1614758616054#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMMAAsAAAAABrgAAAK9AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqBPIFQATYCJAMICwYABCAFhG0HOBv+BVGUrMkO2Y/D2D1SYi3a4ITDp+0RE/PHJoKn/dJ5+/cwBCoFAAksAUnWhWWJhCO0VXFRlYCadWtv+/00JRY258uyqh2wQv8g7wPnp3R+Tk+p+bFws5u8dpsW7XymAw2y5sc9vkZxikWS/cXhtHneBTK/wbnMNTDqAoy3BjrWoMgKJPSG6VXDpYQBPE6gbqKxyoaLu0doy/C4QFwMPAXtnFeWw0RVKNcszeKWkmq6nN7hpvp+/LU0qiSlAi7ZevrcwvrHfJJSjDRGHBQIPgJaXUKB+UAmdtZGN6uJEF9Tj9ZNBfsqDH7MbzSEXuxVI8K/Duc3gz7IvSce499qfgIZ9q4ADo66npzq62qO/joY7bOWqd9rY4ea3H86DiCarg5V0+XHZ/f7a+fIven9t7Pp/bSHio8W2dr84d5VucXKNyN5ojOmTmu7k7btU5e238kxTm+f1nHnLi0Z/5rMg9IUhCWuh/2bNg6PF8vHinghivX/f5v7U1nxIweT6Q8VGqgOBmQ7nA61IjlgDUBjJCuG/+pvLGr9Hx8ZrfhXbcrg+ynzrvj97KB6blvwD3k9a3IswIp0NVxkS1Zk3BKwoI4G7Oz0O1bZc8PmUM3xQkgqJkChajoyY+dDSZPlUFa1GurmuVzdpAuriVzDXC8AQrtXSFqNQaHdGzJjf6Ck1x+UtUcBdbuja8smM+Ncdz2TErKojxiYLHXUIF1deE/eNlacFSjCM3EZBHCxcHExcUkp8Rwzyp23FHHoOEvwApxGcZxhzllIRqa+SL6aLTpd96apyRLoWo8RRRALaUcoYGRSTjQW3dLn7xHPVkzhlqoR8zPCSkH/aGFq3gN5KU17Vd3LK6Udz5IQDnJYJoEuwCASi2VQXj8oRAwx5Y8I51ZmpJ7rK52uL0++bhPUYVUKUlJovRSoNGSVTOlxq1IAAAAA') format('woff2'),
    url('//at.alicdn.com/t/font_2397874_f8g10mwklol.woff?t=1614758616054') format('woff'),
    url('//at.alicdn.com/t/font_2397874_f8g10mwklol.ttf?t=1614758616054') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('//at.alicdn.com/t/font_2397874_f8g10mwklol.svg?t=1614758616054#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .icon-tianjiarenyuan:before {
        content: "\e62c";
        color: #4281fc;
    }
</style>