import { List, ListItem, ListItemIcon, ListItemText, Paper, TextField } from '@material-ui/core';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Field, Form, Formik, FormikProps } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { FlightCard } from './FlightCard';
import { PassengerDetailsFormPropsType } from './PassengerDetailsStep';
import DraftsIcon from '@material-ui/icons/Drafts';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';

// {[...Array(12)].map((item, index) => (
//   <ToggleButton key={index} value={index}>
//     <AirlineSeatReclineNormalIcon />
//   </ToggleButton>
// ))}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    passDetailsPaper: {
      marginBottom: 20,
      padding: 20,
    },
    passDetailsPaperHeader: {
      fontSize: 24,
      fontWeight: 500,
      paddingBottom: 10,
    },
    passDetailsFormFields: {
      display: 'flex',
      marginBottom: 20,
    },
    passDetailsFormField: { height: 70 },
  })
);

export type SeatingStepFormPropsType = {
  seat: string;
};

type SeatingStepPropsType = {
  formRef: React.RefObject<FormikProps<SeatingStepFormPropsType>>;
  nextStep: () => void;
};
export const SeatingStep: React.FC<SeatingStepPropsType> = ({ formRef, nextStep }) => {
  const classes = useStyles();

  const [seat, setSeat] = React.useState<number>(0);

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newSeat: number) => {
    setSeat(newSeat);
  };

  return (
    <div>
      <Paper className={classes.passDetailsPaper}>
        <Formik
          innerRef={formRef}
          initialValues={
            {
              seat: '',
            } as SeatingStepFormPropsType
          }
          onSubmit={(formData: SeatingStepFormPropsType, { setSubmitting }) => {
            console.log(formData);
            setSubmitting(false);
            nextStep();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                color="primary"
                as={TextField}
                variant="outlined"
                label="Seat"
                name="seat"
                value="2E"
                fullWidth
              />
            </Form>
          )}
        </Formik>

        <List>
          <StyledListItem button={false as any} selected={true}>
            <Typography>Economy class</Typography>
            <StyledToggleButtonGroup value={seat} exclusive onChange={handleAlignment}>
              <div>
                <ToggleButton value={1}>
                  <AirlineSeatReclineNormalIcon />
                </ToggleButton>
                <ToggleButton value={2}>
                  <AirlineSeatReclineNormalIcon />
                </ToggleButton>
              </div>
              <div>
                <ToggleButton value={1}>
                  <AirlineSeatReclineNormalIcon />
                </ToggleButton>
                <ToggleButton value={2}>
                  <AirlineSeatReclineNormalIcon />
                </ToggleButton>
              </div>
            </StyledToggleButtonGroup>
          </StyledListItem>
          <StyledListItem button={false as any}>
            <Typography>Bussines class</Typography>
          </StyledListItem>
          <StyledListItem button={false as any}>
            <Typography>First class</Typography>
          </StyledListItem>
        </List>
      </Paper>
    </div>
  );
};

const StyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    margin: theme.spacing(0.5),
    border: 'none',
    '&:not(:first-child)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-child': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}))(ToggleButtonGroup);

export const StyledListItem = withStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // '& .MuiListItem-root': {
    //   '& .Mui-selected': {
    //     backgroundColor: 'red',
    //     margin: theme.spacing(5),
    //   },
    // },
    '&$selected': {
      backgroundColor: '#2cb16222',
      transition: '0.5s',
    },
    '&$selected:hover': {
      transition: '0.5s',
      backgroundColor: '#2cb16233',
    },
  },
  selected: {},
}))(ListItem);
