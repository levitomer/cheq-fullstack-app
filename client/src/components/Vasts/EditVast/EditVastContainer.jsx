import React from 'react';
import { connect } from 'react-redux';

class EditVastContainer extends React.Component {
    render() {
        return <EditVast />;
    }
}

function mapStateToProps(state) {
    return null;
}

export default connect(mapStateToProps, null)(EditVastContainer);
