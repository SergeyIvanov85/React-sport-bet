import { FC } from 'react';
import { BetMessageProps } from './BetMessage.props';
import { useAppDispatch } from '@/app/hooks';
import { clearCurrent } from '@/app/betSlice';

const BetMessage: FC<BetMessageProps> = ({ bet }) => {
    const { event } = bet;
    const dispatch = useAppDispatch();
    const result = bet.option === 'draw' ? 'draw' : `${bet.option} team win`;
    return (
        <div>
            <p>
                Спасибо за Вашу ставку на матч {event?.homeTeam?.name} против{' '}
                {event?.awayTeam?.name}, результат - {result}, СУММА СТАВКИ = {bet.value}{' '}
                BYN успешно принята.
            </p>
            <button type='button' onClick={() => dispatch(clearCurrent())}>
                x
            </button>
        </div>
    );
};

export default BetMessage;