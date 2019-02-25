<template>
    <header class="header">
        <div class="nav">
            <button v-scroll-to="'#skills'">skills</button>
            <button v-scroll-to="'#work'">work</button>
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
        background-color: $_color_bg_header;
        position: fixed;
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

