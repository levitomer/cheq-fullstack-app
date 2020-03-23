import React from 'react';
import { Container, CreateVast } from './Header.style';
import { useCreateVast } from 'components/Vasts/hooks';
import Logo from 'components/Logo/Logo';

export default function Header() {
    const handleCreateVast = useCreateVast();

    return (
        <Container>
            <Logo />
            VASTS
            <CreateVast onClick={handleCreateVast}>New vast</CreateVast>
        </Container>
    );
}
