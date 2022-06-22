import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, FormGroup, Button, Input } from 'reactstrap';
import { updateLocal, getLocalByFKey } from '../Data/LocalData';

const initialState = {
    bio: '',
    email: '',
    firebaseKey: '',
    imgUrl: '',
    isAdmin: 'N',
    name: '',
    userId: '',
} 

export default function LocalProfileForm({ local, setLocal, setForm, setPgBreak, profCount, setProfCount }) {
    const { firebaseKey } = useParams();
    const [formInput, setFormInput] = useState(initialState)

    useEffect(() => {
        if(local.userId){
            setFormInput(local);
        };
    }, []);

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
        });
        getLocalByFKey(firebaseKey).then(setLocal);
        setForm(false);
        setPgBreak(false);
        setProfCount(profCount+1);
    };

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
    setLocal: PropTypes.func.isRequired,
    setForm: PropTypes.func.isRequired,
    setPgBreak: PropTypes.func.isRequired,
    profCount: PropTypes.number.isRequired,
    setProfCount: PropTypes.func.isRequired,
    };