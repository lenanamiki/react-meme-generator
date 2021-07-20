import React from 'react';

function Header() {
  return (
    <div>
      <div className="header">
        <img className="icon-img" src="../../assets/images/trollFace.png" alt="icon" />
        <div className="header-text">
          <h3>Randomeme</h3>
          <p>Auto generate VERY random memes</p>
        </div>
        <img className="icon-img" src="../../assets/images/trollFace.png" alt="icon" />
      </div>
      <div className="message">
        <p>⚠️ Caution: May or may not make any sense ⚠️</p>
      </div>
    </div>
  );
}

export default Header;
