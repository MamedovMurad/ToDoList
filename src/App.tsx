import InsertInput from "./Components/InsertInput";
import List from "./Container/List/List";
import "./Container/Layout/layout.css";
import { useActions } from "./Hooks/useActions";
import ColorList from "./Components/UI/ColorList";

import { useFetch } from "./Hooks/useFetch";
import PostList from "./Container/Post";
import { useTypedSelector } from "./Hooks/useTypedSelector";
import { postSelect } from "./Redux/ReSelect/Selector";


function App() {
  const { modalToggle, postAction } = useActions();
  const handleFetch1=useFetch(postAction);
  const post = useTypedSelector(postSelect);
  const handleFetch=()=>{

    post.length<1&&handleFetch1();
    modalToggle({
      toggle:true,
      component:<PostList/>,
      size:'large'
    })
  }

  return (
    <div className="App">
      
      <div className="button_modal">
        <button className="app__button" onClick={handleFetch} >
          Fetch Placeholder
        </button>
        <button
         className="app__button"
          onClick={() => {
            modalToggle({
              toggle: true,
              component: <ColorList/>,
              size: "medium",
            });
          }}
        >
          ...
        </button>
        
      </div>
      <List />

      
          
      <div className="inout__area">
        <InsertInput />
      </div>
    </div>
  );
}

export default App;
