<script>
// 声明式渲染，可以提高开发效率
export default {
  data() {
    return {
        btnClass:"btn btn-default",
        btnStyle:"padding: 0px",
    };
  },
};
</script>

<template>
    <div class="container-fluid">
        <div class="jumbotron">
            <h1>猫眼本地检验服务系统</h1>
            <br />
            <p class="lead">支持演出场次下载到本地，闸机、PDA离线检票，实时检票数据监控等功能。</p>
            <p class="lead">支持工作证下载到本地，闸机、PDA离线检证等功能。</p>
        </div>
    
        <div class="row" id="dvCode">
            <div class="col-md-2" style="margin-left: 30px">
                <router-link to="ShowListMain" :class="btnClass" :style="btnStyle">
                    <h2>检票场次管理 &raquo;</h2>
                </router-link>
                <p>
                    场次新增、下载、回传、数据监控。
                </p>
            </div>
            <div class="col-md-2">
                <router-link to="GroupManage" :class="btnClass" :style="btnStyle">
                    <h2>检票群组管理 &raquo;</h2>
                </router-link>
    
                <p>
                    检票场次、设备分配及管理。
                </p>
            </div>
            <div class="col-md-2">
                <router-link to="SecuritySync" :class="btnClass" :style="btnStyle">
                    <h2>人脸回传查询 &raquo;</h2>
                </router-link>
                <p>
                    服务器人脸回传、公安回传状态。
                </p>
            </div>
            <div class="col-md-2">
                <router-link to="CheckRecords" :class="btnClass" :style="btnStyle">
                    <h2>检票明细查询 &raquo;</h2>
                </router-link>
                <p>
                    检票流水记录。
                </p>
            </div>
        </div>
    
        <br />
        <div class="row" id="dvCard">
            <div class="col-md-2" style="margin-left: 30px">
                <router-link to="EmployeeCardtype" :class="btnClass" :style="btnStyle">
                    <h2>检证活动管理 &raquo;</h2>
                </router-link>
                <p>
                    工作证活动组新增、下载、设置。
                </p>
            </div>
            <div class="col-md-2">
                <router-link to="CardGroupManage" :class="btnClass" :style="btnStyle">
                    <h2>检证群组管理 &raquo;</h2>
                </router-link>
                <p>
                    检证工作组、设备分配及管理。
                </p>
            </div>
            <div class="col-md-2">
                <router-link to="CheckCardRecords" :class="btnClass" :style="btnStyle">
                    <h2>检证明细查询 &raquo;</h2>
                </router-link>
                <p>
                    检证流水记录。
                </p>
            </div>
        </div>
    
        <br />
        <div class="row" id="dvDevice">
            <div class="col-md-2" style="margin-left: 30px">
                <router-link to="DeviceManage" :class="btnClass" :style="btnStyle">
                    <h2>设备管理 &raquo;</h2>
                </router-link>
                <p>
                    闸机、PDA等设备控制及管理。
                </p>
            </div>
            <div class="col-md-2">
                <router-link to="ReceiptManage" :class="btnClass" :style="btnStyle">
                    <h2>小票模板管理 &raquo;</h2>
                </router-link>
                <p>
                    闸机打印小票模板内容设置。
                </p>
            </div>
        </div>
    </div>
</template>
