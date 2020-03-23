import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchVastById } from 'ducks/vasts/actions';
import { useLocation } from 'react-router-dom';
import * as selectors from 'ducks/vasts/selectors';
import { VastXML } from './VastXML.style';
import Logo from 'components/Logo/Logo';

// A custom hook that builds on useLocation to parse
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function VastXMLContainer(props) {
    const dispatch = useDispatch();
    const queryParams = useQuery();

    useEffect(() => {
        const id = queryParams.get('id');
        dispatch(fetchVastById(id));
    }, [dispatch]);

    const { xml, loading, error } = useSelector(
        selectors.getVasts,
        shallowEqual
    );

    if (loading) {
        return (
            <div>
                <Logo />
            </div>
        );
    } else if (error) {
        return <div>Error</div>;
    }

    return xml && <VastXML>{xml}</VastXML>;
}
