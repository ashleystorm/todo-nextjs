import { todoProps } from "@/types";
import Button from "../button/Button";
import Form from "../form/Form";
import Input from "../input/Input";
import * as actions from "@/actions";
import { FaCheck } from "react-icons/fa";

const ChangeTodo = ({ todo }: { todo: todoProps }) => {
  return (
    <Form action={actions.changeStatus}>
    {/*
    we grab the input from the form element (hidden) and pass it to the our prisma.schema file 
    that will search for the todo associated with the unique _id
  */}
      <Input name="inputId" value={todo.id} type="hidden"></Input>
      <Button
        text={<FaCheck />} // icon
        type="submit"
        actionButton
        // if todo is completed, then the button will be green else, it will be blue
        bgColor={todo.isCompleted ? "bg-green-400" : "bg-blue-500"}
      ></Button>
    </Form>
  );
};

export default ChangeTodo;