import React from "react";
import ProfileImage from "../Assets/Ppicture.png"; // Correct import

function ProfilePic() {
  return (
    <div className="mt-3">
      <h3>Profile Picture</h3>
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          overflow: "hidden", // Ensures the image stays within the circle
        }}
      >
        <img
          src={ProfileImage} // Use the imported image
          alt="Profile"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensures the image covers the circle
          }}
        />
      </div>
    </div>
  );
}

export default ProfilePic;
