import { TextField } from '@material-ui/core';
import { ChangeEvent } from 'react';

export interface SignInTextFieldProps {
  handleChange: (e: ChangeEvent<any>) => void;
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  touched?: boolean | undefined;
  errors?: string | undefined;
}

export const SignInTextField: React.FC<SignInTextFieldProps> = ({
  handleChange,
  label,
  type,
  name,
  placeholder,
  touched,
  errors,
}) => {
  return (
    <TextField
      onChange={handleChange}
      fullWidth
      variant="outlined"
      color="primary"
      label={label}
      type={type ? type : 'text'}
      name={name}
      placeholder={placeholder ? placeholder : ''}
      InputLabelProps={
        placeholder
          ? {
              shrink: true,
            }
          : undefined
      }
      style={{
        marginBottom: 20,
        height: 70,
      }}
      error={Boolean(touched && errors)}
      helperText={touched ? errors : ''}
    />
  );
};
