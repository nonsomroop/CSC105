import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { studentId } = useParams();

  return (
    <div>
      <h1 className="typing-effect">This Student ID of user is {studentId}</h1>
    </div>
  );
};

export default Profile;