import { Back } from './AllSvgs'
import styled from 'styled-components'
import React from 'react'
import Footer from '../subComponents/Footer'
import { useNavigate } from 'react-router-dom'

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
background-color: grey;
height: 50px;
display: flex;
justify-content: space-between;
h2{
    display: flex;
    align-items: center;
    margin: 0 10px 0 0;
}

`
const BackButton = styled.button`
width: 40px;
background-color: transparent;
border: none;
`

const DateSelection = styled.div`

`

const TimeSelection = styled.div`

`
const PrioritySelection = styled.div`

`
const TitleTask = styled.div`

`
const DescriptionTask = styled.div`

`

const Task = () => {

    const navigate = useNavigate();

    return (
        <Container>
            <Title>
                <BackButton onClick={() => navigate('/main')}>
                    <Back height={'30px'}/>
                </BackButton>
                <h2>Create New Task</h2>
            </Title>
            <DateSelection></DateSelection>
            <TimeSelection></TimeSelection>
            <PrioritySelection></PrioritySelection>
            <TitleTask></TitleTask>
            <DescriptionTask></DescriptionTask>
            <Footer />
        </Container>
    )
}

export default Task