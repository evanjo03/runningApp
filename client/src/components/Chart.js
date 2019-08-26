import { ResponsiveLine } from '@nivo/line';
import { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import API from "../utils/API"
import React from "react";
import Data from "./data";

const Chart = () => {

    const [username, setUsername] = useState("");
    const [results, setResults] = useState([]);
    const [redirect, setRedirect] = useState(false);


    const getRuns = (usnme) => {
        API.getUser(usnme).then(results => {
            console.log(results.data.activities)
            setResults(results.data.activities)
        })
    }

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("username"))
        if (user) {
            setUsername(user)
            getRuns(user)
        } else { setRedirect() }
    }, [])


    const renderRedirect = () => {
        if (redirect) {
            return <Redirect to='/' />
        }
    }
    const style = {
        chart: {
            width: "100%",
            height: 600
        }
    }

    //lets create an object!!!! :)

    const newData = [
        {
            "id": "distance",
            "color": "hsl(344, 70%, 50%)",
            "data": []
        }
    ]

    results.forEach(result => {
        let yVal = result.distance;
        
        let time = result.id;

        //time ago in milliseconds that run took place
        let timeDiffFromNow = Date.now() - time; 
        

        //time on x will be time diff from now - milliseconds from a week ago
        let xVal = (604800000 - timeDiffFromNow) / (1000 * 60 * 60 * 24);

        let runObj = {
            "x" : xVal,
            "y" : yVal
        }

        //push data 
        newData[0].data.push(runObj)
    })

    //how pushing to our data object will look
    
    console.log(newData)

    return (
        <div className="chart" style={style.chart}>
            <ResponsiveLine
                data={newData}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', stacked: true, min: 'auto', max: 'auto' }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'transportation',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                colors={{ scheme: 'nivo' }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabel="y"
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    )
}
export default Chart;