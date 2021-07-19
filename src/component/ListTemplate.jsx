const ListTemplate = (props) => {
    const {data,children} = props;

    return (
        <div>
            <div>{data}</div>
            <div>{children}</div>
        </div>
        
    );
}

export default ListTemplate