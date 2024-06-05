import React from "react";

const Insight = ({iconClass, title, description, insightid}) => {
  return (
    <li>
      <i className={iconClass}></i>
      <span className="info">
        <h3 id={insightid}>{title}</h3>
        <p>{description}</p>
      </span>
    </li>
  );
};

export default Insight;

// import React from 'react';

// const MenuItem = ({ activeMenu, menuName, handleMenuClick, iconClass, label }) => {
//   return (
//     <li className={activeMenu === menuName ? "active" : ""} onClick={() => handleMenuClick(menuName)}>
//       <a href="#">
//         <i className={iconClass}></i>{label}
//       </a>
//     </li>
//   );
// };

// export default MenuItem;
