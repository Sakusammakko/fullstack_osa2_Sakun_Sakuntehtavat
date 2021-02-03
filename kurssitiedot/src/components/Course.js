import React from 'react'

const Header = () => {
    return (
      <h1>Web development curriculum</h1>
    )
  }
  
  
  const Total = ({ course }) => {
  
    return (
      <b>total of exercises {course.parts.reduce((summa, current) => (summa + current.exercises), 0)}</b>
    ) 
  }
  
  const Header2 = ({ course }) => {
    return (
      <h2>
        {course.name}
      </h2>
    )
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    )
  }
  
  
  const Content = ({ course }) => {
    console.log('Content: ', course)
    return (
      <div>
        <Header2 course={course} />
        {course.parts.map(part => 
        <Part key={part.id} part={part} />
        )}
        <Total course={course} />
      </div>
    );
  }
  
  
  const Course = ({ courses }) => {
    console.log('Course: ', courses)
    return (
      <div>
        <Header/>
        {courses.map(course => 
          <Content key={course.id} course={course}/>
          )}
      </div>
    )
  }

  export default Course