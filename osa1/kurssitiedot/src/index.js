import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Part  = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>
  )
}

const Content  = (props) => {
  console.log('Content');
  console.log(props);
  let content = props.parts.map(element => <p>{element.name} {element.exercises}</p>  )
  return (

    <div> {content} </div>
  )

}

const Total  = (props) => {
  let total = 0
  props.parts.forEach(element => {
    total = total + element.exercises
  });
  total = total;
  return (
    <div>
      <p>
        Number of exercises {total}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const parts = [ part1, part2, part3 ]
  return (
    <div>      
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))