import React from 'react'
import styled from 'styled-components'
import { Add, Principal } from '../components/AllSvgs'
import { useNavigate } from 'react-router-dom'

export const FooterDiv = styled.div`
width: 100vw;
max-width: ${props => props.theme.globalStyles.maxWidthPc};
height: 90px;
position: absolute;
bottom: 0;
background-color: white;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
box-shadow: 0px -5px 15px rgba(0, 0, 0, 0.5);
display: flex;
`
export const FooterAddButton = styled.button`
width: 60px;
height: 60px;
position: absolute;
right: 30px;
border-radius: 16px;
background-color: ${props => props.theme.colors.primary};
border: none;
bottom: 50px;
box-shadow: 0px 0px 0px 9px white;
cursor: pointer;

`
const PrincipalButton = styled.button`
margin-left: '20px';
display: 'flex';
background-color: transparent;
border: none;
`


const Footer = () => {
    const navigate = useNavigate();
    return (
        <FooterDiv>
            <FooterAddButton id='add-task-btn' onClick={() => navigate('/task')}>
                <Add />
            </FooterAddButton>
            <PrincipalButton onClick={() => navigate('/main')}>
                <Principal width={'40px'} />
            </PrincipalButton>
        </FooterDiv>
    )
}

export default Footer