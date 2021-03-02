import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Class from '@/components/Class/list'
import Course from '@/components/Course/list'
import Attendance from '@/components/Attendance/list'
import ClassSummary from '@/components/ClassSummary/list'
import Students from '@/components/Students/list'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: Index,
      redirect: "/class",
      children: [
        //班级
        {
          path: '/class',
          name: 'class',
          component: Class,
        },
        //课程
        {
          path: '/course',
          name: 'course',
          component: Course,
        },
        //考勤
        {
          path: '/attendance',
          name: 'attendance',
          component: Attendance,
        },
        //课时
        {
          path: '/classSummary',
          name: 'classSummary',
          component: ClassSummary,
        },
        //学员
        {
          path: '/students',
          name: 'students',
          component: Students,
        },

      ]
    },

  ]
})
