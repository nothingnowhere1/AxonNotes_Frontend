import { Button, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import { TextFieldForm } from '@/shared';
import { apiAuthRegister } from '@/modules/auth/shared/services/auth.service';

interface RegistrationFormProps {
	email: string;
	password: string;
}

export function RegistrationForm() {
	const { control, handleSubmit } = useForm<RegistrationFormProps>();

	const { mutate } = apiAuthRegister();

	const onSubmit = (data: RegistrationFormProps) => {
		mutate(data);
		console.log('register', data);
	};

	return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Typography
            color={'primary'}
            variant={'h1'}
        >
            Регистрация
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