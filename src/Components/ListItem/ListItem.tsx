import { useActions } from "../../Hooks/useActions";
import { Itodo } from "../../Model/todo";
import "./ListItem.css";
import ListItemDetail from "./LIstItemDetail";
interface IProps {
  item: Itodo;
}
const ListItem: React.FC<IProps> = ({ item }: IProps) => {
  const { completeTodo,modalToggle } = useActions();
  return (
    <div>
      <div className="box">
        <input
          type="checkbox"
          checked={item.isCompleted}
          onChange={() =>
            completeTodo({ id: item.id, isComplete: !item.isCompleted })
          }
        />
          <div>
          <p
          style={
            item.isCompleted
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {" "}
          {item.label}
          
        </p>
            <span onClick={()=>modalToggle({size:'large',component:<ListItemDetail item={item}/>,toggle:true})}>...</span>
          </div>
      
      </div>
    
    </div>
  );
};

export default ListItem;
