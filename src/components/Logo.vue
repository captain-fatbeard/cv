<template>
    <div class="logo">
        <h1>Jacob Juul Larsen</h1>
        <h2>Web Developer</h2>
    </div>
</template>

<style lang="scss" scoped>

    .logo {
        text-align: left;
        h1 {
            margin: 0;
            font-size: 25px;
            font-weight: 900;
            position: relative;
            line-height: 1;
            text-transform: uppercase;


            &::after{
                content: "";
                position: absolute;
                left: -10px;
                right: 25%;
                bottom: -2px;
                height: 2px;
                background: linear-gradient(to left, rgba(125,185,232,0) 0%,rgba(234,46,78,1) 100%);
            }
        }
        h2{
            text-transform: uppercase;
            margin: 0;
        }
    }

</style>

<script>
    export default {
        name: 'logo'
    }
</script>
