import React, { Component } from "react";
import {Bar} from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import {Container, Row, Col} from 'react-materialize';
import API from "../../utils/API";
import withAuth from './../../components/withAuth';
import moment from "moment";

import './Week.css';


const backgroundImg ='./assets/images/background1.jpg';

class Week extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sleepCounter: [8, 7, 7, 6, 8, 9, 5],
            waterCounter: [2, 3, 4, 5, 5, 6, 4],
            workoutConter: [4, 0, 2, 1, 0, 2, 0],
            caloriesCounter: [1500, 1600, 1650, 1800, 2000, 1650, 1500],
            targetSleep: 8,
            targetWater: 6,
            targetWorkout: 2,
            targetCalories: 1800
        };
    }
  
      componentDidMount() {
        API.getUser(this.props.user.id).then(res => {
          this.setState(
            {
              id: res.data._id,
              name: res.data.name,
              age: res.data.age,
              water_goal: res.data.water_goal,
              calorie_goal: res.data.calorie_goal,
              exercise_goal: res.data.exercise_goal,
              sleep_goal: res.data.sleep_goal,
            }
          );
          console.log("hello" + res.data.name);
          console.log(moment().subtract(10,"days").format("MM/DD/YYYY"));
        });
      };
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
    
    
    render() {
        return (
            <div className="mainWrapper" style={{ backgroundImage: `url(${backgroundImg})` }}>
                    <Container className="containerWeek">
                        <Row>
                            <Col className="s2 offset-s5 black-text center-align">
                            Weekly Stats
                            <hr/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="s10 offset-s1 black-text center-align">
                                <div className="mixedGraphContainer">
                                <Bar
                                    data={{
                                        datasets: [
                                            {
                                                label: "Workout",
                                                data: [this.state.workoutConter[0], this.state.workoutConter[1], this.state.workoutConter[2], this.state.workoutConter[3], this.state.workoutConter[4], this.state.workoutConter[5], this.state.workoutConter[6]],
                                                type: 'bar',
                                                fill: false,
                                                borderColor: '#bebebe',
                                                backgroundColor: 'rgba(0, 200, 100, 1)',
                                                hoverBorderColor: '#bebebe',
                                                hoverBackgroundColor: 'rgba(0, 255, 128, 1)',
                                                yAxisID: 'y-axis-1',
                                                stack: 1
                                            },
                                            {
                                                label: "Workout Target",
                                                data: [this.state.targetWorkout, this.state.targetWorkout, this.state.targetWorkout, this.state.targetWorkout, this.state.targetWorkout, this.state.targetWorkout, this.state.targetWorkout],
                                                type: 'bar',
                                                fill: false,
                                                borderColor: '#bebebe',
                                                backgroundColor: 'rgba(0, 200, 100, 0.3)',
                                                hoverBorderColor: '#bebebe',
                                                hoverBackgroundColor: 'rgba(0, 255, 128, 0.3)',
                                                yAxisID: 'y-axis-1',
                                                stack: 1,
                                                datalabels: {
                                                    // hide datalabels for this specific dataset
                                                    display: false
                                                  }
                                            },
                                            {
                                                label: "Water",
                                                data: [this.state.waterCounter[0], this.state.waterCounter[1], this.state.waterCounter[2], this.state.waterCounter[3], this.state.waterCounter[4], this.state.waterCounter[5], this.state.waterCounter[6]],
                                                type: 'bar',
                                                fill: false,
                                                borderColor: '#bebebe',
                                                backgroundColor: 'rgba(0, 119, 190, 1)',
                                                hoverBorderColor: '#bebebe',
                                                hoverBackgroundColor: 'rgba(77, 190, 255, 1)',
                                                yAxisID: 'y-axis-1',
                                                stack: 2
                                            },
                                            {
                                                label: "Water Target",
                                                data: [this.state.targetWater, this.state.targetWater, this.state.targetWater, this.state.targetWater, this.state.targetWater, this.state.targetWater, this.state.targetWater],
                                                type: 'bar',
                                                fill: false,
                                                borderColor: '#bebebe',
                                                backgroundColor: 'rgba(0, 119, 190, 0.3)',
                                                hoverBorderColor: '#bebebe',
                                                hoverBackgroundColor: 'rgba(77, 190, 255, 0.3)',
                                                yAxisID: 'y-axis-1',
                                                stack: 2,
                                                datalabels: {
                                                    // hide datalabels for this specific dataset
                                                    display: false
                                                  }
                                            },
                                            
                                            {
                                                label: "Sleep",
                                                data: [this.state.sleepCounter[0], this.state.sleepCounter[1], this.state.sleepCounter[2], this.state.sleepCounter[3], this.state.sleepCounter[4], this.state.sleepCounter[5], this.state.sleepCounter[6]],
                                                type: 'bar',
                                                fill: false,
                                                borderColor: '#bebebe',
                                                backgroundColor: 'rgba(95, 107, 127, 1)',
                                                hoverBorderColor: '#bebebe',
                                                hoverBackgroundColor: 'rgba(138, 151, 158, 1)',
                                                yAxisID: 'y-axis-1',
                                                stack: 3
                                            },
                                            {
                                                label: "Sleep Target",
                                                data: [this.state.targetSleep, this.state.targetSleep, this.state.targetSleep, this.state.targetSleep, this.state.targetSleep, this.state.targetSleep, this.state.targetSleep],
                                                type: 'bar',
                                                fill: false,
                                                borderColor: '#bebebe',
                                                backgroundColor: 'rgba(95, 107, 127, 0.3)',
                                                hoverBorderColor: '#bebebe',
                                                hoverBackgroundColor: 'rgba(138, 151, 158, 0.3)',
                                                yAxisID: 'y-axis-1',
                                                stack: 3,
                                                datalabels: {
                                                    // hide datalabels for this specific dataset
                                                    display: false
                                                  }
                                            },
                                            {
                                                label: "Calories",
                                                data: [this.state.caloriesCounter[0], this.state.caloriesCounter[1], this.state.caloriesCounter[2], this.state.caloriesCounter[3], this.state.caloriesCounter[4], this.state.caloriesCounter[5], this.state.caloriesCounter[6]],
                                                type: 'line',
                                                fill: false,
                                                borderWidth: 2,
                                                borderColor: 'rgba(105, 78, 47, 1)',
                                                backgroundColor: 'rgba(224, 167, 101, 1)',
                                                pointBorderColor: 'rgba(74, 55, 33, 1)',
                                                pointBackgroundColor: 'rgba(74, 55, 33, 1)',
                                                pointHoverBorderColor: 'rgba(181, 135, 81, 1)',
                                                pointHoverBackgroundColor: 'rgba(181, 135, 81, 1)',
                                                yAxisID: 'y-axis-2'
                                            },
                                            {
                                                label: "Calories Target",
                                                data: [this.state.targetCalories, this.state.targetCalories, this.state.targetCalories, this.state.targetCalories, this.state.targetCalories, this.state.targetCalories, this.state.targetCalories],
                                                type: 'line',
                                                fill: false,
                                                borderWidth: 2,
                                                pointBorderWidth: 0,
                                                borderDash: [10, 10],
                                                borderColor: 'rgba(105, 78, 47, 0.3)',
                                                backgroundColor: 'rgba(224, 167, 101, 0.3)',
                                                pointBorderColor: 'rgba(74, 55, 33, 0.3)',
                                                pointBackgroundColor: 'rgba(74, 55, 33, 0.3)',
                                                pointHoverBorderColor: 'rgba(181, 135, 81, 0.3)',
                                                pointHoverBackgroundColor: 'rgba(181, 135, 81, 0.3)',
                                                yAxisID: 'y-axis-2',
                                                datalabels: {
                                                    // hide datalabels for this specific dataset
                                                    display: false
                                                },
                                                pointRadius: 0
                                            }
                                            
                                            
                                        ]
                                    }}
                                    width={100}
                                    height={60}
                                    options={{
                                        maintainAspectRatio: true,
                                        legend: {
                                            display: true,
                                            position: 'right',
                                            labels: {
                                                boxWidth: 20,
                                                padding:  10,
                                                fontColor: "black",
                                                fontSize: 16
                                            }
                                        },
                                        labels: ["Monday", "Tuesday", "Wednesdday", "Thursday", "Friday", "Saturday", "Sundsay"],
                                        responsive: true,
                                        tooltips: {
                                            mode: 'label'
                                        },
                                        elements: {
                                            line: {
                                            fill: false
                                            }
                                        },
                                        scales: {
                                            xAxes: [
                                            {
                                                position: 'bottom',
                                                display: true,
                                                stacked: false,
                                                gridLines: {
                                                    display: true
                                                },
                                                labels: ["Monday", "Tuesday", "Wednesdday", "Thursday", "Friday", "Saturday", "Sundsay"],
                                            }
                                            ],
                                            yAxes: [
                                            {   
                                                type: 'linear',
                                                display: true,
                                                stacked: false,
                                                position: 'left',
                                                id: 'y-axis-1',
                                                gridLines: {
                                                    display: false
                                                },
                                                labels: {
                                                    show: true
                                                },
                                                ticks: {
                                                    beginAtZero:true,
                                                    suggestedMin: 0,
                                                    suggestedMax: 18,
                                                    fontColor: 'Black'
                                                }
                                            },
                                            {
                                                type: 'linear',
                                                display: true,
                                                position: 'right',
                                                id: 'y-axis-2',
                                                gridLines: {
                                                    display: false
                                                },
                                                labels: {
                                                    show: true
                                                },
                                                ticks: {
                                                    suggestedMin: 0,
                                                    suggestedMax: 2200,
                                                    fontColor: 'Black'
                                                }
                                            }
                                            ]
                                        },
                                        plugins: {
                                          datalabels: {
                                            display: true,
                                            clamp: false,
                                            anchor: 'end',
                                            align: 'end',
                                            offset: 1,
                                            color: 'black'
                                         },
                                        }
                                    }}
                                />
                                </div>
                            </Col>
                        </Row>
                    </Container>
              </div>
          );
      }
  }
  


export default withAuth(Week);
