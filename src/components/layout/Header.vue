<template>
    <header class="header">
        <h1>app navn og logo</h1>
        <div id="nav">
            <button>graph section</button>
        </div>
    </header>
</template>


<script>
    export default {
        name: "Header"
    };
</script>

<style scoped>
    header{
        position: absolute;
        width: 100%;

    }

    button{
        background: none;
        cursor: pointer;
        border: none;
        color: white;
        text-transform: uppercase;
    }
</style>

