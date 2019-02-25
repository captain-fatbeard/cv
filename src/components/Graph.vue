<template>
    <div>
        <div>
            <button
                v-for="skill in skills"
                v-on:click="updateGraphData(skill)"
                v-bind:class="{'is-inactive' : !skill.active}"
                v-bind:key=skill.id
            >
                {{skill.label}}
                <span v-bind:style="{ 'background-color': skill.borderColor}"></span>
            </button>
        </div>

        <canvas id="skills-graph" width="400" height="400"></canvas>
        <!-- {{skills}} -->
    </div>
</template>


<script>
    import Chart from "chart.js";

    export default {
        name: "graph",
        data() {
            return {
                graph: "tester",
                skills: [
                    {
                        id: 1,
                        label: "languages",
                        active: true,
                        backgroundColor: "rgba(255, 99, 132, 0.1)",
                        borderColor: "rgb(255, 99, 132)",
                        data: [
                            {label: 'html', value: 99},
                            {label: 'PHP', value: 90},
                            {label: 'mysql', value: 70},
                            {label: 'javascript', value: 80},
                            {label: 'css', value: 99}
                        ]
                    },
                    {
                        id: 2,
                        label: "frontend",
                        active: true,
                        backgroundColor: "rgba(132, 99, 255, 0.1)",
                        borderColor: "rgb(132, 99, 255)",
                        data: [
                            {label: 'ReactJS', value: 50},
                            {label: 'Bootstrap', value: 95},
                            {label: 'VueJS', value: 75},
                            {label: 'jquery', value: 95}
                        ]
                    },
                    {
                        id: 3,
                        label: "backend",
                        active: true,
                        backgroundColor: "rgba(99, 255, 190, 0.1)",
                        borderColor: "rgb(99, 255, 190)",
                        data: [
                            {label: 'NodeJS', value: 60},
                            {label: 'Laravel', value: 60},
                            {label: 'Wordpress', value: 75}
                        ]
                    },
                    {
                        id: 4,
                        label: "Other services",
                        active: false,
                        backgroundColor: "rgba(255, 193, 99, 0.1)",
                        borderColor: "rgb(255, 193, 99)",
                        data: [
                            {label: 'Git', value: 85},
                            {label: 'new relic', value: 65},
                            {label: 'aws', value: 45}
                        ]
                    },
                    {
                        id: 5,
                        label: "Developer Tools",
                        active: false,
                        backgroundColor: "rgba(99, 161, 255, 0.1)",
                        borderColor: "rgb(99, 161, 255)",
                        data: [
                            {label: 'sass', value: 95},
                            {label: 'webpack', value: 65},
                            {label: 'grunt & gulp', value: 90},
                            {label: 'phpunit', value: 70}
                        ]
                    },
                    {
                        id: 6,
                        label: "Package Managers",
                        active: false,
                        backgroundColor: "rgba(141, 164, 173, 0.1)",
                        borderColor: "rgb(141, 164, 173)",
                        data: [
                            {label: 'NPM', value: 90},
                            {label: 'Composer', value: 90},
                            {label: 'Homebrew', value: 90},
                            {label: 'Chocolatey', value: 90}
                        ]
                    }
                ]
            }
        },
        computed: {
            makeGraphData() {
                let datasets = [];
                let labels = [];
                let dataindex = 0;
                let skillLength = 0;


                this.skills.filter(skillset => skillset.active).map((skillset) => {
                    skillLength = skillLength + skillset.data.length;
                });

                this.skills.filter(skillset => skillset.active).map((skillset) => {
                    let data = new Array(skillLength).fill(0);

                    skillset.data.map((skill) => {
                        data[dataindex] = skill.value;
                        dataindex++;
                        labels.push(skill.label);
                    });

                    datasets.push({
                        label: skillset.label,
                        fill: true,
                        backgroundColor: skillset.backgroundColor,
                        borderColor: skillset.borderColor,
                        data: data
                    });
                });

                return { datasets: datasets, labels: labels };
            }
        },
        methods: {
            updateGraphData(skill) {
                skill.active = !skill.active;

                this.graph.data.labels = this.makeGraphData.labels;
                this.graph.data.datasets = this.makeGraphData.datasets;
                this.graph.update();
            }
        },
        mounted() {
            let graphOptions = {
                elements: {
                    line: {
                        tension: 0,
                        borderWidth: 2,
                        color: 'red',
                    }
                },
                legend: {
                    display: false,
                },
                scale: {
                    pointLabels: {
                        fontColor: '#fff',
                    },
                    gridLines: {
                        color: '#636363',
                    },
                    ticks: {
                        display: false,
                        beginAtZero: true,
                        // callback(value, index, values) {
                        //     if (value % 20 === 0) {
                        //         return value;
                        //     } else {
                        //         return "";
                        //     }
                        // }
                    }
                }
            };

            // console.log(this.makeGraphData);
            // console.log(this.makeGraphData.labels);

            this.graph = new Chart(document.getElementById("skills-graph"), {
                type: "radar",
                data: {
                    labels: this.makeGraphData.labels,
                    datasets: this.makeGraphData.datasets
                },
                options: graphOptions
            });
        }
    };
</script>

<style lang="scss" scoped>
    canvas{
        max-height: 100%;
        max-width: 100%;
    }

    button{
        background: none;
        color: white;
        border: none;
        text-transform: uppercase;
        padding: 0 10px;
        margin: 10px;
        cursor: pointer;

        span{
            display: inline-block;
            width: 15px;
            height: 5px;
        }

        &.is-inactive {
            text-decoration: line-through;
        }
    }



</style>
