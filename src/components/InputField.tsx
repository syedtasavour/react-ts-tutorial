import { useRef } from "react";
import "./styles.css";
interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({todo,setTodo,handleAdd}:InputFieldProps) => {
 const inputRef = useRef<HTMLInputElement>(null);
  return (
   <form className="input" onSubmit={(e) => {
    handleAdd(e);
    inputRef.current?.blur(); // Remove focus from input after adding
   }}>
    <input type="input" placeholder="Enter a task" className="input__box"
    ref={inputRef}
    value={todo}
    onChange={(e) => setTodo(e.target.value)}
    />
    <button className="input__submit" type="submit">
      Add Task
    </button>
   </form>
  )
}

export default InputField
