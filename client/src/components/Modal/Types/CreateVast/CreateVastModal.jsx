import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useForm } from 'react-hook-form';
import { createVast } from 'ducks/vasts/actions';
import * as VAST_POSITIONS from 'constants/vastPositions';
import {
    Fields,
    VastLocation,
    VastUrl,
    VastHeight,
    VastWidth,
    VastPosition,
    Label
} from './CreateVastModal.style';
import { SubmitModal } from '../../Modal.style';

export default function CreateVastModal(_) {
    const { register, handleSubmit, watch, errors } = useForm();
    const dispatch = useDispatch();
    const onSubmit = data => {
        dispatch(createVast({ ...data }));
    };

    return (
        // {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <Fields>
                <Label>Location</Label>
                <VastLocation name="location" ref={register} />
                {/* include validation with required or other standard HTML validation rules */}
                <Label>Picture URL</Label>
                <VastUrl name="vast_url" ref={register({ required: true })} />
                <Label>Height</Label>
                <VastHeight
                    name="height"
                    defaultValue={100}
                    ref={register({ required: true })}
                />
                <Label>Width</Label>
                <VastWidth
                    name="width"
                    defaultValue={100}
                    ref={register({ required: true })}
                />
                <Label>Position</Label>
                <VastPosition
                    name="position"
                    defaultValue={'bottom_right'}
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
