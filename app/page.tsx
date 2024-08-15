import AddTodo from "@/components/todo/AddTodos";
import Todo from "@/components/todo/Todo";

import { prisma } from "@/utils/prisma";

// async function gets data from db via prisma
async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
      // order data by date created, in descending order and return the newest todo's at the top of the stack
    },
  });

  // get data function returns data
  return data;
}

export default async function Home() {

  // data from getdata function is stored as data 
  const data = await getData();

  return (
    <div className=" w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-4xl font-extrabold ">ashleyStorm Todo App</span>
      <div className="flex flex-col gap-5 mt-10 "> </div>
      <div className="flex justify-center flex-col items-center">
        
        <AddTodo />

        <div className="flex flex-col gap-5 items-center justify-center mt-10 w-screen">
          {data.map((todo, id) => (

              <Todo todo={todo} />       

          ))}
        </div>
      </div>
    </div>
  );
}
