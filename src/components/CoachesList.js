import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CoachesList = () => {
    const [coaches, setCoaches] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/coaches')
            .then(res => setCoaches(res.data))
            .catch(err => console.error(err.response || err));
    }, []);

    return (
        <div>
            <h2>Coaches</h2>
            <ul>
                {coaches.length === 0 ? <li>No coaches found</li> : coaches.map(c => (
                    <li key={c.id}>{c.name} - {c.specialty}</li>
                ))}
            </ul>
        </div>
    );
};

export default CoachesList;
