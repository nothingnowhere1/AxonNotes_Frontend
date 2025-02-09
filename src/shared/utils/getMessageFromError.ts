import { AxiosError } from 'axios';

export const getMessageFromError = (error: unknown) => {
	if (error instanceof AxiosError) {
		if (error.response) {
			const message = error.response.data.message;
			if (typeof message === 'string') {
				return message;
			}
			if (Array.isArray(message)) {
				return message.join(', ');
			}
		}
	}
	if (error instanceof Error) {
		return error.message;
	}

	return 'Неизвестная ошибка\n Повторите позже';
};