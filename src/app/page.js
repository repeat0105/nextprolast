
import React from "react";
import "../app/sass/page.scss";

import Loginpage from "./(pages)/login/page";
import UseImagecom from '@/app/component/UseImagecom.jsx'



function apppege(props) {

  return (
    <div className="app">
      <div >
        
        <UseImagecom />
        <div>
          <div>
            <h2>HEALING LINE</h2>
            <p>재충전,힐링,휴식 중 하나만 달성하기</p>
          </div>
          <div>
            <Loginpage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default apppege;


