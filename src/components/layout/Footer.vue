<template>
    <footer id="contact">
        <h2>THANKS!</h2>
        <h4>Want to chat about something?</h4>
        <a><img class="icon facebook" src="@/assets/images/icon-facebook.svg"></a>
        <a href="https://www.linkedin.com/in/larsenjacob/" target="_blank"><img class="icon linkedin" src="@/assets/images/icon-linkedin.svg"></a>
        <a href="mailto:jacoblarsen86@live.com" target="_blank"><img class="icon email" src="@/assets/images/icon-envelope.svg"></a>
        <p>© Jacob Juul Larsen</p>
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
        color: $_color_bg_body;
        a{
            margin: 10px;
            display: inline-block;
            color: $_color_bg_body;
            font-size: 20px;
            img{
                height: 30px;
            }
        }
    }
</style>
