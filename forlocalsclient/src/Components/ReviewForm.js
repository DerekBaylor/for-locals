import React, { useState, useEffect } from "react";

const initialState = {
    userId: '',
    businessId: '',
    reviewTitle: '',
    reviewText: '',
    imgUrl: '',
    score: '',
};

export default function ReviewForm({obj}) {
    const [fromInput, setformInput] = useState(initialState);

    useEffect(() => {
        if (obj.id) {
            setformInput(obj);
        } else {
            setformInput({ ...initialState})
        }
    }, [obj]);

  return (
    <form className='form-container'>
        <div className='form-group'>
            <label className='form-label'>
                <span className='from-text'>Label 1</span>
                <input 
                    className='form-input'
                >
                </input>
            </label>
        </div>
    </form>
  )
}
