import { FC } from 'react';

import EventItem from '@/components/EventItem/EventItem';
import { EventListProps } from './EventList.props';
import { EventsWrapper } from './EventList.styles';

const EventList: FC<EventListProps> = ({ events }) => (

        <EventsWrapper>
        {events.map((event) => (
            <EventItem key={event.id} event={event} />
        ))}
        </EventsWrapper>
);

export default EventList;