import { createSlice } from '@reduxjs/toolkit';
import { IGameStatus } from '../../../providers/types';

const initialState: IGameStatus = {
	upPoolData: {
		bets: [],
		betPool: 0
	},
	downPoolData: {
		bets: [],
		betPool: 0
	},
	totalBets : 0,
	btcPrice: 0,
	startBtcPrice: 0,
	gamePhase: 0,
	phaseTimeUntil: 0,
	gameResult: 0,
	last3GamesRes: [],
	livePlayers: 0,
	allTimeWins: 0,
	winPercent: {
		downPercent : 0,
		upPercent : 0
	},
	priceHistory: []
}

const sliceGameStatus = createSlice({
	name: 'gameStatus',
	initialState,
	reducers: {
		setGameStatus(state, action) {
			state.upPoolData.bets = action.payload.upPoolData.bets;
			state.upPoolData.betPool = action.payload.upPoolData.betPool;

			state.downPoolData.bets = action.payload.downPoolData.bets;
			state.downPoolData.betPool = action.payload.downPoolData.betPool;

			state.totalBets = action.payload.totalBets;
			state.btcPrice = action.payload.btcPrice;
			state.startBtcPrice = action.payload.startBtcPrice;
			state.gamePhase = action.payload.gamePhase;
			state.phaseTimeUntil = action.payload.phaseTimeUntil;
			state.gameResult = action.payload.gameResult;
			state.last3GamesRes = action.payload.last3GamesRes;
			state.livePlayers = action.payload.livePlayers;
			state.allTimeWins = action.payload.allTimeWins;
			state.winPercent.downPercent = action.payload.winPercent.downPercent;
			state.winPercent.upPercent = action.payload.winPercent.upPercent;
			state.priceHistory= action.payload.priceHistory;
		}
	}
});

export const { setGameStatus } = sliceGameStatus.actions;
export const gameStatusReducer = sliceGameStatus.reducer;
