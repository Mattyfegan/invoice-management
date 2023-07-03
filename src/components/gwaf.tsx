import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graph extends Component {
	render() {
		const options = {
			backgroundColor: "#37322F",
			animationEnabled: true,
			exportEnabled: true,
			theme: "dark2",
			title:{
                fontFamily:'verdana',
				text: "Profits by Week of Year"
			},
			axisY: {
                fontFamily:'verdana',
				labelFontSize: 12,
				title: "Profits",
				prefix: "$",
			},
			axisX: {
                fontFamily:'verdana',
				title: "Week of Year",
				prefix: "W",
				interval: 2,
				lineColor: "#C1EDCC"
			},
			data: [{
				color: "#B2A7D1",
				type: "line",
				toolTipContent: "Week {x}: {y}$",
				dataPoints: [
					{ x: 1, y: 64000 },
					{ x: 2, y: 61000 },
					{ x: 3, y: 12000 },
					{ x: 4, y: 62450 },
					{ x: 5, y: 64293 },
					{ x: 6, y: 60717 },
					{ x: 7, y: 58000 },
					{ x: 8, y: 59111 },
					{ x: 9, y: 53209 },
					{ x: 10, y: 54000 },
					{ x: 11, y: 61999 },
					{ x: 12, y: 60000 },
					{ x: 13, y: 55263 },
					{ x: 14, y: 60896 },
					{ x: 15, y: 56000 },
					{ x: 16, y: 60826 },
					{ x: 17, y: 35200 },
					{ x: 18, y: 68978 },
					{ x: 19, y: 58987 },
					{ x: 20, y: 54000 },
					{ x: 21, y: 59000 },
					{ x: 22, y: 64000 },
					{ x: 23, y: 59000 }
				]
			}]
        }

        const containerProps1 = {
            width: '98%',
            height: '98%',
        }

		return (
		<div className="graph">
			<CanvasJSChart options = {options}
            containerProps = {containerProps1}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default Graph                       