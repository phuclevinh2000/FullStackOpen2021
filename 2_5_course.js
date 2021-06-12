import React from "react"

const Header = (props) => {
    return (
        <h1>{props.name}</h1>
    )
}

const Content = (props) => {
    return (
        <div>
           {props.parts.map((props) => (
               <Part key={props.id} exercies={props.exercises} name={props.name} />
           ))}
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            {props.name} {props.exercies}
        </div>
    )
}

const Total = (props) => {
    
    const total = props.parts.reduce(
        (accumulator, currentValue) => accumulator + currentValue.exercises,0
    )

    return (
        <strong>
            Total of {total} exercises
        </strong>
    )
}

const Course = ({course}) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course
