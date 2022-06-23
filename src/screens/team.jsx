import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { firebase } from "../firebase";
import 'antd/dist/antd.min.css'

const db = firebase.database();

export default function Team(props) {
    const [graphData, setGraphData] = useState([]);

    useEffect(() => {
        var lGraphData = [];
        var teamData = props.teamData;
        var matchData = teamData.matches;
        var point;
        for (const match in matchData) {
            point = {
                name: "match",
                points: matchData[match].points
            }
            lGraphData.push(point);
        }
        setGraphData(lGraphData);
        console.log(lGraphData);
    }, [])

    return (
        <div>
            <ResponsiveContainer width="100%" height={350}>
                <LineChart
                    width="80%"
                    height={300}
                    data={graphData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="points" stroke="#359baf" />
                    <Legend />
                    </LineChart>
            </ResponsiveContainer>
        </div>
    )
}