import { ACTIONS } from './constants';
import { IAppState, IAction } from './types';

export const reducer = (state: IAppState, action: IAction) => {
    switch (action.type) {
        case ACTIONS.SET_FILTERS:
            return { ...state, filters: { ...state.filters, ...action.filters } };
        case ACTIONS.SET_POINTS:
            return { ...state, points: [...action.points], loading: false };
        case ACTIONS.LOAD_POINTS:
            return { ...state, points: [], loading: true }
        case ACTIONS.SET_ERROR:
            return { ...state, points: [], loading: false, error: action.error }
    }
};
