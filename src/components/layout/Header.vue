<template>
    <header class="header">
        <div class="nav">
            <button v-scroll-to="'#graph'">graph section</button>
            <button v-scroll-to="'#timeline'">timeline</button>
            <button v-scroll-to="'#contact'">contact</button>
        </div>
    </header>
</template>


<script>
    // import Chart from "chart.js";

    export default {
        name: "Header"
    };
</script>


<style lang="scss" scoped>
    header{
        position: absolute;
        width: 100%;

        .nav{
            padding: 10px;
            float: right;
            button{
                background: none;
                cursor: pointer;
                border: none;
                color: $_color_text;
                text-transform: uppercase;
            }
        }

    }

</style>

