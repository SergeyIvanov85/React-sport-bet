import { useParams } from 'react-router-dom';

import { events } from '@/data/Events';
import { router } from '@/app/router';
import {
    EventDetailsContent,
    EventDetailsHeader,
    EventDetailsWrapper,
    StyledEvent,
    TeamInfo,
    Versus
} from './EventDetails.styles';
import { formatDate } from '@/utils/DateFormatter';
import { formatTime } from '@/utils/TimeFormatter';

const EventDetails = () => {
    const { id } = useParams();
    const event = events.find((event) => event.id.toString() === id);

    if (!event) {
        router.navigate('/');
    }

    return (
        <StyledEvent>
            <h2>Детали события</h2>
            {event && (
                <EventDetailsWrapper>
                    <EventDetailsHeader>
                        <div>{formatDate(event.date)}</div>
                        <div>{formatTime(event.date)}</div>
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
                        <Versus>vs</Versus>
                    </EventDetailsContent>
                </EventDetailsWrapper>
            )}
        </StyledEvent>
    );
};

export default EventDetails;