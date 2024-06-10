import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getTasks } from '../services/taskService'

// #region Styleds
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
width: 100vw;
height: 250px;
white-space: nowrap;
overflow-x: auto;
scrollbar-width: none;
`
const TaskItem = styled.div`
background-color: ${({ bgColor }) => getBackgroundColor(bgColor)};
width: 150px;
height: 150px;
border-radius: 10px;
padding: 10px;
box-sizing: border-box;

h4{
  font-size: 16px;
  text-align: left;

}
h5{
  font-size: 6px;
  text-align: left;

}
`
const TaskGrid = styled.div`
display: flex;
gap: 15px;
position: relative;
top: 40px;
transition: transform 0.3s ease; /* Animación de transición para suavizar el movimiento */

transform: translateX(${({ selectedIndex }) => selectedIndex !== null ? `calc(50% - ${selectedIndex * 165}px)` : '0px'});


`

const getBackgroundColor = priority => {
  switch (priority) {
    case 'LOW':
      return '#4EF3A4';
    case 'MEDIUM':
      return '#00CABE';
    case 'HIGH':
      return '#F34E4E';
    default:
      return 'gray';
  }
}

// #endregion

const Main = () => {
  const activeUsername = localStorage.getItem('ActiveUsername');
  const [tasks, setTasks] = useState([]);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await getTasks();
      setTasks(tasksData);
    };

    fetchTasks();
  }, []);

  const handleTaskClick = (index) => {
    setSelectedTaskIndex(index);
    scrollTaskIntoView(index);
  };
  const scrollTaskIntoView = (index) => {
    const container = document.getElementById('priority-task-container');
    const taskItem = document.getElementById(`task-${index}`);
    
    if (container && taskItem) {
      const containerWidth = container.offsetWidth;
      const taskItemWidth = taskItem.offsetWidth;
      const taskItemOffsetLeft = taskItem.offsetLeft;
      
      const scrollLeft = taskItemOffsetLeft - (containerWidth - taskItemWidth) / 2;
      
      // Animación de desplazamiento suave
      smoothScroll(container, scrollLeft, 100);
    }
  };
  
  const smoothScroll = (element, target, duration) => {
    const start = element.scrollLeft;
    const distance = target - start;
    const startTime = performance.now();
  
    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      element.scrollLeft = start + distance * progress;
  
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };
  
    requestAnimationFrame(animateScroll);
  };
  return (
    <Container>
      <Title>
        <h2>Welcome to Task, {activeUsername ? activeUsername : 'Anonymous'}</h2>
        <h6>Great nice day for managing Tasks</h6>
      </Title>
      <PriorityTask id="priority-task-container">
        <LittleTitle>My priority Task</LittleTitle>
        <TaskGrid>
          {tasks.map((task, index) => (
            <TaskItem
              key={task.id}
              id={`task-${index}`}
              bgColor={task.priority}
              onClick={() => handleTaskClick(index)}
              isSelected={selectedTaskIndex === index}
            >
              <h4>{task.title}</h4>
              <h5>{task.description}</h5>
            </TaskItem>
          ))}
        </TaskGrid>
      </PriorityTask>
    </Container>
  )
}

export default Main