//'추가'버튼을 누르면 삭제버튼과 말풍선이 계속 떠있는
//여기서 useState 사용해봐도 될듯
import { useState } from "react";
import {Buttonadd, Buttondel} from './MemoButton'

function MemoText() {
    const [text, setText] = useState(""); //text를 계속 저장
    const [memo, setMemo] = useState([]); //메모 배열 저장

    //'추가' 버튼 클릭시
    function Clickadd() { 
        const newMemo = {
            id: Date.now(),
            content: text
        };
        //기존 메모 배열에 newMemo를 합침
        //newMemo가 위로
        setMemo([newMemo, ...memo]);

        //저장돼서 텍스트 초기화
        setText("");
    }

    //'삭제' 버튼 클릭시
    function Clickdel(id) { 
         setMemo(memo.filter(item => item.id !== id));
    }

    return(
        <div>
            <div style={{
                display: 'flex',
                gap: '10px',

                
            }}>
                <input 
                    style={{
                        borderRadius:'15px',
                    }}
                   type="text"
                   placeholder="메모를 입력하세요"
                     />
               <Buttonadd add="추가" onClick={Clickadd} />
            </div>

            <div>
                
            </div>
            
        </div>
    );
}

export default MemoText;