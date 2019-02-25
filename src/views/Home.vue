<template>
    <div>
        <section class="flex-center position-rel full-height">
            <start-view />
        </section>
        <section class="flex-center position-rel full-height">
            <div>
                <underlined-title title="timeline" />
                <timeline />
            </div>
        </section>
        <section class="flex-center position-rel full-height">
            <div>
                <underlined-title title="Graph" />
                <graph />
            </div>
        </section>
    </div>
</template>

<script>
    // @ is an alias to /src
    import StartView from '@/components/StartView';
    import Timeline from '@/components/Timeline';
    import Graph from '@/components/Graph';
    import UnderlinedTitle from '@/components/UnderlinedTitle';

    export default {
        name: 'home',
        components: {
            StartView,
            Timeline,
            Graph,
            UnderlinedTitle
        }
    };
</script>


<style lang="scss">
    section{
        padding: 20px;
    }
</style>
