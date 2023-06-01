import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { events } from '@/data/Events';
import {
    BetButton,
    BetForm,
    BetInput,
    BetPoints,
    EventDetailsContent,
    EventDetailsHeader,
    EventDetailsWrapper,
    RadioBets,
    StyledEvent,
    TeamInfo,
    Versus
} from './EventDetails.styles';
import { formatDate } from '@/utils/DateFormatter';
import { formatTime } from '@/utils/TimeFormatter';
import { useAppDispatch } from '@/app/hooks';
import { addBet } from '@/app/betSlice';

const EventDetails = () => {
    const dispatch = useAppDispatch();
    const [betValue, setBetValue] = useState('');
    const [betOption, setBetOption] = useState<null | 'победу хозяев' | 'ничью' | 'победу гостей'>(
        null
    );
    const navigate = useNavigate();
    const { id } = useParams();
    const event = events.find((event) => event.id.toString() === id);

    const makeABet = () => {
        dispatch(
            addBet({
                event,
                option: betOption,
                value: betValue
            })
        );
        navigate('/events');
    };

    useEffect(() => {
        if (!event) {
            navigate('/');
        }
    }, []);

    return (
        <StyledEvent>
            <h2>Детали события</h2>
            {event && (
                <EventDetailsWrapper>
                    <EventDetailsHeader>
                        <div>{formatDate(event.date)}</div>
                        {event.type === 'upcoming' && <div>{formatTime(event.date)}</div>}
                        {event.type === 'live' && (
                            <div>LIVE: {event.score.minutesPassed}&apos;</div>
                        )}
                    </EventDetailsHeader>
                    <EventDetailsContent>
                        <TeamInfo>
                            <img src={event.homeTeam?.imageUrl} />
                            <div>{event.homeTeam?.name}</div>
                        </TeamInfo>
                        <TeamInfo>
                            <img src={event.awayTeam?.imageUrl} />
                            <div>{event.awayTeam?.name}</div>
                        </TeamInfo>
                        <Versus>
                            {event.type === 'live'
                                ? `${event.score.home} : ${event.score.away}`
                                : 'vs'}
                        </Versus>
                    </EventDetailsContent>
                </EventDetailsWrapper>
            )}
            {event && (
                <BetForm>
                    <RadioBets>
                        <input
                            type='radio'
                            id='home'
                            name='betOption'
                            value='хозяева'
                            onClick={() => setBetOption('победу хозяев')}
                        />
                        <label htmlFor='home'>Хозяева {event.rates.homeWin.toFixed(2)}</label>
                        <input
                            type='radio'
                            id='draw'
                            name='betOption'
                            value='ничья'
                            onClick={() => setBetOption('ничью')}
                        />
                        <label htmlFor='draw'>Ничья {event.rates.draw.toFixed(2)}</label>
                        <input
                            type='radio'
                            id='away'
                            name='betOption'
                            value='гости'
                            onClick={() => setBetOption('победу гостей')}
                        />
                        <label htmlFor='away'>Гости {event.rates.awayWin.toFixed(2)}</label>
                    </RadioBets>
                    <div>
                        <BetInput
                            type='text'
                            name='betValue'
                            placeholder='0'
                            value={betValue.toString()}
                            onChange={(e) => {
                                if (!Number(e.target.value) && e.target.value.length > 0)
                                    return;
                                setBetValue(e.target.value);
                            }}
                        />
                        <BetPoints>BYN</BetPoints>
                    </div>
                    <BetButton
                        type='button'
                        disabled={!betOption || betValue === ''}
                        onClick={() => makeABet()}
                    >
                        сделать ставку
                    </BetButton>
                </BetForm>
            )}
        </StyledEvent>
    );
};

export default EventDetails;