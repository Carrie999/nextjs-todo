"use client";
import { Background } from './background';
import React, { useEffect, useState } from 'react';
import { signJwtAccessToken } from '../lib/jwt';
import { useSession } from 'next-auth/react'
import { format, subHours, startOfMonth } from 'date-fns';
import {
  MonthlyBody,
  MonthlyDay,
  MonthlyCalendar,
  MonthlyNav,
  DefaultMonthlyEventItem,
} from '@zach.codes/react-calendar';
const currentDate = new Date();
// 获取年、月、日
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // 月份从 0 开始，需要加 1

// export const metadata = {
//   title: "To Do Lists - History",
//   description: "To Do Lists online Minimalist wind, Multiple Theme Styles",
// };
export default function About() {
  const { data: session } = useSession()
  const [todos, setTodos] = useState([])
  const [mon, setMon] = useState(month)
  const getData = async () => {
    // console.log(111, localStorage.getItem('t'), localStorage.getItem('id'))
    // if (session && session.user) {
    // @ts-ignore
    // let accessToken = signJwtAccessToken(session.token)

    let result = await fetch(`${origin}/api/lists?id=${localStorage.getItem('id')}&mon=${mon}`, {
      headers: {
        authorization: `bearer ${localStorage.getItem('t')}`,
        Accept: 'application/vnd.dpexpo.v1+json' //设置请求头
      },
      method: 'get',
    })

    let res = await result.json()
    if (res?.todos) {
      res?.todos.map((item) => {
        item.title = item.content
        item.date = item.createdAt
      })
      setTodos(res?.todos)
    }
    // }

  }


  let [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));


  // useEffect(() => {
  //   getData()
  // }, [])

  useEffect(() => {
    setTimeout(() => {
      getData()
    }, 1000)
  }, [mon])

  return (
    <>
      <Background></Background>
      <main className="flex flex-col bg-layout items-center pt-[50px] ">
        {/* <p className="relative z-[10] text-center text-[40px] bold text-title">History Todo</p> */}
        <div className="relative bg-content mt-[50px] mb-[200px] pt-[20px] pl-[40px]  pr-[40px] pb-[50px] w-[1100px] h-[750px] overflow-y-auto" >
          <MonthlyCalendar
            currentMonth={currentMonth}
            onCurrentMonthChange={date => {
              console.log(111, date)
              let currentDate = new Date(date);
              const month = String(currentDate.getMonth() + 1).padStart(2, '0')
              setMon(month)
              setCurrentMonth(date)
            }}
          >
            <MonthlyNav />
            <MonthlyBody
              events={
                todos
                // [
                // { title: 'Call John', date: subHours(new Date(), 2) },
                // { title: 'Call John', date: subHours(new Date('2024-4-1'), 0) },
                // { title: 'Call John', date: subHours(new Date('2024-4-1'), 0) },
                // // { title: 'Meeting with Bob', date: new Date() },
                // ]

              }
            >
              <MonthlyDay
                renderDay={data => {
                  // console.log(111, data)
                  return data.map((item, index) => (
                    <div className=' w-[100px] h-[20px] cursor-pointer [&_*]:py-0 border-none overflow-y-hidden' >
                      <DefaultMonthlyEventItem
                        onClick={() => {
                          // cons≠ole.log(111)
                        }}
                        key={index}
                        title={item.title.slice(0, 5)}
                        // Format the date here to be in the format you prefer
                        date={format(item.date, 'k:mm')}
                      />
                    </div>
                  ))
                }
                }
              />
            </MonthlyBody>
          </MonthlyCalendar>
        </div>
      </main >
    </>
  );
}


