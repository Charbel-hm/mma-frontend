import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentsList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://mma-backend-env.eu-north-1.elasticbeanstalk.com/students')
            .then(res => setStudents(res.data))
            .catch(err => console.error(err.response || err));
    }, []);

    return (
        <div>
            <h2>Students</h2>
            <ul>
                {students.length === 0 ? <li>No students found</li> : students.map(s => (
                    <li key={s.id}>{s.name} ({s.age}) - {s.classType}</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentsList;
