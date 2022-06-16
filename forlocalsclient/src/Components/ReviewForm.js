import React, { useState, useEffect } from "react";
import { addReview } from "../Data/ReviewData";

const initialState = {
    userId: '', 
    businessId: '', 
    reviewTitle: '',
    reviewText: '',
    imgUrl: '',
    score: '',
};

export default function ReviewForm({busObj}) {
    const [fromInput, setFormInput] = useState(initialState);

    useEffect(() => {
        if (busObj.id) {
            setFormInput(busObj);
        } else {
            setFormInput({ ...initialState})
        }
    }, [busObj]);

    const resetForm = () => {
        setFormInput(initialState);
      };

      const handleSubmit = (e) => {
          e.preventDefault();
          addReview()
      }

  return (
    <form className=' form form-container'>
        <div className='form-group'>
        <label className='form-label'>
                <input 
                    className='form-input'
                    placeholder='Score'
                >
                </input>
            </label>
            <label className='form-label'>
                <input 
                    className='form-input'
                    placeholder='Review Title'
                >
                </input>
            </label>
            <label className='form-label'>
                <textarea 
                    className='form-input text-input'
                    placeholder='Review Text'
                    type='text'
                >
                </textarea>
            </label>
            <label className='form-label'>
                <input 
                    className='form-input'
                    placeholder='Add an Image'
                >
                </input>
            </label>
            <div className="form-btn-group">
          <button
            className="btn btn-primary form-btn btn-success"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="btn btn-primary form-btn btn-warning"
            type="submit"
            onClick={resetForm}
          >
            Clear
          </button>
        </div>
        </div>
    </form>
  )
}
