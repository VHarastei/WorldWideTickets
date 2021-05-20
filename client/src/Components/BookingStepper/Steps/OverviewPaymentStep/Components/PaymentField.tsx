import { createStyles, makeStyles, TextField, Theme } from '@material-ui/core';
import { Field } from 'formik';
import InputMask from 'react-input-mask';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paymentFormField: {
      height: 70,
      margin: '10px 0px',
    },
  })
);

type PropsType = {
  name: string;
  mask: string;
  label: string;
  placeholder: string;
  touched: any;
  errors: any;
  marginLeft?: boolean;
};

export const PaymentField: React.FC<PropsType> = ({
  name,
  mask,
  label,
  placeholder,
  touched,
  errors,
  marginLeft,
}) => {
  const classes = useStyles();

  return (
    <Field name={name}>
      {({ field }: any) => {
        return (
          <InputMask
            {...field}
            mask={mask}
            //@ts-ignore
            maskChar=" "
          >
            {(innerProps: any) => (
              <TextField
                {...innerProps}
                variant="outlined"
                name={name}
                label={label}
                placeholder={placeholder}
                InputLabelProps={{ shrink: true }}
                fullWidth
                error={Boolean(touched[name] && errors[name])}
                helperText={touched[name] ? errors[name] : ''}
                className={classes.paymentFormField}
                style={marginLeft && { marginLeft: 20 }}
              />
            )}
          </InputMask>
        );
      }}
    </Field>
  );
};
