import { FC } from 'react';

import { formatDate } from '@/utils/DateFormatter';
import { formatTime } from '@/utils/TimeFormatter';

import { EventItemProps } from './EventItem.props';
import {
    EventContent,
    EventHeader,
    EventLink,
    EventWrapper,
    Score
} from './EventItem.styles';

const EventItem: FC<EventItemProps> = ({ event }) => (
    <EventWrapper>
        <EventLink to={event.id.toString()}>
            <EventHeader>
                {event.type === 'live' && (
                    <>
                        <div>Live</div>
                        <div>{`${event.score.minutesPassed}'`}</div>
                    </>
                )}
                {event.type === 'upcoming' && (
                    <>
                        <div>{formatDate(event.date)}</div>
                        <div>{formatTime(event.date)}</div>
                    </>
                )}
            </EventHeader>
            <EventContent>
                <div>{event.homeTeam?.name}</div>
                <div>{event.awayTeam?.name}</div>
                <Score>
                    {event.type === 'live'
                        ? `${event.score.home} - ${event.score.away}`
                        : 'vs'}
                </Score>
            </EventContent>
        </EventLink>
    </EventWrapper>
);

export default EventItem;