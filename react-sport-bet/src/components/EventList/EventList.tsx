import { FC } from 'react';

import EventItem from '@/components/EventItem/EventItem';
import { EventListProps } from './EventList.props';

const EventList: FC<EventListProps> = ({ events }) => (
    <ul>
        {events.map((event) => (
            <EventItem key={event.id} event={event} />
        ))}
    </ul>
);

export default EventList;