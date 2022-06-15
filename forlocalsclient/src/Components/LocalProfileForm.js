import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Button, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { updateLocal } from '../Data/LocalData';

const initialState = {
    name: '',
    imgUrl: '',
    bio: '',
} 

export default function LocalProfileForm({ local }) {
    const [formInput, setFormInput] = useState(initialState)

    useEffect(() => {
        if(local.userId){
            setFormInput({
                name: local.name,
                imgUrl: local.imgUrl,
                bio: local.bio,
                firebaseKey: local.firebaseKey,
            });
        }
    }, [local]);

    const handleChange = (e) => {
        setFormInput((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };

    const resetForm = () => {
        setFormInput(initialState)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.warn('FORM OBJ', formInput)
        console.warn('fKey', local.firebaseKey)
        updateLocal(formInput).then(() => {
            resetForm();
        })
    }

    return (
        <Form>
            <FormGroup>
                <Input type="text" name="Name" id="Name" placeholder="Name:" value={formInput.name || ""} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Input type="url" name="imgUrl" id="imgUrl" placeholder="Img Url:" value={formInput.imgUrl || ""} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Input type="text" name="bio" id="bio" placeholder="Bio:" value={formInput.bio || ""} onChange={handleChange} />
            </FormGroup>
            <Button className='btn-success form-btn' onClick={handleSubmit}>Submit</Button>
        </Form>
    );
}

LocalProfileForm.propTypes = {
    local: PropTypes.shape(PropTypes.obj).isRequired,
    };