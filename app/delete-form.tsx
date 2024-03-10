"use client";

import { useFormState, useFormStatus } from "react-dom";
import { deleteTodo } from "@/app/actions";

const initialState = {
  message: "",
};

function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button className='absolute right-[40px] top-[10px] cursor-pointer hover:opacity-50 w-[20px] h-[30px]' type="submit" aria-disabled={pending}>
      <a className='cursor-pointer hover:opacity-50' >
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4470" width="20" height="20"><path d="M817.066667 883.2L140.8 206.933333c-17.066667-17.066667-17.066667-46.933333 0-66.133333 17.066667-17.066667 46.933333-17.066667 66.133333 0l676.266667 676.266667c17.066667 17.066667 17.066667 46.933333 0 66.133333-19.2 17.066667-49.066667 17.066667-66.133333 0z" fill="#4e6c84" p-id="4471"></path><path d="M206.933333 883.2L883.2 206.933333c17.066667-17.066667 17.066667-46.933333 0-66.133333-17.066667-17.066667-46.933333-17.066667-66.133333 0L140.8 817.066667c-17.066667 17.066667-17.066667 46.933333 0 66.133333 19.2 17.066667 49.066667 17.066667 66.133333 0z" fill="#4e6c84" p-id="4472"></path></svg>
      </a>
    </button>
  );
}

export function DeleteForm({ id, todo }: { id: string; todo: string }) {
  const [state, formAction] = useFormState(deleteTodo, initialState);

  return (
    <form action={formAction} >
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="todo" value={todo} />
      <DeleteButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}
