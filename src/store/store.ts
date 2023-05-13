import { usersReducer, paginationReeducer } from 'reducers';
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { PaginationActionsReturnT, UserActionsReturnT } from 'types';

const reducers = combineReducers({
    users: usersReducer,
    pagination: paginationReeducer,
});

export const store = legacy_createStore(reducers, applyMiddleware(thunk));

export type RootSate = ReturnType<typeof store.getState>;

export type AppStoreType = ReturnType<typeof reducers>;

type AppActionsType = UserActionsReturnT | PaginationActionsReturnT;

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
