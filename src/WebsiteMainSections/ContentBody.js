import React, {Component} from 'react';
import MesureSwitch from '../components/MesureSwitch';


class ContentBody extends Component {

    constructor() {
        super();
        this.state = {
            viewed: ''
        };
    }

    componentDidMount() {
        this.switchWindow('Historical')
    }

    switchWindow = (viewed) => {
        for (let i = 0; i < document.getElementsByClassName('buttonSwitch').length; i++) {
            document.getElementsByClassName('buttonSwitch')[i].classList.remove("selected");
        }
        document.getElementsByClassName(viewed)[0].classList.add("selected");
        this.setState({viewed});
    };

    render() {

        const data = {
            labels: ["", "18:10", "18:11", "18:12", "18:13", "18:14", "18:15", "18:16", ""],
            datasets: [
                {
                    label: "C1S1",
                    name: "CH01 SE01",
                    borderColor: "#FF547A",
                    backgroundColor: "#FF547A",
                    fill: false,
                    data: [-110, -10, 60, 30, 150, 60, 160, 140, 200]
                },
                {
                    label: "C1S14",
                    name: "CH01 SE14",
                    borderColor: "#6FFA80",
                    backgroundColor: "#6FFA80",
                    fill: false,
                    data: [-130, -10, 20, 0, 120, 50, 130, 120, 180]
                },
                {
                    label: "C3S1",
                    name: "CH03 SE01",
                    borderColor: "#55C1FF",
                    backgroundColor: "#55C1FF",
                    fill: false,
                    data: [0, 40, 50, 40, 45, 20, 40, 50, 100]
                }
            ]
        };

        return (
            <div className="container-flex container-main-content">
                <div className="contentBeforeData"></div>
                <div className="dataWrapper">
                    <h3>Data</h3>
                    <div className="mesurements">
                        <div className="col-12">
                            <div className="threedot">⋮</div>
                            <h4>Measurement</h4>
                        </div>
                        <hr className="col-12"/>
                        <div className="topButtons row">
                            <div
                                className="col-2 col-md-3 col-sm-12 button buttonSwitch Realtime"
                                onClick={() => this.switchWindow('Realtime')}
                            >Real-time
                            </div>
                            <div
                                className="col-2 col-md-3 col-sm-12 button buttonSwitch Snapshot"
                                onClick={() => this.switchWindow('Snapshot')}
                            >Snapshot
                            </div>
                            <div
                                className="col-2 col-md-3 col-sm-12 button buttonSwitch Historical"
                                onClick={() => this.switchWindow('Historical')}
                            >Historical
                            </div>
                        </div>
                        <MesureSwitch data={data} viewed={this.state.viewed}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentBody;