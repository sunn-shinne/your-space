import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import './BookingForm.css'
import { ThemeProvider } from '@material-ui/styles';
import getStepContent from "../../Tools/getStepContent";
import Amount from "../Amoun/Amount";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#417FA3',
        }
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        zIndex: 1000
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
    stepper: {
        backgroundColor: 'rgba(255, 255, 255, 0.85)!important;',
        borderRadius: 5,
        paddingTop: 100,
        position: 'relative',
        bottom: 88,
        marginTop: 20,
        paddingRight: 60,
        paddingLeft: 60,
        boxShadow: '6px 5px 15px grey;'
    }
}));

function getSteps() {
    return ['Выберите стол, дату и время', 'Укажите свои данные'];
}


export default function BookingForm({
    timeArr,
    personData,
    deskList,
    bookData,
    isLoading,
    submit,
    showEnd
}) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [isNextStep, setIsNextStep] = React.useState(false);
    const steps = getSteps();

    const isNextStepAvailable = () => {
        console.log(activeStep == 1 && (!personData[0].name || !personData[0].surname || !personData[0].number))
        if (activeStep == 0 && bookData[0].time == "") {
            setIsNextStep(false)
        }
        else if (activeStep == 1 && (!personData[0].name || !personData[0].surname || !personData[0].number || personData[0].number.length < 18)) {
            setIsNextStep(false)
        }
        else setIsNextStep(true)
    }

    useEffect(() => {
        isNextStepAvailable()
        console.log(isNextStep)

    }, [personData[0].name,  personData[0].surname, personData[0].number, bookData[0].time, activeStep])

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <>
            <div className="row pt-3">
                <h3 className="display-6 mt-2 title">Бронирование</h3>
            </div>
            <div className="BookingForm row mt-2 mb-5">
                <div className={classes.root}>
                    <ThemeProvider theme={theme}>
                        <Stepper activeStep={activeStep} orientation="vertical" className={classes.stepper}>
                            {steps.map((label, index) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                    <StepContent>
                                        <Typography>{
                                            getStepContent(index, personData, bookData, isLoading, timeArr, deskList)}
                                        </Typography>
                                        <div className={classes.actionsContainer}>
                                            <div>
                                                <Button
                                                    disabled={activeStep === 0}
                                                    onClick={handleBack}
                                                    className={classes.button}
                                                    color="primary"
                                                >
                                                    Назад
                                                </Button>
                                                {<Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={handleNext}
                                                    className={classes.button}
                                                    color="primary"
                                                    disabled={!isNextStep}
                                                >
                                                    {'Далее'}
                                                </Button>
                                                }
                                            </div>
                                        </div>
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                        {showEnd
                            ? <div className='EndMessage Block-bg rounded p-5 pb-4 pt-4'>
                                <p className="lead fs-2">Данные отправлены.</p>
                                <p className="lead fs-3">Ваш стол забронирован на {bookData[0].date}, {bookData[0].time}. Не забудьте взять с собой
                                    паспорт, для идентификации и подтверждения брони.</p>
                                <p className="lead fs-4">С нетерпением ждем вас! :)</p>
                                <p className="lead">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => window.location.reload()}
                                        className={classes.button}
                                    >
                                        {'Начать с начала'}
                                    </Button>
                                </p>
                            </div>
                            : <Amount personData={personData} bookData={bookData}
                                end={activeStep === steps.length - 1} handleNext={handleNext}
                                handleBack={handleBack} classes={classes.button} activeStep={activeStep}
                                submit={submit}
                            />
                        }
                    </ThemeProvider>
                </div>
            </div>

        </>
    );
}