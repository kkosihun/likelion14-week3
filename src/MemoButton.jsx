//메모에 들어가는 버튼만 있는 함수
//'추가', '삭제'
//'추가'를 눌렀을 때 텍스트와 '삭제'버튼이 뜸
//'삭제'버튼을 누르면 텍스트 삭제

function Buttonadd({ add, onClick }) {
    return (
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
                cursor: 'pointer',
            }}
        >
            {add}
        </button>
    );
}

function Buttondel({ del, onClick }) {
    return (
        <button
            onClick={onClick}
            style={{
                width: '70px',
                height: '50px',
                backgroundColor: 'rgb(194, 78, 78)',
                border: '1px solid black',
                fontSize: '20px',
                color: '#ffffff',
                borderRadius: '15px',
                cursor: 'pointer',
            }}
        >
            {del}
        </button>
    );
}

export {Buttonadd, Buttondel};