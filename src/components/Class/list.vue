<template>
  <div>
    <!-- 按钮 -->
    <el-button-group>
      <button class="dele">删除</button>
      <button class="add-class" @click="addclass = true">添加班级</button>
      <el-dialog title="增加班级" width="920px" :visible.sync="addclass">
        <addClass></addClass>
        <!-- 添加班级组件 -->
      </el-dialog>
      <div class="sele">
        <el-dropdown>
          <span class="el-dropdown-link">
            课程<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <input type="search" />
      </div>
    </el-button-group>

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
import addClass from "./addClass.vue";
import classSched from "./classScheduling.vue";
export default {
  components: {
    addClass,
    classSched,
  },
  data() {
    return {
      tableData: [
        {
          date: "架子鼓基础班2101",
          name: "架子鼓课",
          address: "王老师",
          man: "0人",
          ke: "0课时",
          yi: "23",
          shang: 0,
        },
        {
          date: "架子鼓基础班2102",
          name: "架子鼓课",
          address: "王老师",
          man: "0人",
          ke: "0课时",
          yi: "23",
          shang: 0,
        },
        {
          date: "架子鼓基础班2103",
          name: "架子鼓课",
          address: "王老师",
          man: "0人",
          ke: "0课时",
          yi: "23",
          shang: 0,
        },
        {
          date: "钢琴基础班2",
          name: "舞蹈课",
          address: "王老师",
          man: "0人",
          ke: "0课时",
          yi: "23",
          shang: 0,
        },
        {
          date: "基础班",
          name: "少儿英语课",
          address: "王老师",
          man: "0人",
          ke: "0课时",
          yi: "23",
          shang: 0,
        },
        {
          date: "架子鼓课班",
          name: "架子鼓课",
          address: "王老师",
          man: "0人",
          ke: "100课时",
          yi: "23",
          shang: 0,
        },
      ],
      addclass: false,
      classSched:false,
      index:''
    };
  },
  methods: {
    classScheduling(index) {  /* 排课 */
      this.classSched  = true
      this.index = this.tableData[index].date
    },
  },
};
</script>

<style >
.el-dialog{
  background-color: #fcfcfc;
}
.has-gutter {
  background-color: #f5f6fa;
}
.table {
  padding: 24px 0px 0px 28px;
}
.table .el-table__row > td:first-of-type {
  background: url("../../assets/img/ico.png") no-repeat;
  background-size: 180px;
  background-position: -70px -327px;
}

.el-table__row td:first-of-type > .cell {
  text-align: left;
  padding-left: 45px;
  color: black;
}
.has-gutter th:first-of-type > .cell {
  text-align: left;
}
.cell {
  text-align: center;
  font-size: 16px;
  color: black;
}
.el-table__header-wrapper th {
  background-color: #f5f6fa;
  font-weight: normal;
  color: black;
}

.el-button-group {
  float: left;
  height: 77px;
  width: 100%;
  border: #c8ccd5 solid 1px;
  background-color: #f5f6fa;
}
.el-button-group .dele {
  width: 106px;
  height: 43px;
  padding-left: 45px;
  margin: 17px 0px 15px 30px;
  border: #c8ccd5 solid 1px;
  font-size: 19px;
  background: url("../../assets/img/ico.png") no-repeat;
  background-position: -130px -369px;
  border-radius: 5px;
}
.el-button-group .dele:hover {
  background-position: -130px -742px;
  background-color: #d6edf7;
}
.add-class:hover {
  background-position: -130px -693px;
  background-color: #d6edf7;
}
.add-class {
  width: 148px !important;
  height: 43px;
  border: #c8ccd5 solid 1px;
  padding-left: 49px;
  font-size: 19px;
  margin: 17px 15px 15px 15px;
  background: url("../../assets/img/ico.png") no-repeat;
  background-position: -130px -454px;
  border-radius: 5px;
}

/* 下来菜单搜索框 */
.el-dropdown-link {
  cursor: pointer;
  margin: 0 20px 0px 30px;
  font-size: 19px;
}

.sele {
  position: absolute;
  left: 450px;
  top: 78px;
  color: #a0a3aa;
  border: 1px solid #dee3e9;
  height: 43px !important;
  width: 510px;
  line-height: 43px;
  background-color: #ffffff;
}

.sele input {
  width: 390px;
  height: 30px;
  border: 0px;
  background: url("../../assets/img/ico.png") no-repeat;
  background-position: 260px -436px;
}

/* 排课 */
.class-Seched {
  display: none;
  width: 200px;
  cursor: pointer;
}
.el-table__row:hover .class-Seched {
  display: inline-block;
  text-align: left;
  color: #1890ff;
}

.el-dialog__title{
  font-size: 20px;
}
</style>