import React from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../ducks/vasts/selectors';
import { fetchVasts } from '../../ducks/vasts/actions';
import Vasts from './Vasts';

class VastsContainer extends React.Component {
    componentDidMount() {
        this.props.actions.fetchVasts();
    }

    render() {
        console.log('vasts: ', this.props.vasts);
        if (this.props.loading) {
            return <div>Loading</div>;
        } else if (this.props.error) {
            return <div>error</div>;
        }

        return <Vasts vasts={this.props.vasts} />;
    }
}

function mapStateToProps(state) {
    return {
        vasts: selectors.getVasts(state),
        loading: selectors.getLoading(state),
        error: selectors.getError(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            fetchVasts: () => dispatch(fetchVasts())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(VastsContainer);
