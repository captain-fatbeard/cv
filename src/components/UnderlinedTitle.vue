<template>
    <h2>{{title}}</h2>
</template>

<script>
export default {
    name: 'underlined-title',
    props: {
        title: String
    }
}
</script>


<style lang="scss" scoped>
    h2{
        position: relative;
        &::after{
            content: "";
            position: absolute;
            left: -10px;
            right: 25%;
            bottom: -4px;
            height: 4px;
            background: linear-gradient(to left, rgba(125,185,232,0) 0%,rgba(234,46,78,1) 100%);
        }
    }
</style>
