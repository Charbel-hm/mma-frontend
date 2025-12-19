import React, { useState } from 'react';
import axios from 'axios';

const AddClassType = ({ onAdded }) => {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;

        setLoading(true);
        axios.post('http://mma-backend-env.eu-north-1.elasticbeanstalk.com/classType', { name })
            .then(res => {
                setName('');
                setLoading(false);
                if (onAdded) onAdded();
            })
            .catch(err => {
                console.error(err.response || err);
                setLoading(false);
            });
    };

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="form-input"
                    placeholder="Enter new class type (e.g., Brazilian Jiu-Jitsu, Muay Thai)" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    disabled={loading}
                />
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={loading || !name.trim()}
                >
                    {loading ? 'Adding...' : '+ Add Class Type'}
                </button>
            </form>
        </div>
    );
};

export default AddClassType;

