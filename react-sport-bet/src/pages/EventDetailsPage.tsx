import { useNavigate } from 'react-router-dom';

import EventDetails from '@/components/EventDetails/EventDetails';
import { MainWrapper } from './HomePage.styles';
import { BackButton } from './EventDetailsPage.styles';
import { useAppDispatch } from '@/app/hooks';
import { useEffect } from 'react';
import { clearCurrent } from '@/app/betSlice';

const EventDetailsPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(clearCurrent());
    }, []);

    return (
        <MainWrapper>
            <BackButton onClick={() => navigate('/events')}>
                <span>Вернуться к событиям</span>
            </BackButton>
            <EventDetails />
        </MainWrapper>
    );
};

export default EventDetailsPage;