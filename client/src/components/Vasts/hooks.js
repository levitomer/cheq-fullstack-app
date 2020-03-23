import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from 'ducks/modal/actions';

export const useCreateVast = () => {
    const dispatch = useDispatch();
    return useCallback(() => {
        dispatch(
            showModal({
                title: 'Create New Vast',
                type: 'CreateVast/CreateVastForm',
                fields: {}
            })
        );
    }, [dispatch]);
};

export const useEditVast = id => {
    const dispatch = useDispatch();
    return useCallback(() => {
        dispatch(
            showModal({
                title: 'Edit Vast',
                type: 'EditVast/EditVastForm',
                fields: id
            })
        );
    }, [dispatch]);
};

export const useViewVastXML = id => {
    return useCallback(() => {
        window.open(`vast?id=${id}`, '_blank');
    });
};
