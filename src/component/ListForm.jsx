const ListForm = ({value, onChange, onCreate}) => {
    return (
        <div>
            <input value={value} onChange={onChange} placeHolder="여기에 입력하쇼"></input>
            <button onClick={onCreate}>추가</button>
        </div>
        
    );
}

export default ListForm