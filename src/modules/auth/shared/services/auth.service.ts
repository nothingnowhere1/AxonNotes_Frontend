import { axiosClient, useCustomMutation } from '@/shared';

export const apiAuthLogin = () => {
	return useCustomMutation({
		mutationFn: ({ email, password }: {
			email: string,
			password: string
		}) => axiosClient.post('/auth/login', { email, password }),
		queryKey: []
	});
};

export const apiAuthRegister = () => {
	return useCustomMutation({
		mutationFn: ({ email, password }: {
			email: string,
			password: string
		}) => axiosClient.post('/auth/register', { email, password }),
		queryKey: []
	});
};