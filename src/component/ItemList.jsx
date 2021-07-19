import Item from './Item'

const ItemList = ({items}) => {
    
    const Items = items.map(({id, text}) => (
        <Item
            index = {id}
            article = {text}
        />
    ));

    return(
        <div>
            {Items}
        </div>
    );
}

export default ItemList