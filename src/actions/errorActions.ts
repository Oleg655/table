import { ErrorMessageType } from 'enums';

export const setErrorMessage = (message: string | null) =>
    ({
        type: ErrorMessageType.SET_ERROR_MESSAGE,
        message,
    } as const);
