import React from "react";

function Settings({ user, toggleDarkMode }) {
  return (
    <div className="container mt-5">
      <h1>Settings</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="darkModeToggle"
              checked={user.settings.darkMode}
              onChange={toggleDarkMode}
            />
            <label className="form-check-label" htmlFor="darkModeToggle">
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
