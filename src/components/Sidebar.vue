<script setup>
import "@/assets/Content/sb-admin.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faTasks,
    faCheckDouble,
    faMehBlank,
    faTicketAlt,
    faIdBadge,
    faUserFriends,
    faArrowCircleUp,
    faPrint,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
    faTasks,
    faCheckDouble,
    faMehBlank,
    faTicketAlt,
    faIdBadge,
    faUserFriends,
    faArrowCircleUp,
    faPrint
);


</script>
<script>
// 声明式渲染，可以提高开发效率
export default {
    data() {
        return {
            ulClass: "sidebar navbar-nav toggled",
            navItem: "nav-item",
            navLink: "nav-link",
            fontSize: "font-size: x-large"
        };
    },
};
</script>

<template>
    <ul :class="ulClass">
        <li id="pageShow" :class="[navItem, { 'active': $route.path === '/ShowListMain' }]">
            <router-link to="/ShowListMain" :class="navLink" :style="fontSize">
                <font-awesome-icon :icon="['fas', 'tasks']" />
                <span>检票场次管理</span>
            </router-link>
        </li>
        <li id="pageGroup" :class="[navItem, { 'active': $route.path === '/GroupManage' }]">
            <router-link to="/GroupManage" :class="navLink" :style="fontSize">
                <font-awesome-icon :icon="['fas', 'check-double']" />
                <span>检票群组管理</span>
            </router-link>
        </li>
        <li id="pageSecuritySync" :class="[navItem, { 'active': $route.path === '/SecuritySync' }]">
            <router-link to="/SecuritySync" :class="navLink" :style="fontSize">
                <font-awesome-icon :icon="['fas', 'meh-blank']" />
                <span>人脸回传查询</span>
            </router-link>
        </li>
        <li id="pageCheckRecords" :class="[navItem, { 'active': $route.path === '/CheckRecords' }]">
            <router-link to="/CheckRecords" :class="navLink" :style="fontSize">
                <font-awesome-icon :icon="['fas', 'ticket-alt']" />
                <span>检票明细查询</span>
            </router-link>
        </li>
        <li>
            <hr id="hrCode" style="width: 50px" />
        </li>
        <li id="pageCard" :class="[navItem, { 'active': $route.path === '/EmployeeCardtype' }]">
            <router-link to="/EmployeeCardtype" :class="navLink" :style="fontSize">
                <font-awesome-icon :icon="['fas', 'id-badge']" />
                <span>检证活动管理</span>
            </router-link>
        </li>
        <li id="pageCardGroup" :class="[navItem, { 'active': $route.path === '/CardGroupManage' }]">
            <router-link to="/CardGroupManage" :class="navLink" :style="fontSize">
                <font-awesome-icon :icon="['fas', 'user-friends']" />
                <span>检证群组管理</span>
            </router-link>
        </li>
        <li id="pageCheckCardRecords" :class="[navItem, { 'active': $route.path === '/CheckCardRecords' }]">
            <router-link to="/CheckCardRecords" :class="navLink" :style="fontSize">
                <font-awesome-icon :icon="['fas', 'ticket-alt']" />
                <span>检证明细查询</span>
            </router-link>
        </li>
        <li>
            <hr id="hrCard" style="width: 50px" />
        </li>
        <li id="pageDevice" :class="[navItem, { 'active': $route.path === '/DeviceManage' }]">
            <router-link to="/DeviceManage" :class="navLink" :style="fontSize">
                <font-awesome-icon :icon="['fas', 'arrow-circle-up']" />
                <span>设备管理</span>
            </router-link>
        </li>
        <li id="pageReceipt" :class="[navItem, { 'active': $route.path === '/ReceiptManage' }]">
            <router-link to="/ReceiptManage" :class="navLink" :style="fontSize">
                <font-awesome-icon :icon="['fas', 'print']" />
                <span>小票模板管理</span>
            </router-link>
        </li>
    </ul>
</template>

<style></style>