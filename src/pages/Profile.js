import React from "react";
import UserInfo from "../components/UserInfo";
import ProfilePic from "../components/ProfilePic";

function Profile({ user, setUser }) {
  const handleNameChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      name: e.target.value,
    }));
  };

  return (
    <div className="container mt-5">
      <h1>Profile</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              value={user.name}
              onChange={handleNameChange}
            />
          </div>
          <UserInfo name={user.name} />
        </div>
        <div className="col-md-6">
          <ProfilePic />
        </div>
      </div>
    </div>
  );
}

export default Profile;
