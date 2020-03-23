import React from 'react';
import { Container, CreateVast } from './Header.style';
import { useCreateVast } from 'components/Vasts/hooks';
// import Logo from 'assets/Logo.png';

export default function ModalContainer() {
    const handleCreateVast = useCreateVast();

    return (
        <Container>
            <CreateVast onClick={handleCreateVast}>New vast</CreateVast>
            {/* <Logo img={''} /> */}
        </Container>
    );
}
