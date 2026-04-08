//메인 함수
import {Buttonadd, Buttondel } from './MemoButton'
import MemoText from './MemoInsert'

function Memo(){
    return(
        <div style={{
            display: 'flex',
            backgroundColor: '#f0e085',
            minHeight: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '10px',
        }}>
            <h1>MemoList</h1>

            <MemoText />

            
            <div>
                <Buttondel del = "삭제"/>  
            </div>
          
        </div>
    );
}

export default Memo;
