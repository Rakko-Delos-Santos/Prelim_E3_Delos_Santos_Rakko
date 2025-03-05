import React from "react";

function UserInfo({ name }) {
  return (
    <div className="mt-3">
      <h3>User Info</h3>
      <p>Name: {name}</p>
    </div>
  );
}

export default UserInfo;
