<template>
    <div class="timeline">
        <!-- <h2>work</h2> -->
        <div class="item">
            <div class="heading">
                <span class="circle"></span>
                2015 - 2019
            </div>
            <div class="body">
                <h2>Lorem</h2>
                <p>Lorem ipsum dolor sit amet, ad ullum veniam nominati sea. Dicat probatus concludaturque sea ne. Usu indoctum consetetur scriptorem at, porro mundi eam id. Has sensibus inciderint ex, commodo philosophia mediocritatem eam ex, nisl quando audire an eam.</p>
            </div>
        </div>
        <div class="item">
            <div class="heading">
                <span class="circle"></span>
                2013 - 2015
            </div>
            <div class="body">
                <h2>In feugait</h2>
                <p>In feugait recusabo vis, ex has tota omnes inciderint, debitis facilisi platonem ne nam. Expetenda principes id usu. At denique eligendi detraxit est, ad facilis qualisque suscipiantur sea. Viris feugiat ad duo, cum cu iudico option. Eruditi evertitur id his.</p>
            </div>
        </div>
        <div class="item">
            <div class="heading">
                <span class="circle"></span>
                2012
            </div>
            <div class="body">
                <h2>Odio</h2>
                <p>Odio aliquip vivendum nam ad, duo iisque indoctum ad, cu ornatus dolorum qui. Ad quo viris sapientem deseruisse, in paulo menandri nec. Periculis signiferumque mea ea, sonet definitiones qui eu. Ad malis paulo dolore sea. Adhuc comprehensam at cum. No maiorum tractatos conclusionemque duo, solum invidunt ut vim.</p>
            </div>
        </div>
        <div class="item">
            <div class="heading">
                <span class="circle"></span>
                2011
            </div>
            <div class="body">
                <h2>Ut pro fuisset</h2>
                <p>Ut pro fuisset singulis dissentiet, ei sadipscing scriptorem eum. Et mel utroque euripidis. Ut nec mandamus sapientem quaerendum, vim ne option assentior, etiam gloriatur at pri. Ei minim evertitur nam, at pri dicunt ornatus.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "timeline"
    };
</script>

<style lang="scss" scoped>
    $_color_main: #ea2949;
    $_color_bg_odd: rgba(43, 43, 43, 0.6);
    $_color_bg_even: rgba(21, 21, 21, 0.6);

    $line_width: 1px;

    .timeline {
        margin: 40px 0 200px 0;
        h2 {
            display: block;
        }
        .item {
            display: flex;
            .heading {
                flex: 1;
                flex-grow: 1;
                position: relative;
                padding-left: 30px;
                &::before {
                    content: "";
                    position: absolute;
                    display: block;
                    left: 15px;
                    width: $line_width;
                    height: 100%;
                    border-left: $line_width solid $_color_main;
                }
                &::after {
                    content: "";
                    position: absolute;
                    display: block;
                    top: 48px;
                    left: 20px;
                    right: 0;
                    border-bottom: $line_width solid $_color_main;
                }
                .circle {
                    position: absolute;
                    left: 5px;
                    top: 38px;
                    background-color: $_color_bg_body;
                    border: $line_width solid $_color_main;
                    z-index: 1;
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                }
            }
            .body {
                flex: 1;
                flex-grow: 3;
                display: block;
                position: relative;
                border-radius: 10px;
                padding: $line_width 10px 10px 20px;
                margin-bottom: 20px;
                &::after {
                    content: "";
                    width: 0;
                    height: 0;
                    border-top: 15px solid transparent;
                    border-bottom: 15px solid transparent;
                    position: absolute;
                    left: -20px;
                    top: 35%;
                }
                h2 {
                    margin: 0;
                }
                p {
                    margin: 0;
                }
            }
            &:nth-child(odd) {
                .body {
                    background-color: $_color_bg_odd;
                    &::after {
                        background-color: $_color_bg_odd;
                    }
                }
            }
            &:nth-child(even) {
                .body {
                    background-color: $_color_bg_even;
                    &::after {
                        background-color: $_color_bg_even;
                    }
                }
            }
        }
    }
</style>
