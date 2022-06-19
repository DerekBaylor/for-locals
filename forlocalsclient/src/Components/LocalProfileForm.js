import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Button, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { updateLocal } from '../Data/LocalData';

const initialState = {
    bio: '',
    email: '',
    firebaseKey: '',
    imgUrl: '',
    isAdmin: 'N',
    name: '',
    userId: '',
} 

export default function LocalProfileForm({ local, form, setForm, setPgBreak }) {
    const [formInput, setFormInput] = useState(initialState)

    useEffect(() => {
        if(local.userId){
            setFormInput(local);
        }
    }, [form]);

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
        updateLocal(formInput, local.firebaseKey).then(() => {
            resetForm();
        })
        setForm(false);
        setPgBreak(false);
    }

    return (
        <Form className='main-local-form-div'>
            <FormGroup>
                <Input className='local-form-name' type="text" name="name" id="name" placeholder="Name:" value={formInput.name || ""} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Input className='local-form-url' type="url" name="imgUrl" id="imgUrl" placeholder="Img Url:" value={formInput.imgUrl || ""} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Input className='local-form-bio' type="textarea" name="bio" id="bio" placeholder="Bio:" value={formInput.bio || ""} onChange={handleChange} />
            </FormGroup>
            <div className='hidden-div'>
                <FormGroup>
                    <Input type="email" name="email" id="email" placeholder="Email:" value={formInput.email} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Input type="text" name="firebaseKey" id="firebaseKey" placeholder="FirebaseKey:" value={formInput.firebaseKey} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Input type="text" name="userId" id="userId" placeholder="UserId:" value={formInput.userId} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Input type="text" name="isAdmin" id="isAdmin" placeholder="Is Admin:" value={formInput.isAdmin} onChange={handleChange} />
                </FormGroup>
            </div>
            <Button className='btn-success local-form-btn' onClick={handleSubmit}>SUBMIT</Button>
        </Form>
    );
}

LocalProfileForm.propTypes = {
    local: PropTypes.shape(PropTypes.obj).isRequired,
    form: PropTypes.bool.isRequired,
    setForm: PropTypes.func.isRequired,
    setPgBreak: PropTypes.func.isRequired,
    };