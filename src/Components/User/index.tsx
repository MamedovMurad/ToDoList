
import './index.css'
type UserProps = {}
 
const User:React.FC<UserProps> = () => {
    return (
        <div className="User__Component">
           <div className="image">
               <span>MM</span>
           </div>
           <div className="user__content">
               <p>Murad Mammadov</p>
               <p>muradmemmedov955@gmail.com</p>
           </div>
        </div>
    );
}
 
 
export default User;