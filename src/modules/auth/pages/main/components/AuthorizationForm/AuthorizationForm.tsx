import { Button, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import { TextFieldForm } from '@/shared';
import { apiAuthLogin } from '@/modules/auth/shared/services/auth.service';

interface AuthorizationFormProps {
	email: string;
	password: string;
}

export function AuthorizationForm() {
	const { control, handleSubmit } = useForm<AuthorizationFormProps>();

	const { mutate } = apiAuthLogin();

	const onSubmit = (data: AuthorizationFormProps) => {
		mutate(data);
		console.log('login', data);
	};

	return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Typography
            color={'primary'}
            variant={'h1'}
        >
            Авторизация
        </Typography>
        <Stack>
            <TextFieldForm
                control={control}
                name={'email'}
                variant={'outlined'}
                label={'Email'}
            />
            <TextFieldForm
                type={'password'}
                control={control}
                name={'password'}
                variant={'outlined'}
                label={'Пароль'}
            />
        </Stack>
        <Button type={'submit'}>
            Отправить
        </Button>
    </form>
	);
}