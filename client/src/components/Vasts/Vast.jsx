import React from 'react';
import {
    Box,
    Options,
    EditVast,
    ViewVastXML,
    Thumbnail,
    Backdrop,
    Location,
    Height,
    Width,
    Position
} from './Vast.style';
import { useEditVast, useViewVastXML } from './hooks';

export default function Vast(props) {
    const { id, location, vast_url, position, height, width } = props.vast;
    const handleEditVast = useEditVast(id);
    const handleViewVastXML = useViewVastXML(id);
    return (
        <Thumbnail>
            <Backdrop img={vast_url}>
                <Options>
                    <EditVast onClick={handleEditVast}>Edit</EditVast>
                    <ViewVastXML onClick={handleViewVastXML}>XML</ViewVastXML>
                </Options>
            </Backdrop>
            <Box>
                <Location>Location: {location}</Location>
                <Position>Position: {position.replace('_', ' ')}</Position>
                <Height>Height: {height}</Height>
                <Width>Width: {width}</Width>
            </Box>
        </Thumbnail>
    );
}
