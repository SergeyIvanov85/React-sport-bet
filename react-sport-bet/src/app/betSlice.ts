import { SportEvent } from '@/data/Events';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface BetState {
    bets: Bet[];
    currentBet: Bet | null;
}

export interface Bet {
    event: SportEvent | undefined;
    option: 'хозяева' | 'гости' | 'ничья' | null;
    value: string;
}

const initialState: BetState = {
    bets: [],
    currentBet: null
};

const betSlice = createSlice({
    name: 'bet',
    initialState,
    reducers: {
        addBet: (state, action: PayloadAction<Bet>) => {
            const currentBet = action.payload;
            state.bets.push(currentBet);
            state.currentBet = currentBet;
        },
        clearCurrent: (state) => {
            state.currentBet = null;
        }
    }
});

export const { addBet, clearCurrent } = betSlice.actions;

export const selectCurrentBet = (state: RootState) => state.bets.currentBet;

export default betSlice.reducer;