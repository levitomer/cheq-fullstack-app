import React, { lazy, Suspense } from 'react';
import {
    ModalOverlay,
    ModalBox,
    ModalBody,
    ModalHeader,
    ModalTitle,
    CloseModal
} from './Modal.style';
import { useModal, useHideModal } from './hooks';

export default function ModalContainer() {
    // Get modal params from redux store

    const { modal } = useModal();
    const { title, type, fields, toggle } = modal;

    const { handleOnClose } = useHideModal();
    // Import dynamic component according to component type param
    const Modal = lazy(() => import('components/Modal/Types/' + type + '.jsx'));
    return (
        <ModalOverlay toggle={toggle}>
            <ModalBox>
                <ModalHeader>
                    {title && <ModalTitle>{title}</ModalTitle>}
                    <CloseModal onClick={handleOnClose}>Close</CloseModal>
                </ModalHeader>
                <ModalBody>
                    <Suspense fallback={null}>
                        {type ? <Modal fields={fields} /> : fields}
                    </Suspense>
                </ModalBody>
            </ModalBox>
        </ModalOverlay>
    );
}
