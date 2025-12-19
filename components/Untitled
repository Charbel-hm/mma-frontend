import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddClassType from './AddClassType';

const ClassTypeList = () => {
    const [classTypes, setClassTypes] = useState([]);

    const fetchClassTypes = () => {
        axios.get('http://mma-backend-env.eu-north-1.elasticbeanstalk.com/classType')
            .then(res => setClassTypes(res.data))
            .catch(err => console.error(err.response || err));
    };

    useEffect(() => {
        fetchClassTypes();
    }, []);

    return (
        <div>
            <h2>Martial Arts Types</h2>
            <AddClassType onAdded={fetchClassTypes} />
            <ul>
                {classTypes.length === 0 ? <li>No types found</li> : classTypes.map(ct => (
                    <li key={ct.id}>{ct.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ClassTypeList;
