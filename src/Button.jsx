function Button ({text}){
    return (
        <button
            style = {{
                width: '450px',
                padding: '16px',
                backgroundColor: '#C6E',
                border: '1px solid black',
                fontSize: '18px',
                fontWeight: 'bold',
                borderRadius: '0px',
                cursor: 'grab',
            }}
        >
            {text}

        </button>
    );
}

export default Button;