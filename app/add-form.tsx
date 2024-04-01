//@ts-nocheck
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createTodo } from "@/app/actions";
import React, { createRef, useEffect } from 'react';
const { v4: uuidv4 } = require('uuid');
const initialState = {
  message: "",
  content: "",
  update: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="bg-todoPrimary text-primaryText w-[80px] h-[44px] rounded-[8px] " type="submit" aria-disabled={pending}>
      Add
    </button>
  );
}


export function AddForm({ updates }: { updates: any }) {
  // @ts-ignore
  const [state, formAction] = useFormState(createTodo, initialState);

  const ref = createRef<HTMLFormElement>();
  const store = (formData: any) => {
    console.log('store')
    var objData = {};
    // @ts-ignore
    formData.forEach((value: any, key: any) => objData[key] = value);
    // @ts-ignore
    if (objData?.todo) {
      // @ts-ignore
      let item = { content: objData.todo, id: uuidv4(), finished: false }
      if (localStorage.getItem('todo')) {
        // @ts-ignore
        let todos = JSON.parse(localStorage.getItem('todo'))
        todos.push(item)
        localStorage.setItem('todo', JSON.stringify(todos))
      } else {
        localStorage.setItem('todo', JSON.stringify([item]))
      }
      updates()
      if (ref) {
        ref.current?.reset()
      }
    }
  }
  useEffect(() => {
    updates()
    if (ref) {
      ref.current?.reset()
    }
  }, [state.update])


  return (
    <form ref={ref} action={React?.uid ? formAction : store}>
      <input className="absolute opacity-0 z-[-1] w-[570px] h-[44px] mr-[30px] pl-[15px]" type="text" id="id" name='id' value={React?.uid} />
      <input className=" 
               focus:outline-0
               focus:border-2 
               focus:border-title
               focus:rounded
               border-todoSecondary2
               border-2 
               rounded
               w-[570px] h-[44px] mr-[30px] pl-[15px]" type="text" id="todo" name="todo" placeholder="Add To Do" required />
      <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}

