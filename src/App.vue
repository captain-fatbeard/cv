<template>
    <div id="app">
        <!-- <div id="nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>
        </div>-->
        <Header/>
        <router-view/>
    </div>
</template>

<script>
    import Header from "@/components/layout/Header";
    export default {
        components: {
            Header
        }
    };
</script>


<style lang="scss">
    @import url("https://fonts.googleapis.com/css?family=Nunito");

    html,
    body {
        background-color: #1d1d1d;
        color: #fff;
        font-family: "Nunito", sans-serif;
        font-weight: 200;
        height: 100vh;
        margin: 0;
        width: 100%;
    }

    .full-height {
        height: 100vh;
    }

    .position-ref {
        position: relative;
    }

    .flex-center {
        max-width: 100%;
        align-items: center;
        display: flex;
        justify-content: center;
    }
</style>
