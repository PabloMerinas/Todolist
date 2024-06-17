import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Back } from './AllSvgs';
import Footer from '../subComponents/Footer';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
`;

const Title = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
  h2 {
    display: flex;
    align-items: center;
    margin: 0 90px 0 0;
  }
`;

const LittleTitle = styled.p`
  position: absolute;
  left: 20px;
  font-size: 10px;
  font-weight: 500;
`;

const BackButton = styled.button`
  width: 40px;
  background-color: transparent;
  border: none;
`;

const DateSelection = styled.div`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 20px;
  .react-datepicker-wrapper {
    border: none;
  }
  .react-datepicker {
    border: none;
    width: 100%;
  }
  .react-datepicker__month-container {
    width: 100%;
  }
  .react-datepicker__day-names {
    display: flex;
    gap: 10px;
    justify-content: center;
  }
  .react-datepicker__week {
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: center;
  }
`;

const TimeSelection = styled.div``;

const PrioritySelection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
`;

const TitleTask = styled.input`
  width: 328px;
  height: 32px;
  border-radius: 10px;
  box-shadow: 0px -5px 15px rgba(0, 0, 0, 0.5);
  margin: 0 auto;
  border: none;
`;

const DescriptionTask = styled.input`
  width: 328px;
  height: 76px;
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 0px -5px 15px rgba(0, 0, 0, 0.5);
  border: none;
`;

const PriorityOption = styled.button`
  width: 92px;
  height: 24px;
  border-radius: 10px;
  border: none;
  background-color: ${props => props.$bgColor};
  border: ${props => props.selected ? '2px solid black' : 'none'};
`;

const SubmitButton = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin: 20px auto;
`;

const Error = styled.p`
  color: red;
  font-size: 12px;
  margin: 0 auto;
`;

const Task = () => {
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [priority, setPriority] = useState('LOW');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const addButton = document.getElementById('add-task-btn');
        if (addButton) {
            addButton.remove();
        }
    }, []);

    const handleSubmit = () => {
        if (!startDate || !endDate) {
            setError('Please select a date range.');
            return;
        }
        if (!['HIGH', 'MEDIUM', 'LOW'].includes(priority)) {
            setError('Please select a priority.');
            return;
        }
        if (!title || !description) {
            setError('Title and Description are required.');
            return;
        }
        setError('');
        console.log('Task Created:', { startDate, endDate, priority, title, description });
        navigate('/main');
    };

    return (
        <Container>
            <Title>
                <BackButton onClick={() => navigate('/main')}>
                    <Back height={'30px'} />
                </BackButton>
                <h2>Create New Task</h2>
            </Title>
            <div style={{ height: '50px' }}>
                <LittleTitle>Select the date</LittleTitle>
            </div>
            <DateSelection>
                <DatePicker
                    selected={startDate}
                    onChange={(dates) => {
                        const [start, end] = dates;
                        setStartDate(start);
                        setEndDate(end);
                    }}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline
                />
            </DateSelection>
            <div style={{ height: '50px' }}>
                <LittleTitle>Priority</LittleTitle>
            </div>
            <PrioritySelection>
                <PriorityOption $bgColor='#F34E4E' selected={priority === 'HIGH'} onClick={() => setPriority('HIGH')}>
                    High
                </PriorityOption>
                <PriorityOption $bgColor="#00CABE" selected={priority === 'MEDIUM'} onClick={() => setPriority('MEDIUM')}>
                    Medium
                </PriorityOption>
                <PriorityOption $bgColor="#4EF3A4" selected={priority === 'LOW'} onClick={() => setPriority('LOW')}>
                    Low
                </PriorityOption>
            </PrioritySelection>
            <div style={{ height: '50px' }}>
                <LittleTitle>Title Task</LittleTitle>
            </div>
            <TitleTask value={title} onChange={(e) => setTitle(e.target.value)} />
            <div style={{ height: '50px' }}>
                <LittleTitle>Note</LittleTitle>
            </div>
            <DescriptionTask value={description} onChange={(e) => setDescription(e.target.value)} />
            {error && <Error>{error}</Error>}
            <SubmitButton onClick={handleSubmit}>Create Task</SubmitButton>
            <Footer />
        </Container>
    );
};

export default Task;
