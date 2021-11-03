import { createPortal } from "react-dom";
import { useActions } from "../../../Hooks/useActions";
import { useTypedSelector } from "../../../Hooks/useTypedSelector";
import { modalComponent, modalSize, modalToggless } from "../../../Redux/ReSelect/Selector";
import './index.css'


const modalRoot = document.getElementById("modal") as HTMLElement;
const Modal: React.FC = () => {
  const modalElement = useTypedSelector(modalComponent);
  const modalTog = useTypedSelector(modalToggless)
  const size = useTypedSelector(modalSize)
  const { modalToggle } = useActions();
  return createPortal(
    <>
      {modalTog && (
        <div className={`main_modal ${size}`}>
          <button className="close__modal" onClick={() => modalToggle({toggle:false,component:<div></div>,size:'large'})}>X</button>
           {modalElement}
        </div>
      )}
    </>,
    modalRoot
  );
};

export default Modal;
