import React, { useState } from 'react';
import axios from 'axios';
import "./LoginPage.css";



function LoginPage() {

    return(
        <div className="boxWrap">
        <div className="boxContent">
            <div className="title">
                이메일과 비밀번호를 입력해주세요
            </div>
            <div className="inputContainer">
            <div style={{fontSize: "30px"}}>이메일</div>
            <input className="inputId"></input>
            <div style={{fontSize: "30px"}}>비밀번호</div>
            <input className="inputId"></input>
            </div>
            <form>
                <button className="Checkbutton">확인</button>
            </form>
        </div>
        
        </div>

    );
}

export default LoginPage;