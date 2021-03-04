<template>
  <div class="box">
      <div class="top">签到</div>
      <div class="bottom">
          <table>
              <tr>
                  <el-radio-group v-model="radio">
                    <td><el-radio :label="1"><span>出勤</span></el-radio></td>
                    <td><el-radio :label="2"><span>迟到</span></el-radio></td>
                    <td><el-radio :label="3"><span>请假</span></el-radio></td>
                    <td><el-radio :label="4"><span>旷课</span></el-radio></td>
                  </el-radio-group>


                  <!-- <td><input type="radio" name="sign">出勤</td>
                  <td><input type="radio" name="sign">迟到</td>
                  <td><input type="radio" name="sign">请假</td>
                  <td><input type="radio" name="sign">旷课</td>  -->
              </tr>
          </table>
          <el-input type="textarea" class="text" placeholder="备注" v-model="form.desc"></el-input>


          <!-- <textarea class="text" placeholder="备注"></textarea> -->
          <button class="btn">保存</button>
      </div>
  </div>
</template>

<script>
export default {
    data () {
      return {
        radio: 1,
        form: {
            desc: '',
            
        },
      };
    }
}
</script>

<style scoped>
    .box{
        width: 625px;
        height: 375px;
    }
    .box .top{
        background: #f5f6fa;
        height: 37px;
        font-size: 17px;
        line-height: 37px;
        padding-left: 12px;
        color: #000100;
        border-radius: 3px 3px 0 0;
    }
    .box .bottom{
        position: relative;
        height: 338px;
        border-radius: 0 0 3px 3px;
    }
    table tr{
        font-size: 17px;
        position: absolute;
        left: 130px;
        top: 67px;
        line-height: 17px;
    }
    table tr td{
        padding-right: 30px;
    }
    
    table tr td .el-radio span{
        font-size: 18px;
    }
    
    .box .bottom .text{
        width: 375px;
        /* height: 62px; */
        border: 1px solid #dee3e9;
        border-radius: 3px;
        position: absolute;
        right: 113px;
        bottom: 139px;
    }
    .box .bottom .btn{
        width: 150px;
        height: 40px;
        background: #4385f5;
        font-size: 17px;
        color: #fff6fe;
        border: none;
        cursor: pointer;
        border-radius: 3px;
        position: absolute;
        right: 25px;
        bottom: 12px;
    }
</style>