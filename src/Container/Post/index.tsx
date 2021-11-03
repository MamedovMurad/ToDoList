
import Spinner from "../../Components/UI/Loading/spinner";
import { useTypedSelector } from "../../Hooks/useTypedSelector";

import { loadingSelect, postSelect } from "../../Redux/ReSelect/Selector";
import './index.css'
 
const PostList:React.FC = () => {
    const posts =  useTypedSelector(postSelect)
    const load =  useTypedSelector(loadingSelect)
   
    
    return (
        <div className={`post__list ${posts.length>0&&"active__list"}`}>
           <div style={{ textAlign:'center', width:'100%'}}>
    {
       load&&<Spinner/>
     }
    </div>
      { 
       posts.map(item=>(

         item.id<10 &&<p key={item.id}>{item.body}</p>
        ))
      }
        </div>
    );
}
 
 
export default PostList;