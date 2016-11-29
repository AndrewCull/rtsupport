import React, {Component} from 'react';
import ChannelFrom from './channelForm.jsx';
import ChannelList from './channelList.jsx';

class ChannelSection extends Component{
    render(){
        return (
            <div>
            <ChannelList {...this.props} />
            <ChannelForm {...this.props}/>
            </div>
        )
    }
}

ChannelSection.propTypes = {
    channels = React.PropTypes.array.isRequired,
    setChannel = React.PropTypes.func.isRequired,
    addChannel = React.PropTypes.func.isRequired
}

export default ChannelSection