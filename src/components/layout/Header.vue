<template>
    <header class="header">
        <div class="nav">

            <scrollactive>
                <a href="#bio" class="scrollactive-item" v-scroll-to="'#bio'">about</a>
                <a href="#skills" class="scrollactive-item" v-scroll-to="'#skills'">skills</a>
                <a href="#work" class="scrollactive-item" v-scroll-to="'#work'">work</a>
                <a href="#contact" class="scrollactive-item" v-scroll-to="'#contact'">contact</a>
            </scrollactive>
        </div>
    </header>
</template>


<script>
    export default {
        name: "Header"
    };
</script>


<style lang="scss" scoped>
    header{
        background-color: $_color_bg_header;
        position: fixed;
        width: 100%;
        z-index: 1;

        .nav{
            padding: 5px 0px 5px 0px;
            float: right;

            border-left: 2px solid $_color_primery;
            border-bottom: 2px solid $_color_primery;

            a{
                background: none;
                cursor: pointer;
                border: none;
                color: $_color_text;
                text-transform: uppercase;
                text-decoration: none;
                padding: 5px 10px;
                transition: all 0.5s ease;

                &:hover {
                    background-color: $_color_bg_footer;
                    color: $_color_bg_body;
                }

                &.is-active{
                    background-color: $_color_bg_footer;
                    color: $_color_bg_body;
                }
            }
        }
    }
</style>

