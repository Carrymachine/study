const Item = (props) => {
    const {index, article} = props;

    return (
        <li>{article}</li>
    );
};

export default Item