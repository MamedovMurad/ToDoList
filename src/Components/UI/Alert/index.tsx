import { createPortal } from "react-dom";
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import { alertText, alertType,alertActive } from "../../../Redux/ReSelect/Selector";
import './index.css'


const alertRoot = document.getElementById("alert") as HTMLElement;
const Alert: React.FC = () => {
  const text = useTypedSelector(alertText);
  const type = useTypedSelector(alertType)
  const active = useTypedSelector(alertActive)
  

  return createPortal(
    <>
      {active && (
        <div className={`main_alert ${type}`}>
          
         <p>{text}</p>
        </div>
      )}
    </>,
    alertRoot
  );
};

export default Alert;
