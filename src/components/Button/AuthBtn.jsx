// AuthBtn.js
import React from 'react';

const AuthBtn = ({ title, name, disabled }) => {
  return (
    <button
      type="submit"
      className={`h-12 w-full rounded-full text-white font-medium text-lg transition-colors duration-200 ${
        disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#ff6433] cursor-pointer'
      }`}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default AuthBtn;
