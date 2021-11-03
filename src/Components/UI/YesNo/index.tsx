import { useActions } from '../../../Hooks/useActions';
import { useAlert } from '../../../Hooks/useALert';

import './index.css'
type YesNoProps = {
    id?:number
}
 
const YesNo:React.FC<YesNoProps> = ({id}:YesNoProps) => {
    const  {removeFromTodo, modalToggle, removeAllTodo} =useActions()
    const handle = useAlert();
    const removeTodo= ()=>{
       id? removeFromTodo(id):removeAllTodo()
        handle({type:'success',text:'successfully',active:true})
        modalToggle({component:<div></div>, toggle:false,size:'small'})
    }
    return (
        <div className="yes_no_modal">
            <p className="text">Əminsiniz?</p>

            <div className="action_type_button">
                <button className="Ok_button" onClick={removeTodo}>Ok</button>
                <button className="canncel_button">Cancel</button>
            </div>
        </div>
    );
}
 
 
export default YesNo;