import React, { useState } from 'react';
import { useSelector } from "react-redux";

const EditProfileForm = () => {
  const id = useSelector(state => state.user.id);
  const username = useSelector(state => state.user.username)

  const [newUsername, setNewUsername] = useState(username);

  function handleSubmit() {
    // e.preventDefault();

    fetch(`/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: newUsername,
      }),
    })
      .then((r) => r.json())
      .then((newName) => setNewUsername(newName.username))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newUsername}
        className="new-username-input"
        onChange={(e) => setNewUsername(e.target.value)}
      >
      </input>
      <button className="save-btn" type="submit">💾</button>
    </form>
  )
}

export default EditProfileForm