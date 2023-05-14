import { usersReducer, paginationReeducer, errorReducer } from 'reducers';
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ErrorActionsReturnT, PaginationActionsReturnT, UserActionsReturnT } from 'types';

const reducers = combineReducers({
    users: usersReducer,
    pagination: paginationReeducer,
    error: errorReducer,
});

export const store = legacy_createStore(reducers, applyMiddleware(thunk));

export type RootSate = ReturnType<typeof store.getState>;

export type AppStoreType = ReturnType<typeof reducers>;

type AppActionsType = UserActionsReturnT | PaginationActionsReturnT | ErrorActionsReturnT;

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
