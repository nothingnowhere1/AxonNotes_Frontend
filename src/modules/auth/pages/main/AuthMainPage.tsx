import { Stack } from '@mui/material';
import { RegistrationForm } from '@/modules/auth/pages/main/components/RegistrationForm';
import { AuthorizationForm } from '@/modules/auth/pages/main/components/AuthorizationForm';

export function AuthMainPage() {
	return (
		<Stack>
			<RegistrationForm />
			<AuthorizationForm />
		</Stack>
	);
}