import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddClassType from './AddClassType';

const ClassTypeList = () => {
    const [classTypes, setClassTypes] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchClassTypes = () => {
        setLoading(true);
        axios.get('http://mma-backend-env.eu-north-1.elasticbeanstalk.com/classType')
            .then(res => {
                setClassTypes(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err.response || err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchClassTypes();
    }, []);

    return (
        <div className="section">
            <h2 className="section-title">🥋 Martial Arts Types</h2>
            <AddClassType onAdded={fetchClassTypes} />
            {loading ? (
                <div className="loading">Loading class types...</div>
            ) : classTypes.length === 0 ? (
                <div className="empty-state">No class types found. Add one above!</div>
            ) : (
                <div className="badge-list">
                    {classTypes.map(ct => (
                        <span key={ct.id} className="badge">{ct.name}</span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ClassTypeList;

