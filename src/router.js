import { createRouter, createWebHistory } from 'vue-router'

// 引入你的页面组件
import DefaultPage from './components/Default.vue'
import ShowListMainPage from './components/ShowListMain.vue'
import GroupManagePage from './components/GroupManage.vue'
import SecuritySyncPage from './components/SecuritySync.vue'
import CheckRecordsPage from './components/CheckRecords.vue'
import EmployeeCardtypePage from './components/EmployeeCardtype.vue'
import CardGroupManagePage from './components/CardGroupManage.vue'
import CheckCardRecordsPage from './components/CheckCardRecords.vue'
import DeviceManagePage from './components/DeviceManage.vue'
import ReceiptManagePage from './components/ReceiptManage.vue'
// ...

const titleSuffix="猫眼检验服务器" 

const routes = [
  { path: '/', component: DefaultPage,meta: { title: "主页-"+titleSuffix } },
  { path: '/ShowListMain', component: ShowListMainPage,meta: { title: "检票场次管理-"+titleSuffix  } },
  { path: '/GroupManage', component: GroupManagePage,meta: { title: "检票群组管理-"+titleSuffix  } },
  { path: '/SecuritySync', component: SecuritySyncPage,meta: { title: "人脸回传查询-"+titleSuffix  } },
  { path: '/CheckRecords', component: CheckRecordsPage,meta: { title: "检票明细查询-"+titleSuffix  } },
  { path: '/EmployeeCardtype', component: EmployeeCardtypePage,meta: { title: "检证活动管理-"+titleSuffix  } },
  { path: '/CardGroupManage', component: CardGroupManagePage,meta: { title: "检证群组管理-"+titleSuffix  } },
  { path: '/CheckCardRecords', component: CheckCardRecordsPage ,meta: { title: "检证明细查询-"+titleSuffix  }},
  { path: '/DeviceManage', component: DeviceManagePage,meta: { title: "设备管理-"+titleSuffix  } },
  { path: '/ReceiptManage', component: ReceiptManagePage ,meta: { title: "小票模板管理-"+titleSuffix  }},
  // ...
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {//beforeEach是router的钩子函数，在进入路由前执行

  if (to.meta.title) {//判断是否有标题

    document.title = to.meta.title

  }

  next()//执行进入路由，如果不写就不会进入目标页

})

export default router
