<script setup>

</script>

<template>
    
    <nav class="navbar navbar-expand navbar-dark bg-primary static-top">
        <router-link id="defaultRouterLink" to="/" class="navbar-brand mr-1"  style="font-weight: 900;">
            <img src="../assets/maoyan_main.png" height="32" style="margin-right: 5px; vertical-align: top" />
            范特西·猫眼检验服务器
        </router-link>

        <div style="flex-direction: row; margin-right: auto!important"></div>
        <label id="lbVersion" style="color: #fff; font-weight: 500; font-size: small;"></label>
        <button ID="btnReload" OnClick="BtnReload_Click" Style="display: none;" />
        <input id="reload"  type="button" value="&#x21bb;" onclick="Reload();" style="margin-right: .25rem!important; color: #fff; font-weight: 500; font-size: small;border:none;background-color:#DD403B!important;margin-bottom:8px;"/>
    </nav>

</template>



<style>
#defaultRouterLink:hover {
    background-color: transparent;
  }
</style>