import { usersReducer } from 'reducers';
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { UserActionReturnT } from 'types';

const reducers = combineReducers({
    users: usersReducer,
});

export const store = legacy_createStore(reducers, applyMiddleware(thunk));

export type RootSate = ReturnType<typeof store.getState>;

export type AppStoreType = ReturnType<typeof reducers>;

type AppActionsType = UserActionReturnT;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = ThunkDispatch<RootState, unknown, AppActionsType>;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AppActionsType
>;

// @ts-ignore
window.store = store;
