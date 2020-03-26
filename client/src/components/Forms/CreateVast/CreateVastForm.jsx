import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { getForm } from 'ducks/form/selectors';
import { createVast } from 'ducks/vasts/actions';
import { invalidForm } from 'ducks/form/actions';
import * as VAST_POSITIONS from 'constants/vastPositions';
import * as validations from '../validations';
import { Submit } from '../Form.style';
import { Form, Fields, Field, VastPosition, Label, Error } from '../Form.style';

export default function CreateVastForm(_) {
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();
    const form = useSelector(getForm);
    const onSubmit = data => {
        if (errors) {
            dispatch(invalidForm());
        }
        dispatch(createVast({ ...data }));
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Fields>
                <Label>Location</Label>
                <Field
                    name="location"
                    ref={register({ validate: validations.location })}
                />
                {errors.location && (
                    <Error>Location value allowed up to 30 characters</Error>
                )}
                <Label>Picture URL</Label>
                <Field
                    name="vast_url"
                    ref={register({ validate: validations.vast_url })}
                />
                {errors.vast_url && <Error>Invalid image URL</Error>}
                <Label>Height</Label>
                <Field
                    name="height"
                    defaultValue={100}
                    ref={register({ ...validations.height })}
                />
                {errors.height && (
                    <Error>Height value allowed between 100 - 1000</Error>
                )}
                <Label>Width</Label>
                <Field
                    name="width"
                    defaultValue={100}
                    ref={register({ ...validations.width })}
                />
                {errors.width && (
                    <Error>Height value allowed between 100 - 1000</Error>
                )}
                <Label>Position</Label>
                <VastPosition
                    name="position"
                    defaultValue={'bottom_right'}
                    ref={register()}
                >
                    {Object.values(VAST_POSITIONS).map(position => (
                        <option key={position}>{position}</option>
                    ))}
                </VastPosition>
            </Fields>

            {form.error && (
                <Error>At-least one field is required to create a vast</Error>
            )}

            <Submit type="submit">Create</Submit>
        </Form>
    );
}
