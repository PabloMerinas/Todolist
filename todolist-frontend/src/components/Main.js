import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getTasks } from '../services/taskService'
import { Flag, Clock, Calendar } from './AllSvgs'
import Footer from '../subComponents/Footer'

// #region Styles
const Container = styled.div`
width: 100vw;
max-width: ${props => props.theme.globalStyles.maxWidthPc};
height: 100%;
min-height: 100%;
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
//#region StylesForPriorityTask
const PriorityTask = styled.div`
width: 100vw;
max-width: ${props => props.theme.globalStyles.maxWidthPc};
height: 210px;
white-space: nowrap;
overflow-x: auto;
scrollbar-width: none;
`
const TaskGrid = styled.div`
display: flex;
gap: 15px;
position: relative;
top: 40px;
transition: transform 0.3s ease; 
margin-left: 5px;
margin-right: 5px;
transform: translateX(${({ selectedIndex }) => selectedIndex !== null ? `calc(50% - ${selectedIndex * 165}px)` : '0px'});
transform: translateX(${({ selectedIndex }) => selectedIndex !== null ? `calc(50% - ${selectedIndex * 165}px)` : '0px'});
`
const TaskItem = styled.div`
  background-color: ${({ $bgColor }) => getBackgroundColor($bgColor)};
  min-width: ${({ $isSelected }) => ($isSelected ? '150px' : '110px')};
  min-height: ${({ $isSelected }) => ($isSelected ? '150px' : '110px')};
  border-radius: 10px;
  max-width: ${({ $isSelected }) => ($isSelected ? '150px' : '110px')};
  max-height: ${({ $isSelected }) => ($isSelected ? '150px' : '110px')};
  padding: 10px;
  box-sizing: border-box;
  cursor: grab;
  display: inline-block;
  position: relative;
  top: ${({ $isSelected }) => ($isSelected ? '0px' : '15px')};
  transition: top 1s ease, width 0.7s ease, height 0.7s ease; 


  h4, h5 {
    text-align: left;
    word-wrap: break-word;
    white-space: normal;
    overflow: visible;
  }

  h4 {
    font-size: ${({ $isSelected }) => ($isSelected ? '16px' : '12px')};
    margin-bottom: 5px;
  }

  h5 {
    font-size: ${({ $isSelected }) => ($isSelected ? '6px' : '4px')}
  }
`;
//#endregion StylesForPriorityTask

//#region StylesForReminderTask
const ReminderTask = styled.div`
width: 100vw;
max-width: ${props => props.theme.globalStyles.maxWidthPc};
height: 90px;
white-space: nowrap;
overflow-x: auto;
scrollbar-width: none;
`
const ReminderTaskGrid = styled.div`
display: flex;
position: relative;
top: 40px;
transition: transform 0.3s ease; 
margin-left: 5px;
margin-right: 5px;
gap: 10px;
`
const ReminderTaskItem = styled.div`
min-width: 105px;
max-width: 105px;
height: 31px;
border-radius: 10px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
display: flex; 
align-items: center; 

