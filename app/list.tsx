"use client";
import React, { useState, useEffect } from 'react';
import { DeleteForm } from "@/app/delete-form";
import { AddForm } from "@/app/add-form";
import { useSession } from 'next-auth/react'
import { signJwtAccessToken } from './lib/jwt';

const origin = window.location.origin

export function List() {
  const [todos, setTodos] = useState([])
  // const [id, setId] = useState('')
  const { data: session } = useSession()

  const getData = async () => {
    if (session && session.user) {

      // @ts-ignore
      let accessToken = signJwtAccessToken(session.token)

      let userJson = await fetch(`${origin}/api/user`, {
        headers: {
          authorization: `bearer ${accessToken}`,
          Accept: 'application/vnd.dpexpo.v1+json' //设置请求头
        },
        method: 'get',
      })
      let user = await userJson.json()





      React.uid = user.data.id
      // setId(user.data.id)
      let result = await fetch(`${origin}/api/lists?id=${user.data.id}`, {
        headers: {
          authorization: `bearer ${accessToken}`,
          Accept: 'application/vnd.dpexpo.v1+json' //设置请求头
        },
        method: 'get',
      })
      let res = await result.json()

      let storeTodo = window.localStorage.getItem('todo')
      if (res?.todos.length && storeTodo) {
        let todos = JSON.parse(storeTodo)
        let result = await fetch(`${origin}/api/listsmany`, {
          headers: {
            authorization: `bearer ${accessToken}`,
            Accept: 'application/vnd.dpexpo.v1+json' //设置请求头
          },
          method: 'post',
          body: JSON.stringify({ id: user.data.id, todos: todos })
        })
        await result.json()
        localStorage.removeItem('todo')
      }


      if (res?.todos) {
        setTodos(res?.todos)
      }
    } else {
      // 没有登录本地存储
      // @ts-ignore
      React.uid = ''
      let storeTodo = window.localStorage.getItem('todo')
      if (storeTodo) {
        setTodos(JSON.parse(storeTodo))
      }
    }
  }


  const updateData = async (id: string, finished: boolean) => {
    let result = await fetch(`${origin}/api/lists`, {
      headers: {
        Accept: 'application/vnd.dpexpo.v1+json' //设置请求头
      },
      method: 'post',
      body: JSON.stringify({ id, finished })
    })
    await result.json()
  }

  const myDecoStyle = (finished: boolean) => {
    let color = finished ? 'text-[#a9af99] line-through' : 'text-[#4e6c84]'
    return `flex flex-row  items-center relative text-[22px] justify-start items-start leading-[60px] text-left my-0 mx-[auto] text-[20px] w-[700px] bold ml-0 ${color}`;
  }

  const updates = () => {
    getData()
  }

  useEffect(() => {
    // getData()
  }, [])

  useEffect(() => {
    getData()
  }, [session])

  const handleCheckBox = (index: number) => {
    // @ts-ignore
    updateData(todos[index].id, !todos[index].finished)
    // @ts-ignore
    todos[index].finished = !todos[index].finished
    setTodos([].concat(todos))
  }


  return (
    <>
      <div className="flex flex-row  justify-start w-[700px]  ml-[auto] mr-[auto]">
        <AddForm updates={updates} />
      </div>

      <div className="flex flex-col justify-start items-start h-100 w-[700px] ml-[auto] mr-[auto] mt-[20px] pl-[20px]">
        {
          todos.map((todo: any, index: any) => {
            return <div className={`${myDecoStyle(todo.finished)}`} key={index}>
              <input className="relative top-[-10px] w-[20px] h-[0px] cursor-pointer  mr-[14px] 
               rounded-full 
               
               before:block 
               before:content-[''] 
               before:absolute 
               before:h-[24px]
               before:rounded-full 
               before:w-[24px]
               before:bg-white
               before:border-slate-400
               before:border-[2px]
               before:bg-cover
               before:cursor-pointer

               checked:before:color-white
               checked:before:bg-[#c2c8d8]
               checked:before:content-['']
               checked:before:border-[0px]
              
              " id="inputId" type="checkbox" checked={todo.finished} onChange={() => {
                  handleCheckBox(index)
                }} />
              <div className='absolute left-[4px] top-[24px] cursor-pointer pointer-events-none '>
                <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4229" width="18" height="18"><path d="M384.119471 821.116243c-11.918447 0-23.837918-4.527107-32.936133-13.573133L77.629032 535.332405c-18.196431-18.107403-18.196431-47.456848 0-65.557088 18.196431-18.107403 47.674812-18.10024 65.871243-0.007163l240.619196 239.436254 495.173776-492.739331c18.196431-18.107403 47.674812-18.107403 65.871243 0 18.196431 18.10024 18.196431 47.449685 0 65.557088L417.055604 807.535947C407.956366 816.589137 396.037918 821.116243 384.119471 821.116243z" fill="#ffffff" p-id="4230"></path></svg>
              </div>

              <p className="pl-[7px]">{todo.content}</p>
              <DeleteForm id={todo?.id} todo={todo.content} deletes={updates} />
            </div>
          })
        }
      </div>
    </>
  );
}
