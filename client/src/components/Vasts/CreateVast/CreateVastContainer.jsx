import React from 'react';
import { connect } from 'react-redux';

class CreateVastContainer extends React.Component {
    render() {
        return <CreateVast />;
    }
}

function mapStateToProps(state) {
    return null;
}

export default connect(mapStateToProps, null)(CreateVastContainer);
