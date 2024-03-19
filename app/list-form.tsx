"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createTodo } from "@/app/actions";
import { json } from "stream/consumers";



export function ListForm(props: any) {


  return (
    <>
      {
        props.todos.map((todo, index) => {
          return <div className={`${myDecoStyle(todo.finished)}`} key={index}>
            {/* <Checkbox className="opacity-100" isSelected={item.finished} onChange={(event) => {
                              // handleCheckbox(index, event, item._id, item.finished)
           }} radius="full"></Checkbox> */}
            <p className="pl-[7px]">{todo.content}</p>

            <DeleteForm id={todo?.id || index} todo={todo.content} />
          </div>
        })
      }
    </>
  );
}

