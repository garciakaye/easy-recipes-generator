import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Card from 'react-bootstrap/Card';
import LottieUser from "../LottieFiles/LottieUser";
import { clearUser } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import EditProfileForm from "./EditProfileForm";

const Profile = () => {
  const username = useSelector(state => state.user.username)
  const user = useSelector(state => state.user);
  const firstName = user?.firstName;
  const lastName = user?.lastName;
  const id = useSelector(state => state.user.id)

  const [showForm, setShowForm] = useState(false);


  const dispatch = useDispatch()
  const navigate = useNavigate()


  function deleteProfile() {
    fetch(`/users/${id}`, {
      method: "DELETE",
    })
    localStorage.removeItem('jwt')
    dispatch(clearUser())
    navigate("/")
  }

  function handleEditClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <div className="lottie-user">
      <LottieUser />
      <Card className="profile-card">
        <ListGroup>
          <ListGroup.Item>First Name: {firstName}</ListGroup.Item>
          <ListGroup.Item>Last Name: {lastName}</ListGroup.Item>
          <ListGroup.Item>Username: {username}
            {showForm ? <EditProfileForm /> : null}
            <div className="edit-username-form">
              <button className="edit-username-btn" onClick={handleEditClick}><span role="img" aria-label="edit">
                ✏️
              </span></button>
            </div>
          </ListGroup.Item>
          <button className="delete-profile-btn" onClick={deleteProfile}>Delete Profile</button>
        </ListGroup>


      </Card>


    </div>
  );
};

export default Profile;
