import {useState} from 'react'
import ListForm from './component/ListForm'
import ItemList from './component/ItemList'
import ListTemplate from './component/ListTemplate'

let id = 0;

function App() {

  const [item, setItem] = useState([]);
  const [input,setInput] = useState('');

  const Change = (e) => {
    setInput(e.target.value);
  }

  const Create = () => {
    setInput('');
    setItem(item.concat({
      id: id++,
      text: input
    }));
  }

  const ListData = (
    <ListForm
    value={input}
    onChange={Change}
    onCreate={Create}
    />
  );
  

  return(
    <>
    <ListTemplate data={ListData}>
      <ItemList items={item}/>
    </ListTemplate>
    </>
  );
}

export default App;
