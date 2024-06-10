import React, { useState } from 'react'
import styled from 'styled-components'
import IntroImage from '../assets/images/introImg.png'
import { useNavigate } from 'react-router-dom'

const IntroImg = styled.img`
width: 90%;
margin: 0 auto;
display: flex;
z-index: 11;

`

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
const Form = styled.form`
background-color: ${props => props.theme.colors.secondary};
width: 80%;
height: ${props => props.isLogin ? '500px' : '560px'};
border-radius: 30px;
border: 1px solid ${props => props.theme.colors.primary};
margin: 0 auto;
position: relative;
top: -200px;
z-index: 10;

`
const Input = styled.input`
  margin: 10px 0;
  width: 214px;
  height: 40px;
  border-radius: 30px;
  border: 1px solid ${props => props.theme.colors.primary};
  margin: 0 auto;
  margin-top: 19px;
  font-size: 15px;
  text-align: center;
  letter-spacing: 1px;
`
const Button = styled.button`
  width: 214px;
  height: 54px;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 30px;
  margin: 0 auto;
  margin-top: 31px;
  font-size: 15px;

`
const RegisterText = styled.h3`
position: relative;
top: 25px;
color: ${props => props.theme.colors.primary};
font-size: 12px;
`

const handleSubmit = () => {

}

const Access = ({ isLogin }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    return (
        <Container >
            <IntroImg src={IntroImage} />
            <Form onSubmit={handleSubmit} isLogin={isLogin}>
                <h1 style={{ marginTop: '200px' }}
                >Welcome!</h1>
                <Input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                />
                <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                {!isLogin ? (
                    <Input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Repeat password"
                    />) : (null)}
                <Button type="submit">{isLogin ? 'Login' : 'Register'}</Button>
                <RegisterText>
                    {isLogin ? (
                        <p onClick={() => navigate('/register')}>Still not registered?Register!</p>
                    ) : (
                        <p onClick={() => navigate('/login')}>Already have an account?Sign In</p>
                    )}
                </RegisterText>
            </Form>
        </Container>
    )
}

export default Access