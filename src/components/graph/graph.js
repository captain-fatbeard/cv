import React from "react";
import Chart from 'chart.js';
import "./graph.scss"

export default class Graph extends React.Component {
    constructor() {
        super();
        this.state = { areasOfSkills: [] }
    }

    componentDidMount() {
        let grapOptions = {
            elements: {
                line: {
                    tension: 0,
                    borderWidth: 2
                }
            },
            scale: {
                ticks: {
                    beginAtZero: true,
                    callback: function(value, index, values) {
                        if (value % 20 === 0){
                            return value;
                        } else {
                            return '';
                        }
                    }
                }
            }
        };
        
        const skills = {
            'languages': {
                'backgroundColor': 'rgba(255, 99, 132, 0.1)',
                'borderColor': 'rgb(255, 99, 132)',
                'data': {
                    'html': 99,
                    'PHP': 90,
                    'mysql': 70,
                    'javascript': 80,
                    'css': 99,
                }
            },
            'Backend': {
                'backgroundColor': 'rgba(255, 132, 99, 0.1)',
                'borderColor': 'rgb(255, 132, 99)',
                'data': {
                    'NodeJS': 70,
                    'Laravel': 90,
                    'Wordpress': 90
                }
            },
            'frontend': {
                'backgroundColor': 'rgba(132, 99, 255, 0.1)',
                'borderColor': 'rgb(132, 99, 255)',
                'data': {
                    'ReactJS': 55,
                    'Bootstrap': 95,
                    'VueJS': 50,
                    'jquery': 95
                }
            }
        };

        let size = 0;
        for (let [label, dataset] of Object.entries(skills)) {
            for (let [skill, value] of Object.entries(dataset.data)) {
                size++;
            }
        }

        let areas = [];
        let labels = [];
        let datasets = [];
        let dataindex = 0;
        for (let [label, dataset] of Object.entries(skills)) {
            let data = [];
            areas.push(label);
            for (let index = 0; index < size; index++) {
                data.push(0);
            }

            // console.log(label, dataset);
            for (let [skill, value] of Object.entries(dataset.data)) {
                data[dataindex] = value;
                labels.push(skill);

                dataindex ++;
            }

            datasets.push({
                label: label,
                fill:true,
                backgroundColor: dataset.backgroundColor,
                borderColor: dataset.borderColor,
                data: data
            });
        }
        
        // this.setState({ areas: areasOfSkill } ); 
        // console.log(labels);
        // console.log(datasets);
        // console.log(areas);

        // const skillsGraph = document.getElementById('skills-graph');
        // new Chart(skillsGraph, {
        //     type: 'radar',
        //     data: {
        //         labels: labels,
        //         datasets: datasets
        //     },
        //     options:grapOptions
        // });
    }

    render() {
        console.log('areas');
        return (
            <div className="graph">
                {/* {areas.map(area => <a href="" className=""> {area} </a>)} */}
                <canvas id="skills-graph" width="400" height="400"></canvas>
            </div>
        );
    }
}