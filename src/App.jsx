import {useEffect, useState, useCallback, useMemo} from 'react'
import ListForm from './component/ListForm'
import ItemList from './component/ItemList'
import ListTemplate from './component/ListTemplate'
import Pager from './component/Pager'

let id = 0;


function App() {
  

  const [item, setItem] = useState([]);
  const [input,setInput] = useState('');
  const [page, setPage] = useState(1);
  const [currentItem, setCurrentItem] = useState([]);
  const handlePageChange = useCallback((clickedPage) => setPage(clickedPage),[]);

  const pageCount = 10;
  let listCount = 80;
  const totalPage = Math.ceil(listCount / pageCount);

  useEffect(() => {
    const minItemId = (pageCount * (page - 1)) + 1;
    const maxItemId = pageCount * page;

    const nextItems = item.filter((item) => item.id >= minItemId && item.id <= maxItemId);

    setItem(nextItems);
  }, [page]);


  const Change = useCallback((e) => {
    setInput(e.target.value);
  },[]);

  const Create = useCallback(() => {
    setInput('');
    setItem(item.concat({
      id: id++,
      text: input
    }));

    listCount++;
  },[item,input]);

  
  const KeyPress = useCallback((e) => {
    if(e.key === 'Enter') {
      Create();
    }
  },[Create]);

  const ListData = (
    <ListForm
    value={input}
    onChange={Change}
    onCreate={Create}
    onKeyPress={KeyPress}
    />
  );
  

  return(
    <>
    <Pager page={page} onPageChange={handlePageChange} totalPage={totalPage}/>
    <ListTemplate data={ListData}>
      <ItemList items={item} page={currentItem}/>
    </ListTemplate>
    </>
  );
}

export default App;
