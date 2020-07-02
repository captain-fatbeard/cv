<template>
    <div class="timeline">
        <div class="item" v-for="(item, index) in timeline" :key="index">
            <div class="heading">
                <span class="circle" v-bind:class="{present: item.present}">&bull;</span>
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
                        present: true,
                        year: '2020',
                        title: 'Ambition',
                        text:  'Laravel, vuejs'
                    },
                    {
                        year: '2015 - 2019',
                        title: 'Netbooster / Artefact',
                        text:  'Team lead'
                    },
                    {
                        year: '2013 - 2015',
                        title: 'Designheroes',
                        text:  'PHP Frameworks Opencart'
                    },
                    {
                        year: '2012',
                        title: 'Rete-Moto / Heroes & Generals',
                        text:  'Web-programming & forum maintenance. Started as 2 month internship.'
                    },
                    {
                        year: '2011',
                        title: 'AmPd',
                        text:  'Freelance Web development, design and programmingin in HTML5/CSS3.'
                    }
                ]
            }
        }
    };
</script>

<style lang="scss" scoped>

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
                padding-top: 30px;
                &::before {
                    content: "";
                    position: absolute;
                    display: block;
                    left: 15px;
                    width: $line_width;
                    height: 100%;
                    border-left: $line_width solid $_color_primery;
                }
                &::after {
                    content: "";
                    position: absolute;
                    display: block;
                    top: 48px;
                    left: 20px;
                    right: 0;
                    border-bottom: $line_width solid $_color_primery;
                }
                .circle {
                    position: absolute;
                    left: 5px;
                    top: 38px;
                    background-color: $_color_bg_body;
                    border: $line_width solid $_color_primery;
                    z-index: 1;
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    font-size: 0;
                    &.present {
                        color: $_color_primery;
                        font-size: 58px;
                        line-height: 20px;
                    }
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
                min-height: 80px;
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
                    border-color: $_color_primery;
                    border-width: 1px;
                    border-style: solid;
                    &::after {
                        }
                }
            }
            &:nth-child(even) {
                .body {
                    border-color: $_color_primery;
                    border-width: 1px;
                    border-style: solid;

                    &::after {

                    }
                }
            }
        }
    }
</style>
