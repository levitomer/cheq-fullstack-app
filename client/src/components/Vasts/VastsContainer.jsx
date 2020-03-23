import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import * as selectors from 'ducks/vasts/selectors';
import { fetchVasts } from 'ducks/vasts/actions';
import Vast from './Vast';
import Loader from 'components/Loader/Loader';

export default function VastsContainer(_) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchVasts());
    }, [dispatch]);

    const { loading, error, data } = useSelector(
        selectors.getVasts,
        shallowEqual
    );

    if (loading) {
        return Array(10)
            .fill()
            .map((_, i) => <Loader key={i} />);
    } else if (error) {
        return <div>{'Error'}</div>;
    }

    return (
        data &&
        data.map(vast => {
            return <Vast key={vast.id} vast={vast} />;
        })
    );
}
