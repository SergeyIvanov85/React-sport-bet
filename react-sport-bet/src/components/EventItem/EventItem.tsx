import { FC } from 'react';


import { EventItemProps } from './EventItem.props';
import {
    EventContent,
    EventLink,
    EventWrapper,
    Score
} from './EventItem.styles';

const EventItem: FC<EventItemProps> = ({ event }) => (
    <EventWrapper>
        <EventLink to={event.id.toString()}>
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