import { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getModal } from 'ducks/modal/selectors';
import { hideModal, showModal } from 'ducks/modal/actions';

export const useModal = () => {
    // Get modal fields from store using reselect
    return {
        modal: useSelector(getModal, shallowEqual)
    };
};

export const useShowModal = props => {
    const dispatch = useDispatch();
    return useCallback(
        (params = {}) => {
            dispatch(showModal({ ...props, ...params }));
        },
        [dispatch, props]
    );
};

export const useHideModal = () => {
    const dispatch = useDispatch();
    const handleOnClose = useCallback(() => {
        dispatch(hideModal());
    }, [dispatch]);
    return {
        handleOnClose
    };
};
