import React, { memo } from 'react';
import { type Control, Controller, type FieldPath, type FieldValues, type Path, type PathValue } from 'react-hook-form';
import {
	FormControl,
	FormHelperText,
	FormLabel,
	TextField as Base,
	type TextFieldProps as BaseProps
} from '@mui/material';

export type ControlledFieldProps<T extends FieldValues> = {
	control: Control<T>;
	name: FieldPath<T>;
	label?: string;
	formSx?: BaseProps['sx'];
} & BaseProps;

export function TextFieldForm<T extends FieldValues>({
														 formSx,
														 label,
														 name,
														 defaultValue,
														 control,
														 onBlur,
														 onChange,
														 ...props
													 }: ControlledFieldProps<T>) {
	return (
		<Controller
			control={control}
			name={name}
			defaultValue={
				(defaultValue ?? '') as PathValue<T, Path<T> & string>
			}
			render={({
						 field: {
							 onChange: fieldOnChange,
							 onBlur: fieldOnBlur,
							 ...field
						 },
						 fieldState: { error }
					 }) => (
				<FormControl
					fullWidth
					margin={props.margin}
					error={!!error}
					sx={formSx}
				>
					{label && (
						<FormLabel sx={{ mb: 1 }}>
							{label}
						</FormLabel>
					)}
					<Base
						{...props}
						{...field}
						onChange={(e) => {
							onChange?.(e);
							fieldOnChange(e);
						}}
						onBlur={(e) => {
							onBlur?.(e);
							fieldOnBlur();
						}}
						sx={{
							marginTop: 1
						}}
					/>
					{error && (
						<FormHelperText>
							{error?.message}
						</FormHelperText>
					)}
				</FormControl>
			)}
		/>
	);
}

export default memo(TextFieldForm) as <T extends FieldValues>(
	props: ControlledFieldProps<T>
) => React.JSX.Element;
