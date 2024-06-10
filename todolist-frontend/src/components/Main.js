import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getTasks } from '../services/taskService'

const Container = styled.div`
width: 100vw;
max-width: 600px;
height: 100%;
background-color: ${props => props.theme.colors.background};
margin: 0;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
`
const Title = styled.div`
margin-top: 20px;
h2{
  font-size: 14px;
  margin-bottom: 1px;
}
h6{
  font-size: 10px;
  margin-top: 1px;
  color: grey;
}
`
const LittleTitle = styled.p`
position: absolute;
left: 20px;
font-size: 10px;
font-weight: 500;
`

const PriorityTask = styled.div`

`

const Main = () => {
  const activeUsername = localStorage.getItem('ActiveUsername');
  const [Tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getTasks());
  }, [])

  return (
    <Container>
      <Title>
        <h2>Welcome to Task, {activeUsername ? activeUsername : 'Anonymous'}</h2>
        <h6>Greate nice day for managing Tasks</h6>
      </Title>
      <PriorityTask>
        <LittleTitle>My priority Task</LittleTitle>
      </PriorityTask>
    </Container>
  )
}

export default Main