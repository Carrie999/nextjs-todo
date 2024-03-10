"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createTodo } from "@/app/actions";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className=" w-[80px] h-[44px] bg-[#d5e4fc] rounded-[8px]" type="submit" aria-disabled={pending}>
      Add
    </button>
  );
}

export function AddForm() {
  const [state, formAction] = useFormState(createTodo, initialState);

  return (
    <form action={formAction}>
      <input className="w-[570px] h-[44px] mr-[30px] pl-[15px]" type="text" id="todo" name="todo" placeholder="Add To Do" required />
      <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}

