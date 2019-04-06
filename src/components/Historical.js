import React, {Component} from 'react';
import MyChart, {Chart} from 'react-chartjs-2';


class HistorycalChart extends Component {

    constructor() {
        super();
        this.state = {
            substate: false
        };
    }

    componentWillMount() {
        Chart.defaults.MyChart = Chart.defaults.line;
        Chart.controllers.MyChart = Chart.controllers.line.extend({
            draw: function (ease) {
                Chart.controllers.line.prototype.draw.call(this, ease);
                if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
                    const activePoint = this.chart.tooltip._active[0];
                    const ctx = this.chart.ctx;
                    const x = activePoint.tooltipPosition().x;
                    const topY = this.chart.scales['y-axis-0'].top;
                    const bottomY = this.chart.scales['y-axis-0'].bottom;
                    ctx.save();
                    ctx.beginPath();
                    ctx.moveTo(x, topY);
                    ctx.lineTo(x, bottomY);
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = '#D0D0D0';
                    ctx.stroke();
                    ctx.restore();
                }
                // Chart.controllers.line.prototype.draw.call(this, ease);
                if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
                    const activePoint1 = this.chart.tooltip._active[0];
                    const ctx = this.chart.ctx;
                    const x = activePoint1.tooltipPosition().x;
                    const topY = this.chart.scales['y-axis-0'].bottom + 6;
                    const bottomY = this.chart.scales['y-axis-0'].bottom + 24;
                    ctx.save();
                    ctx.beginPath();
                    ctx.moveTo(x, topY);
                    ctx.lineTo(x, bottomY);
                    ctx.lineWidth = 4;
                    ctx.strokeStyle = '#0093DD';
                    ctx.stroke();
                    ctx.restore();
                }
                if (true == true) {
                    const ctx = this.chart.ctx;
                    const step = (this.chart.scales['x-axis-0'].right - this.chart.scales['x-axis-0'].left) / 12
                    const length = this.chart.scales['x-axis-0'].left + step;
                    let x = length;
                    const topY = this.chart.scales['y-axis-0'].top;
                    const bottomY = this.chart.scales['y-axis-0'].bottom;
                    const nrOfVerticalLines = (this.chart.controller.scales['x-axis-0'].maxIndex - this.chart.controller.scales['x-axis-0'].minIndex) * 2 - 1;
                    for (let i = 0; i < nrOfVerticalLines; i++) {
                        ctx.save();
                        ctx.beginPath();
                        ctx.moveTo(x, topY);
                        ctx.lineTo(x, bottomY);
                        ctx.lineWidth = 0.1;
                        ctx.strokeStyle = '#cecece';
                        ctx.stroke();
                        ctx.restore();
                        x = x + step;
                    }
                }
                if (true == true) {
                    // THIS TO PRINT THE xAxis labels
                    // const ctx = this.chart.ctx;
                    // let axis = this.chart.controller.scales['x-axis-0'];
                    // const yOffset = this.chart.scales['y-axis-0'].bottom - 30;
                    // axis.ticks.forEach(function (value, index) {
                    //     let xOffset = axis.getPixelForValue(value);
                    //     ctx.fillText(value, xOffset, yOffset)
                    // });
                }
            }
        });
    }

    renderLegend = () => {
        return this.props.data.datasets.map((dataset, index) => {
            return <div className="col-12 col-md-4 col-xs-6 curbeName" key={index}><span
                style={{color: dataset.borderColor}}>&#11044;</span>{' ' + dataset.name}</div>
        });
    };

    render() {
        const options = {
            responsive: true,
            title: {
                display: false,
                position: 'left',
                text: '(°C)'
            },
            tooltips: {
                mode: 'index',
                position: 'nearest',
                intersect: false,
                backgroundColor: '#E5E4E5',
                displayColors: false,
                titleFontSize: 0,
                bodyFontSize: 14,
                bodyFontColor: '#757575',
                bodySpacing: 20

            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    position: 'bottom',
                    gridLines: {
                        drawBorder: true,
                        offsetGridLines: false,
                        zeroLineWidth: 10,
                        drawTicks: false,
                        drawOnChartArea: false
                    },
                    ticks: {
                        fontSize: 14,
                        fontColor: '#888',
                        padding: 26,
                        labelOffset: 0,
                        beginAtZero: true,
                        // steps: 0.5,
                        stepSize: 0.5,
                        min: '18:10',
                        max: '18:16',
                        isAvoidFirstLastClippingEnabled: false
                    }
                }],
                yAxes: [{
                    position: 'left',
                    gridLines: {
                        drawBorder: false,
                        offsetGridLines: false,
                        drawTicks: false,
                        zeroLineWidth: 0.5
                    },
                    ticks: {
                        padding: 10,
                        mirror: false,
                        beginAtZero: false,
                        stepSize: 50,
                        min: -50,
                        max: 200
                    }
                }]
            },
            legend: {
                display: false,
                position: 'left',
                labels: {
                    position: 'bottom',
                    usePointStyle: true
                }
            },
            elements: {
                line: {
                    tension: 0.4
                },
                point: {
                    radius: 0
                }
            }
        };
        return (
            <>
            <div className="topSelects row">
                <div className="col-3 col-md-6 col-sm-9 col-xs-12 selectblock">
                    <label htmlFor="type">Sensor Type</label>
                    <select name="type" id="type" className="type">
                        <option value="">Humidity</option>
                    </select>
                </div>
                <div className="col-3 col-md-6 col-sm-9 col-xs-12 selectblock">
                    <label htmlFor="sensors">Sensors</label>
                    <select name="sensors" id="sensors" className="sensors">
                        <option value="ch01ch02ch03">CH01 SE01, CH02 SE02, CH03 SE03</option>
                    </select>
                </div>
                <div className="col-3 col-md-6 col-sm-9 col-xs-12 selectblock">
                    <label htmlFor="granularity">Data Granularity</label>
                    <select name="granularity" id="granularity" className="granularity">
                        <option value="5">5 Min</option>
                    </select>
                </div>
                <div className="col-3 col-md-6 col-sm-9 col-xs-12 selectblock">
                    <label htmlFor="range">Time Range</label>
                    <select name="range" id="range" className="range">
                        <option value="1">Past 1 Day</option>
                    </select>
                </div>
                <hr className="col-12"/>
            </div>
            <div className="chartArea row">
                <div className="col-0 col-md-12">
                    <div className="wrapper row">
                        {this.renderLegend()}
                    </div>
                </div>
                <div className="col-1 col-lg-2 col-md-0 left">
                    <div className="wrapper row">
                        {this.renderLegend()}
                    </div>
                </div>
                <div className="col-11 col-lg-10 col-md-12 right">
                    <div className="scaleLabel">(°C)</div>
                    <MyChart
                        height={170}
                        type="MyChart"
                        data={this.props.data}
                        options={options}
                    />
                </div>
            </div>
            <div className="bottomButtons row">
                <div className="col-6 col-lg-4 col-md-0"></div>
                <select name="filetype" id="filetype"
                        className="col-3 col-lg-4 col-md-6 col-xs-12 filetype">
                    <option value="csv">csv</option>
                </select>
                <div className="col-3 col-lg-4 col-md-6 col-xs-12 button">&#8595; Download</div>
            </div>
            </>

        );
    }
}

export default HistorycalChart;