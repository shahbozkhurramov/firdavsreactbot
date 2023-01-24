import React from 'react'
import CourseList from '../Components/CourseList';
import { CourseModel } from '../Models/CourseModel';

export default function Home() {
  const courses: CourseModel[] = [
    {
      id: 1,
      name: "Arab tili",
      description: "Arab tilini 8 oy davomida biz bilan birga o'rganing...",
      img: '../Images/arabic.jpg'
    },
    {
      id: 2,
      name: "Ingliz tili",
      description: "Something....",
      img: '../Images/arabic.jpg'
    },
    {
      id: 3,
      name: "Kimyo",
      description: "Kimyo bilan tanishing",
      img: '../Images/arabic.jpg'
    },
    {
      id: 4,
      name: "Matematika",
      description: "Matematika bilan tanishing",
      img: '../Images/arabic.jpg'
    }
  ]

  return (
        <CourseList courses={courses}/>
  )
}
