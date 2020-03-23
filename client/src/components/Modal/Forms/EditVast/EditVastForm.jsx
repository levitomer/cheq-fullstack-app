import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getVasts } from 'ducks/vasts/selectors';
import { getForm } from 'ducks/form/selectors';
import { useForm } from 'react-hook-form';
import { editVast } from 'ducks/vasts/actions';
import { invalidForm } from 'ducks/form/actions';
import * as VAST_POSITIONS from 'constants/vastPositions';
import * as validations from '../validations';
import { Form, Fields, Field, VastPosition, Label, Error } from '../Form.style';
import { SubmitModal } from '../../Modal.style';

export default function EditVastForm(props) {
    const vastId = props.fields;
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();
    const form = useSelector(getForm);
    const vasts = useSelector(getVasts);
    const vast = vasts.data.find(({ id }) => id === vastId);
    const onSubmit = data => {
        if (errors) {
            dispatch(invalidForm());
        }
        dispatch(editVast({ id: vastId, ...data }));
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Fields>
                <Label>Location</Label>
                <Field
                    name="location"
                    defaultValue={vast.location}
                    ref={register({ ...validations.location })}
                />
                {errors.location && (
                    <Error>Location value allowed up to 30 characters</Error>
                )}
                <Label>Picture URL</Label>
                <Field
                    name="vast_url"
                    defaultValue={vast.vast_url}
                    ref={register({ ...validations.vast_url })}
                />
                {errors.vast_url && <Error>Invalid image URL</Error>}
                <Label>Height</Label>
                <Field
                    name="height"
                    type="number"
                    defaultValue={vast.height}
                    ref={register({ ...validations.height })}
                />
                {errors.height && (
                    <Error>Height value allowed between 100 - 1000</Error>
                )}
                <Label>Width</Label>
                <Field
                    name="width"
                    type="number"
                    defaultValue={vast.width}
                    ref={register({ ...validations.width })}
                />
                {errors.width && (
                    <Error>Height value allowed between 100 - 1000</Error>
                )}
                <Label>Position</Label>
                <VastPosition
                    name="position"
                    defaultValue={vast.position}
                    ref={register()}
                >
                    {Object.values(VAST_POSITIONS).map(position => (
                        <option key={position}>{position}</option>
                    ))}
                </VastPosition>
            </Fields>

            {form.error && (
                <Error>At-least one field is required to edit a vast.</Error>
            )}

            <SubmitModal type="submit">Save</SubmitModal>
        </Form>
    );
}
