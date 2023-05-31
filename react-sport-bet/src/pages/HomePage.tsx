import EventList from '@/components/EventList/EventList';

import { events } from '@/data/Events';

const HomePage = () => (
    <>
        <h2>Текущие матчи</h2>
        <EventList events={events.filter((event) => event.type === 'live')} />
        <h2>Предстоящие матчи</h2>
        <EventList events={events.filter((event) => event.type === 'upcoming')} />
    </>
);

export default HomePage;