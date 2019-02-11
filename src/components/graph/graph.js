import React from "react";
import Chart from 'chart.js';
import "./graph.scss"

export default class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            areasOfSkills: [],
            skills: {
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
                'backend': {
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
            }
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        let grapOptions = {
            elements: {
                line: {
                    tension: 0,
                    borderWidth: 2
                }
            },
            legend: {
                display: false
            },
            scale: {
                ticks: {
                    display: false,
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
        
        let size = 0;
        for (let [label, dataset] of Object.entries(this.state.skills)) {
            for (let [skill, value] of Object.entries(dataset.data)) {
                size++;
            }
        }

        let labels = [];
        let datasets = [];
        let dataindex = 0;
        for (let [label, dataset] of Object.entries(this.state.skills)) {
            let data = [];
            this.state.areasOfSkills.push(label);
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

        this.labels = labels;
        this.datasets = datasets;
        this.grapOptions = grapOptions;

    }

    componentDidMount() {
        const skillsGraph = document.getElementById('skills-graph');
        new Chart(skillsGraph, {
            type: 'radar',
            data: {
                labels: this.labels,
                datasets: this.datasets
            },
            options: this.grapOptions
        });
    }


    handleClick() {
        console.log('this is:', this);
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }


    render() {
        const areasLinks = this.state.areasOfSkills.map((area, key) => 
            <a key={key} className="graph-link" href="#" onClick={this.handleClick}>{area} {this.state.isToggleOn ? 'ON' : 'OFF'}</a>
        );

        return (
            <div className="graph">   
                {areasLinks}
                {/* {this.state.areasOfSkills.map((area, key) => <a className="graph-link" key={key} href="#">{area}</a>)} */}
                <canvas id="skills-graph" width="400" height="400"></canvas>
            </div>
        );
    }
}