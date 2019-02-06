import React from "react";
import Chart from 'chart.js';
import "./graph.scss"

export default class Graph extends React.Component {
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
        
        let skills = [];
        skills.push({area:'language', label: 'HTML', val: 99});
        skills.push({area:'language', label: 'PHP', val: 90});
        skills.push({area:'language', label: 'mysql', val: 70});
        skills.push({area:'language', label: 'javascript', val: 80});
        skills.push({area:'language', label: 'css', val: 99});
        skills.push({area:'frontend', label: 'ReactJS', val: 55});
        skills.push({area:'frontend', label: 'Bootstrap', val: 95});
        skills.push({area:'frontend', label: 'VueJS', val: 50});
        skills.push({area:'frontend', label: 'jquery', val: 95});
   
        let labels = [];
        let dataSetsLanguages = [];
        let dataSetsFrontend = [];

        for (let index = 0; index < skills.length; index++) {
            labels.push(skills[index].label);

            if (skills[index].area === 'language') {
                dataSetsLanguages.push(skills[index].val);
            } else {
                dataSetsLanguages.push(0);
            }
            
            if (skills[index].area === 'frontend') {
                dataSetsFrontend.push(skills[index].val);
            } else {
                dataSetsFrontend.push(0);
            }
        }
        console.log(labels);
        console.log(dataSetsLanguages);
        console.log(dataSetsFrontend);

        const skillsGraph = document.getElementById('skills-graph');
        new Chart(skillsGraph, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'languages',
                        data: dataSetsLanguages,
                        fill: true,
                        backgroundColor: 'rgba(255, 99, 132, 0.1)',
                        borderColor: 'rgb(255, 99, 132)',
                    },
                    {
                        label: 'frontend',
                        data: dataSetsFrontend,
                        fill: true,
                        backgroundColor: 'rgba(132, 99, 255, 0.1)',
                        borderColor: 'rgb(132, 99, 255)',
                    }
                ]
            },
            options:grapOptions
        });


        // let LanguageGraph = document.getElementById('languages-graph');
        // new Chart(LanguageGraph, {
        //     type: 'radar',
        //     data: {
        //         labels: ['PHP', 'HTML', 'css', 'javascript', 'mysql'],
        //         datasets: [
        //             {
        //                 label: 'Languages',
        //                 data:[90, 99, 99, 70, 81],
        //                 fill: true,
        //                 backgroundColor: 'rgba(255, 99, 132, 0.1)',
        //                 borderColor: 'rgb(255, 99, 132)',
        //             }
        //         ]
        //     },
        //     options:grapOptions
        // });

        // let frontendGraph = document.getElementById('frontend-graph');
        // new Chart(frontendGraph, {
        //     type: 'radar',
        //     data: {
        //         labels: ['VueJS', 'ReactJS', 'Bootstrap', 'jquery'],
        //         datasets: [
        //             {
        //                 label: 'Frontend',
        //                 data:[60, 60, 95, 95],
        //                 fill: true,
        //                 backgroundColor: 'rgba(132, 99, 255, 0.1)',
        //                 borderColor: 'rgb(132, 99, 255)',
        //             }
        //         ]
        //     },
        //     options:grapOptions
        // });

    }

    render() {
        return (
            <div className="graph">         
                <canvas id="skills-graph" width="400" height="400"></canvas>
            </div>
        );
    }
}