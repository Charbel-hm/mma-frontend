import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CoachesList = () => {
    const [coaches, setCoaches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get('http://mma-backend-env.eu-north-1.elasticbeanstalk.com/coaches')
            .then(res => {
                setCoaches(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err.response || err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="section">
            <h2 className="section-title">🥊 Coaches</h2>
            {loading ? (
                <div className="loading">Loading coaches...</div>
            ) : coaches.length === 0 ? (
                <div className="empty-state">No coaches found</div>
            ) : (
                <div className="card-grid">
                    {coaches.map(c => (
                        <div key={c.id} className="card">
                            <div className="card-title">{c.name}</div>
                            <div className="card-detail">
                                <span>🎯</span>
                                <span>Specialty: {c.specialty}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CoachesList;

