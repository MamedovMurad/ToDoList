import Alert from "../../Components/UI/Alert";
import Modal from "../../Components/UI/Modal";
import { useTypedSelector } from "../../Hooks/useTypedSelector";
import { choosenColor } from "../../Redux/ReSelect/Selector";
import Aside from "./Aside";
import './layout.css'

const Layout: React.FC = ({ children }) => {
  const color = useTypedSelector(choosenColor)
  return (
    <div className="main__body">
      <aside>
        <Aside />
      </aside>
      <main style={{background:color}}>{children}</main>

      <Modal/>
      <Alert/>
    </div>
  );
};

export default Layout;
