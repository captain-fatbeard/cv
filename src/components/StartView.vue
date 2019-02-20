<template>
    <underlined-title title="artefact"/>
    <!-- <h1>{{ title }}</h1> -->
</template>


<script>
import UnderlinedTitle from '@/components/UnderlinedTitle';

export default {
    name: 'start-view',
    components: {
        UnderlinedTitle
    },
    props: {
        title: String
    }
}
</script>

<style lang="scss" scoped>
    h2{
        text-transform: uppercase;
    }
</style>