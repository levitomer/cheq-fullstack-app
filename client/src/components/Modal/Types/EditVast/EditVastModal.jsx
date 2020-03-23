import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import * as selectors from 'ducks/vasts/selectors';
import { useForm } from 'react-hook-form';
import { editVast } from 'ducks/vasts/actions';
import * as VAST_POSITIONS from 'constants/vastPositions';
import {
    Fields,
    VastLocation,
    VastUrl,
    VastHeight,
    VastWidth,
    VastPosition,
    Label
} from './EditVastModal.style';
import { SubmitModal } from '../../Modal.style';

function EditVastModal(props) {
    const vastId = props.fields;
    const { register, handleSubmit, watch, errors } = useForm();
    const dispatch = useDispatch();
    const onSubmit = data => {
        dispatch(editVast({ id: vastId, ...data }));
    };

    const vasts = useSelector(selectors.getVasts);
    const vast = vasts.data.find(({ id }) => id === vastId);

    return (
        // {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <Fields>
                <Label>Location</Label>
                <VastLocation
                    name="location"
                    defaultValue={vast.location}
                    ref={register}
                />
                {/* include validation with required or other standard HTML validation rules */}
                <Label>Picture URL</Label>
                <VastUrl
                    name="url"
                    defaultValue={vast.vast_url}
                    ref={register({ required: true })}
                />
                <Label>Height</Label>
                <VastHeight
                    name="height"
                    defaultValue={vast.height}
                    ref={register({ required: true })}
                />
                <Label>Width</Label>
                <VastWidth
                    name="width"
                    defaultValue={vast.width}
                    ref={register({ required: true })}
                />
                <Label>Position</Label>
                <VastPosition
                    name="position"
                    defaultValue={vast.vast_position}
                    ref={register({ required: true })}
                >
                    {Object.values(VAST_POSITIONS).map(position => (
                        <option key={position}>{position}</option>
                    ))}
                </VastPosition>
            </Fields>

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <SubmitModal type="submit">Save</SubmitModal>
        </form>
    );
}

export default EditVastModal;
