import ListItem from "../../Components/ListItem/ListItem";
import { useTypedSelector } from "../../Hooks/useTypedSelector";
import { selectTodo } from "../../Redux/ReSelect/Selector";
import './List.css'
 
const List:React.FC = () => {
    const List = useTypedSelector(selectTodo)
    return (
        <div>
             <div  className="list__parent">
            {
                List.length>0 && List.map(item=>(
                   
                    <ListItem item={item} key={item.id}/>
                  
                    
                ))
            }
            </div>
        </div>
    );
}
 
 
export default List;

