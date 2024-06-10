import React from 'react'
import styled from 'styled-components'
import IntroImage from '../assets/images/introImg.png'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
width: 100vw;
max-width: 600px;
height: 100vh;
background-color: ${props => props.theme.colors.background};
margin: 0;
`

const IntroImg = styled.img`
width: 90%;
margin: 0 auto;
display: flex;
`
const TextBox = styled.div`
text-align: center;
margin-left: 25px;
margin-right: 25px;
color: ${props => props.theme.colors.text};
h4{
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
}
`
const Button = styled.button`
width: 228px;
height: 54px;
border-radius: 30px;
background-color: ${props => props.theme.colors.primary};
color: white;
font-size: 15px;
border-color: transparent;
font-weight: bold;
cursor: pointer;
`


const Intro = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <IntroImg src={IntroImage} />
            <TextBox>
                <h1>Let's Organize Your Tasks</h1>
                <h3>Make your todo in the note and manage your priority activity in daily life to achieve goals.</h3>
                <Button onClick={() => navigate('/register')} >Get Started</Button>
                <h4 onClick={() => navigate('login')} >Already have an account? Sign In</h4>
            </TextBox>
        </Container>
    )
}

export default Intro