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
          {/**
            data = data fetched from mongodb via prisma (prisma func() was used to search for data)
            (in this specific case, ALL data from Todo table was fetched)
            data.map() returns mapped data from db 
            (todo, id) todo: Todo table, id: db-generated _id used as identifier (each todo is assigned an _id)
           */}
          {data.map((todo, id) => (
            // this <div/> displays the mapped data and because our function called to fetch all data from todo table
            // i.e. title, id, isCompleted boolean, we can call data from this table directly as a method (i.e. todo.title will return
            // the todo's title, todo.id will return the todo's _id, todo.isCompleted will return the current state of the boolean value)
            
              <Todo todo={todo} />
              //  ^t0do <-  <T0do/> comp. definition takes: { t0do } <- t0do type definition (types/index.tsx):
              //   id: string; 
              //   title?: string | null;
              //   isCompleted: boolean;
              //   createdAt?: Date;
             
             
                // all these components are built using attributes of the todo type from types/index.tsx definitions, i.e.
                // <Todo/> component returns the todo's title and because we explicitly required the todo parameters (like 
                // defining attributes in a class) that take todoProps as arguments such as:
                // id: string; 
                // title?: string | null;
                // isCompleted: boolean;
                // createdAt?: Date;
                // ... we must call <compon.Name todo={todo}/> with an argument for the todo param. NB - because the todo param is defined by 
                // todoProps, that means when called explicitly such as here, the 
             
            
          ))}
        </div>
      </div>
    </div>
  );
}
