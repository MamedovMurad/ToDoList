import { useState } from "react";
import { useActions } from "../../Hooks/useActions";
import { useAlert } from "../../Hooks/useALert";
import { useTypedSelector } from "../../Hooks/useTypedSelector";
import { selectTodo } from "../../Redux/ReSelect/Selector";

import "./index.css";
type InsertInputProps = {};

const InsertInput: React.FC<InsertInputProps> = () => {
    const [label, setlabel] = useState<string>("");
    const { addTodo } = useActions();
    const handleAlert =useAlert()
    const todoList = useTypedSelector(selectTodo)
    //any duzelt
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (label.length<1) return
        todoList.length<8 ?
        addTodo({
            id: Math.random(),
            label: label,
            text: "",
            isCompleted: false,
            star: false,
        }): handleAlert({type:'danger',text:'max 8 item',active:true});
        setlabel("");
    };
    return (
        <div className="insert__input">
            <form action="" onSubmit={handleSubmit}>
                <span className="circle_input"></span>
                <input
                    value={label}
                    type="text"
                    onChange={(e) => setlabel(e.target.value)}
                />
            </form>
        </div>
    );
};

export default InsertInput;