div{
position: relative;
left: 10px;
min-width: 7px;
min-height: 7px;
border-radius: 30px;
background-color: ${({ $circleColor }) => getBackgroundColor($circleColor)}
}
h4{
  position: relative;
  min-width: 80px;
  left: 17px;
  top: -5px;
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
h5{
 text-align: start;
  min-width: 55px;
  font-size: 6px;
  position: relative;
  top: 6px;
  right: 63px;
}
`
//#endregion StylesForReminderTask
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
const getTimeRemaining = (toDate) => {
  const currentTime = new Date();
  const targetTime = new Date(toDate);
  const differenceMs = targetTime - currentTime;

  // Convertir milisegundos a días, minutos y segundos
  const days = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((differenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((differenceMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((differenceMs % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};



//#region StylesForMyTaskList
const MyTaskList = styled.div`
width: 100vw;
max-width: ${props => props.theme.globalStyles.maxWidthPc};

`
const MyTaskListGrid = styled.div`
width: 100vw;
max-width: ${props => props.theme.globalStyles.maxWidthPc};
max-height: 300px;
margin-top: 20px;
display: flex;
flex-direction: column;
gap: 20px;
white-space: nowrap;
overflow-y: auto;
scrollbar-width: none;
`
const MyTaskListItem = styled.div`
width: 350px;
min-width: 350px;
height: 70px;
min-height: 70px;
border-radius: 20px;
margin: 0 auto;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
border: 1px solid rgba(0, 0, 0, 0.25);
white-space: nowrap;
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: center;

h4{
position: relative;
width: 90%;
text-align: left;
margin: 0 0 0 20px;
font-size: 15px;
font-weight: 700;
white-space: nowrap;
overflow: hidden;

}
h5{
width: 90%;
position: relative;
text-align: left;
margin: 0 0 0 20px;
font-weight: 600;
white-space: nowrap;
overflow: hidden;

}
h6{
position: relative;
text-align: left;
margin: 0 0 0 20px;
font-weight: 600;
white-space: nowrap;
overflow: hidden;
}
`

const StatusDiv = styled.div`
width: 90vw;
max-width: ${props => props.theme.globalStyles.maxWidthPc};
margin: 0 auto;
height: 30px;
margin-top: 40px;
/* background-color: lightblue; */
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 10px;
margin-right: 10px;
`

const StatusButton = styled.button`
width: 50px;
height: 16px;
border: none;
background-color: transparent;
font-size: 10;
padding: 0px;
position: relative;
top: ${props => props.$active ? '-4px' : null};
font-weight: ${props => props.$active ? 800 : 700};
text-decoration: ${props => props.$active ? 'underline' : 'none'};
`
//#endregion StylesForMyTaskList



// #endregion Styles

const Main = () => {
  const activeUsername = localStorage.getItem('ActiveUsername');
  const [tasks, setTasks] = useState([]);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(0);
  const [stateFilter, setStateFilter] = useState('TODO');

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await getTasks();
      setTasks(tasksData);
    };

    fetchTasks();
  }, []);

  // Actualiza el tiempo restante de las tareas cada segundo
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTasks(prevTasks => prevTasks.map(task => {
        const { days, hours, minutes, seconds } = getTimeRemaining(task.toDate);
        return { ...task, timeRemaining: { days, hours, minutes, seconds } };
      }));
    }, 1000);

    return () => clearInterval(intervalId);
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
          {tasks.sort((a, b) => {
            const priorityOrder = { HIGH: 3, MEDIUM: 2, LOW: 1 };
            return priorityOrder[b.priority] - priorityOrder[a.priority];
          }).map((task, index) => (
            <TaskItem
              key={task.id}
              id={`task-${index}`}
              $bgColor={task.priority}
              onClick={() => handleTaskClick(index)}
              $isSelected={selectedTaskIndex === index}
            >
              <h4>{task.title}</h4>
              <h5>{task.description}</h5>
              <h5><Flag widht={'10px'} />({task.priority.charAt(0).toUpperCase() + task.priority.slice(1).toLowerCase()} Priority)</h5>
            </TaskItem>
          ))}
        </TaskGrid>

      </PriorityTask>
      <ReminderTask>
        <LittleTitle>Reminder Nearly Tasks</LittleTitle>
        <ReminderTaskGrid>
          {tasks
            .filter(task => {
              const { days, hours, minutes, seconds } = getTimeRemaining(task.toDate);
              return days >= 0 && hours >= 0 && minutes >= 0 && seconds >= 0;
            })
            .sort((a, b) => {
              const timeRemainingA = getTimeRemaining(a.toDate);
              const timeRemainingB = getTimeRemaining(b.toDate);
              const totalSecondsA = timeRemainingA.days * 24 * 60 * 60 + timeRemainingA.hours * 60 * 60 + timeRemainingA.minutes * 60 + timeRemainingA.seconds;
              const totalSecondsB = timeRemainingB.days * 24 * 60 * 60 + timeRemainingB.hours * 60 * 60 + timeRemainingB.minutes * 60 + timeRemainingB.seconds;
              return totalSecondsA - totalSecondsB;
            })
            .map(task => {
              const { days, hours, minutes, seconds } = getTimeRemaining(task.toDate);
              return (
                <ReminderTaskItem key={`reminder-task-item-${task.id}`} $circleColor={task.priority}>
                  <div />
                  <h4>{task.title}</h4>
                  <h5>
                    {days > 0 ? (`${days} days ${hours} hours `) : (
                      hours > 0 ? `${hours} hours ${minutes} minutes ` : (
                        minutes > 0 ? `${minutes} minutes ${seconds} seconds ` : (
                          seconds > 0 ? `${seconds} seconds ` : null
                        )
                      )
                    )}<Clock height={'6px'} />
                  </h5>
                </ReminderTaskItem>
              );
            })}
        </ReminderTaskGrid>


      </ReminderTask>
      <MyTaskList>
        <LittleTitle>My Task List</LittleTitle>
        <StatusDiv>
          <StatusButton $active={stateFilter === 'TODO'} onClick={() => setStateFilter('TODO')} >To Do</StatusButton>
          <StatusButton $active={stateFilter === 'DOING'} onClick={() => setStateFilter('DOING')} >Doing</StatusButton>
          <StatusButton $active={stateFilter === 'DONE'} onClick={() => setStateFilter('DONE')}>Done</StatusButton>
        </StatusDiv>
        <MyTaskListGrid>
          {tasks.filter(task => task.state === stateFilter).map(task => (
            <MyTaskListItem key={`my-task-list-item-${task.id}`}>
              <h4>{task.title}</h4>
              <h5>{task.description}</h5>
              <h6><Calendar width={'10px'} /> {new Date(task.fromDate).toLocaleString()} - {new Date(task.toDate).toLocaleString()}</h6>
            </MyTaskListItem>

          ))}
        </MyTaskListGrid>
      </MyTaskList>
      <Footer />

    </Container>
  )
}

export default Main