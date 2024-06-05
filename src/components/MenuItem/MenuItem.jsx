import React from 'react';

const MenuItem = ({ activeMenu, menuName, handleMenuClick, iconClass, label }) => {
  return (
    <li className={activeMenu === menuName ? "active" : ""} onClick={() => handleMenuClick(menuName)}>
      <a href="#">
        <i className={iconClass}></i>{label}
      </a>
    </li>
  );
};

export default MenuItem;