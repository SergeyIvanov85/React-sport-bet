import { FC } from 'react';

import Event from '@/components/Event/Event';
import { EventListProps } from './EventList.props';

const EventList: FC<EventListProps> = ({ events }) => (
    <ul>
        {events.map(event =>
            <Event event={event} />
        )}
    </ul>
);

export default EventList;