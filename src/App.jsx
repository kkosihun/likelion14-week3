// //메인 함수
import React, { useState } from 'react';
import {Buttonadd, Buttonadel} from './MemoButton'
import MemoList from './MemoInsert';


function Memo(){
    const [text, setText] = useState('');//text를 계속 저장
    const [memo, setMemo] = useState([]);//메모 배열 저장
    const addClick = () => {
        setMemo([text, ... memo]) //최근에 추가한 목록이 위로
        setText('')    //추가 버튼 누르면 텍스트 초기화
        // console.log(text);
    };

    //1. 지울 번호(delindex)를 가져옴
    const delClick = (delindex) => {
        const newMemo = memo.filter((_, text) => text !== delindex);
        setMemo(newMemo)
    };
    
  

    return(
        <div 
            style={{
            display: 'flex',
            backgroundColor: '#f0e085',
            minHeight: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '10px',
        }}>
            <h1>MemoList</h1>
            <div>
                <input 
                    style={{    //텍스트 CSS
                        margin: '10px',
                        width: '300px',
                        height: '40px',
                        borderRadius:'10px',
                    }}
                    value={text} 
                    type="text" 
                    onChange={(e) => setText(e.target.value)}/>
                <Buttonadd onClick = {addClick} />

            </div>
            <p>
                {memo.map((memo, text) => {
                 return (
                    <p 
                        style={{
                            width: '400px',
                            height: '60px',
                            backgroundColor:'#ffffff',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems:'center',
                            borderRadius:'10px',
                            padding: '10px',
                            
                        }}>

                        {memo}
                        <Buttonadel onClick={() => delClick(text)}/>
                    </p>
                        
                    );
                    })}
            </p>
        </div>
    );
}

export default Memo;