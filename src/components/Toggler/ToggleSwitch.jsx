import React, { useState } from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="toggle-switch-container">
      <span className="label-off">Off</span>
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={handleToggle} />
        <span className="slider"></span>
      </label>
      <span className="label-on">On</span>
    </div>
  );
};

export default ToggleSwitch;