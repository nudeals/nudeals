<template>
    <div class="toolbar">
        <div class="toolbar-item" :onclick="'location.href=\'' + item.url + '\''" v-for="(item, index) in toolbarData" :key="index" style="cursor: pointer;">
            <img :src="item.image">
            <span>{{item.text}}</span>
        </div>        
    </div>
</template>

<script>
    export default {
        name: "Toolbar",
        props: ["toolbarData"]        
    }
</script>

<style lang="scss" scoped>

</style>
