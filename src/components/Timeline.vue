<template>
    <div class="timeline">
        <div class="item" v-for="(item, index) in timeline" :key="index">
            <div class="heading">
                <span class="circle"></span>
                 {{ item.year }}
            </div>
            <div class="body">
                <h2>{{ item.title }}</h2>
                <p>{{ item.text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "timeline",
        data() {
            return{
                timeline: [
                    {
                        year: '2020',
                        title: 'Ambition',
                        text:  'Lorem ipsum dolor sit amet, ad ullum veniam nominati sea. Dicat probatus concludaturque sea ne. Usu indoctum consetetur scriptorem at, porro mundi eam id. Has sensibus inciderint ex, commodo philosophia mediocritatem eam ex, nisl quando audire an eam.'
                    },
                    {
                        year: '2015 - 2019',
                        title: 'Netbooster / Artefact',
                        text:  'Lorem ipsum dolor sit amet, ad ullum veniam nominati sea. Dicat probatus concludaturque sea ne. Usu indoctum consetetur scriptorem at, porro mundi eam id. Has sensibus inciderint ex, commodo philosophia mediocritatem eam ex, nisl quando audire an eam.'
                    },
                    {
                        year: '2013 - 2015',
                        title: 'Designheroes',
                        text:  'Lorem ipsum dolor sit amet, ad ullum veniam nominati sea. Dicat probatus concludaturque sea ne. Usu indoctum consetetur scriptorem at, porro mundi eam id. Has sensibus inciderint ex, commodo philosophia mediocritatem eam ex, nisl quando audire an eam.'
                    },
                    {
                        year: '2012',
                        title: 'Rete-Moto / Heroes & Generals',
                        text:  'Web-programming & forum maintenance. Started as 2 month internship.'
                    },
                    {
                        year: '2011',
                        title: 'AmPd',
                        text:  'Web development ,design and programmingin in HTML5/CSS3.'
                    }
                ]
            }
        }
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
