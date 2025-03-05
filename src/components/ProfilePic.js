import React from "react";
import ProfileImage from "../Assets/Ppicture.png"; 

function ProfilePic() {
  return (
    <div className="mt-3">
      <h3>Profile Picture</h3>
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <img
          src={ProfileImage} 
          alt="Profile"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", 
          }}
        />
      </div>
    </div>
  );
}

export default ProfilePic;
