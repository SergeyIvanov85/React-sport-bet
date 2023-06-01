import EventBlock from '@/components/EventBlock/EventBlock';
import { MainWrapper } from './HomePage.styles';
import { events } from '@/data/Events';
import { selectCurrentBet } from '@/app/betSlice';
import { useAppSelector } from '@/app/hooks';
import BetMessage from '@/components/BetMessage/BetMessage';

const HomePage = () => {
    const bet = useAppSelector(selectCurrentBet);

    return (
        <MainWrapper>
            {bet && <BetMessage bet={bet} />}
            <EventBlock
                heading='Текущие события'
                events={events.filter((event) => event.type === 'live')}
            />
            <EventBlock
                heading='Предстоящие события'
                events={events.filter((event) => event.type === 'upcoming')}
            />
        </MainWrapper>
    );
};

export default HomePage;