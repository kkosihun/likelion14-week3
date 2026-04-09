//여기서 useState 사용해봐도 될듯
//'추가'를 눌렀을 때 텍스트와 '삭제'버튼이 뜸
//'삭제'버튼을 누르면 텍스트 삭제
// import React, { useState } from 'react'
// import {Buttonadd, Buttonadel} from './MemoButton'

import React from "react";

function MemoList(){

    return (
        <div>
            asdf
        </div>
    )

}

export default MemoList;




























// import { useState } from "react";
// import {Buttonadd, Buttondel} from './MemoButton'

// function MemoText() {
//     const [text, setText] = useState(""); //text를 계속 저장
//     const [memo, setMemo] = useState([]); //메모 배열 저장

//     //'추가' 버튼 클릭시
//     function Clickadd() { 
//         <div style={{
//             backgroundColor: '#ffffff',
//         }}>
//             <p style={{
//             backgroundColor: '#ffffff',
//         }}>
//                 <Buttonadd onClick={() => {setText(text+1)}} />
//             </p>

//         </div>      
//     }

//     //'삭제' 버튼 클릭시
//     function Clickdel() { 
//         // const Clicknewdel = memo.filter((setMemo) => {
//         //     if(onClick = {Clickdel});
//         // })
//     }

//     return(
//         <div>
//             <div style={{
//                 display: 'flex',
//                 gap: '10px',

                
//             }}>
//                 <input 
//                     style={{
//                         borderRadius:'15px',
//                     }}
//                    type="text"
//                    placeholder="메모를 입력하세요"
//                      />
//                <Buttonadd add="추가" onClick={Clickadd} />
//             </div>

//             <div>
                
//             </div>
            
//         </div>
//     );
// }

// export default MemoText;