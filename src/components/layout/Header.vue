<template>
    <header class="header">
        <div class="nav">
            <button>graph section</button>
            <button>timeline</button>
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
        position: absolute;
        width: 100%;

        .nav{
            padding: 10px;
            float: right;
            button{
                background: none;
                cursor: pointer;
                border: none;
                color: white;
                text-transform: uppercase;
            }
        }

    }

</style>

