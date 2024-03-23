"use client";

import { useFormState, useFormStatus } from "react-dom";
import { register } from "@/app/actions";
import { useRouter } from 'next/navigation'

const initialState = {
  message: "",
  id: ""
};

function SubmitButton() {

  const { pending } = useFormStatus();

  return (
    <button className=" w-[300px] h-[44px] bg-[#d5e4fc] rounded-[8px]" type="submit" aria-disabled={pending}>
      register
    </button>
  );
}

function redirect(router: any, id: string) {
  localStorage.setItem('u', id)
  router.push('/')
}

export function RegisterForm() {
  const [state, formAction] = useFormState(register, initialState);
  const router = useRouter()

  return (
    state?.message === 'success' ? redirect(router, state?.id) :
      <form action={formAction} className="w-[570px] flex flex-col  items-center">
        <input className="w-[300px] h-[44px] pl-[15px] mb-[20px]" type="text" id="todo" name="name" placeholder="username" required />
        <input className="w-[300px] h-[44px] pl-[15px] mb-[20px]" type="text" id="email" name="email" placeholder="email" required />
        <input className="w-[300px] h-[44px] pl-[15px] mb-[20px]" type="text" id="password" name="password" placeholder="password" required />
        <SubmitButton />
        <p aria-live="polite" className="sr-only" role="status">
          {state?.message}
        </p>
      </form>
  );
}

