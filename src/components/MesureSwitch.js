import React, {Component} from 'react';
import Realtime from './Realtime';
import Snapshot from './Snapshot';
import Historical from './Historical';

class CompName extends Component {

    renderSwitch = () => {
        switch (this.props.viewed) {
            case 'Realtime':
                return <Realtime data={this.props.data}/>;
            case 'Snapshot':
                return <Snapshot data={this.props.data}/>;
            case 'Historical':
                return <Historical data={this.props.data}/>;
            default:
                return null;
        }
    };

    render() {
        return this.renderSwitch();
    }

}

export default CompName;