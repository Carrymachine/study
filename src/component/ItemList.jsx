import Item from './Item'
import { memo } from 'react'

const ItemList = ({items,page}) => {
    
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

export default memo(ItemList);