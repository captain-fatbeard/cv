<template>
    <div>

        <section id="start-view" class="flex-center position-rel full-height">
            <start-view />
        </section>

        <section id="bio" class="position-rel full-height">
            <div>
                <underlined-title title="About me" />
                <bio />
            </div>
        </section>

        <section id="skills" class="flex-center position-rel full-height">
            <div>
                <underlined-title title="Skills" />
                <graph />
            </div>
        </section>

        <section id="work" class="">
            <div>
                <underlined-title title="Work" />
                <timeline />
            </div>
        </section>

    </div>
</template>

<script>
    // @ is an alias to /src
    import StartView from '@/components/StartView';
    import Timeline from '@/components/Timeline';
    import Graph from '@/components/Graph';
    import Bio from '@/components/Bio';
    import UnderlinedTitle from '@/components/UnderlinedTitle';

    export default {
        name: 'home',
        components: {
            StartView,
            Timeline,
            Graph,
            Bio,
            UnderlinedTitle
        }
    };
</script>


<style lang="scss">
    section{
        padding: 20px;
    }
</style>
