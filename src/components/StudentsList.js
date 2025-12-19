import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from '../config/api';

const StudentsList = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get(`${API_URL}students`)
            .then(res => {
                setStudents(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err.response || err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="section">
            <h2 className="section-title">👥 Students</h2>
            {loading ? (
                <div className="loading">Loading students...</div>
            ) : students.length === 0 ? (
                <div className="empty-state">No students found</div>
            ) : (
                <div className="card-grid">
                    {students.map(s => (
                        <div key={s.id} className="card">
                            <div className="card-title">{s.name}</div>
                            <div className="card-detail">
                                <span>👤</span>
                                <span>Age: {s.age}</span>
                            </div>
                            {s.classType && (
                                <div className="card-badge">{s.classType}</div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default StudentsList;

