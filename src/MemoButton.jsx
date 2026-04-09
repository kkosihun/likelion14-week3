//메모에 들어가는 버튼만 있는 함수
//'추가', '삭제' CSS만
import React, { useState } from 'react';
function Buttonadd({add, onClick}) {
    return(
        <button 
            onClick={onClick}  
            style={{
                width: '70px',
                height: '50px',
                backgroundColor: 'rgb(77, 189, 90)',
                border: '1px solid black',
                fontSize: '20px',
                color: '#ffffff',
                borderRadius: '15px',
                cursor: 'grab',
            }}>
            {add}추가
            </button>

    )
    }

function Buttonadel({del, onClick}) {
     return(
        <button 
            onClick={onClick}
            style={{
                width: '70px',
                height: '50px',
                backgroundColor: 'rgb(164, 54, 54)',
                border: '1px solid black',
                fontSize: '20px',
                color: '#ffffff',
                borderRadius: '15px',
                cursor: 'grab',
                justifyContent: 'center',
            }}
        >
        {del}삭제
        </button>    
     )
    }




export {Buttonadd, Buttonadel};