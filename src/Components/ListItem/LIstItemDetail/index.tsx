import { useState } from "react";
import { useActions } from "../../../Hooks/useActions";
import { useAlert } from "../../../Hooks/useALert";
import { Itodo } from "../../../Model/todo";
import YesNo from "../../UI/YesNo";
import './index.css'

type ListItemDetailProps = {
    item:Itodo
}
 
const ListItemDetail = ({item}:ListItemDetailProps) => {
   const handleAlert = useAlert()
const [data, setData] = useState<Itodo>(item)
   const{UpdateTodo,modalToggle}= useActions()
    const handleSubmit= (e:any)=>{
        e.preventDefault()
      data&&UpdateTodo(data)
     modalToggle({component:<div></div>,size:'large', toggle:false})
      handleAlert({type:'success',text:'successfully',active:true})   
    }
    return (
        <div className="single_item_update">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <label htmlFor="label">Title</label>
                    <input type="text" id="label" value={data.label} onChange={(e)=>setData({...item,label:e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="text">Detail</label>
                    <textarea name="" id="text" value= {data.text}
                    onChange={(e)=>setData({...item,text:e.target.value})} >
                    
                        </textarea>
                  
                </div>
                <div>
                    <label htmlFor="check">Comleted</label>
                  
                    <input type="checkbox" id="check" checked={data.isCompleted} onChange={()=>setData({...item,isCompleted:!data.isCompleted})}/>
                </div>
                <div className="action">
                <input type="submit" value="Update" />
                <input type="button" value="Delete"  onClick={()=>modalToggle({component:<YesNo id={item.id}/>,size:'small',toggle:true})}/>
                </div>
            </form>
        </div>
    );
}
 
 
export default ListItemDetail;