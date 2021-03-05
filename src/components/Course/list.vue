<template>
  <div>
    <!-- 按钮 -->
   <div class="buttongrounp">
            <div class="introduction">课时汇总</div>
            <div class="brief"></div>
            <div class="brief-s"></div>
            <button class="add-class" @click="addclass = true">添加班级</button>
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

    <el-table class="table" :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="班级名称" width="400px">
      </el-table-column>
      <el-table-column prop="name" label="课程" width="200px">
      </el-table-column>
      <el-table-column prop="address" label="老师" width="200px">
      </el-table-column>
      <el-table-column prop="man" label="人数" width="125px"> </el-table-column>
      <el-table-column prop="ke" label="计划课时" width="125px">
      </el-table-column>
      <el-table-column prop="yi" label="已排课时" width="125px">
      </el-table-column>
      <el-table-column prop="shang" label="已上课时" width="125px">
      </el-table-column>
      <el-table-column width="125px">
        <div slot-scope="scope" class="class-Seched">
          <span @click="classScheduling(scope.$index)">排课</span>
        </div>
      </el-table-column>
    </el-table>

    <el-dialog   :title="index"  width="80%"  class="dialog"  center :visible.sync="classSched">
      <classSched></classSched>
    </el-dialog>
  </div>
</template>



<script>
export default {

}
</script>

<style lang="less" scoped>
  @import '../../assets/less/indexpublic';
</style>