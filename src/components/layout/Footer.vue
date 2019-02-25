<template>
    <footer id="contact">
        <h2>THANKS!</h2>
        <h4>Want to chat about something?</h4>

        <ul>
            <li>fb</li>
            <li>li</li>
            <li>email</li>
        </ul>

        <p>Made with vuejs - © Jacob Juul Larsen</p>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    };
</script>

<style lang="scss" scoped>
    footer{
        background-color: $_color_bg_footer;
        text-align: center;
        padding: $global_padding;
        ul{
            list-style: none;
            li{
                display: inline;
                margin: 10px;
            }
        }
    }
</style>
