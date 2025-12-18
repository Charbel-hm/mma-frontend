import React, { useState } from 'react';
import axios from 'axios';

const AddClassType = ({ onAdded }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) return;

        axios.post('http://localhost:5000/classType', { name })
            .then(res => {
                setName('');
                if (onAdded) onAdded();
            })
            .catch(err => console.error(err.response || err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="New Class Type" value={name} onChange={(e) => setName(e.target.value)} />
            <button type="submit">Add Class Type</button>
        </form>
    );
};

export default AddClassType;
