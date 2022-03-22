import {
    FormControl,
    FormControlLabel,
    FormLabel, InputLabel, MenuItem, NativeSelect,
    Radio,
    RadioGroup, Select,
    Slider,
    TextField,
    withStyles
} from "@material-ui/core";
import MuiPhoneNumber from "material-ui-phone-number";
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { addDays, dateToLongString } from "./dateConfig";
import { Loader } from "../Components/Loader/Loader";
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';



const styles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: 200,
        marginBottom: 50,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const MyTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#DECDC5',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));

function getStepContent(step, personData, bookData, isLoading, timeArr, deskList) {

    const classes = styles();

    const onChangeDesk = (e) => {
        bookData[1](prev => {
            const copy = { ...prev }

            copy.deskId = + e.target.value
            copy.deskSize = deskList[+ e.target.value - 1].size.toUpperCase()
            copy.devices = deskList[+ e.target.value - 1].devices.map(item => item.name)

            return copy
        })
    };

    const onDateChange = (e) => {
        bookData[1](prev => {
            const copy = { ...prev }
            copy.date = e.target.value
            return copy
        })
    };

    const createSelectItems = () => {
        const items = []
        let date = new Date()
        for (let i = 0; i < 7; i++) {
            items.push(<MenuItem
                value={dateToLongString((addDays(date, i)))}>{dateToLongString(addDays(date, i))}</MenuItem>)
        }
        return items
    }
    const onChangeTime = (e) => {
        bookData[1](prev => {
            const copy = { ...prev }
            copy.time = e.target.value
            return copy
        })
    }


    const GreenRadio = withStyles({
        root: {
            color: '#6CBFF0',
            '&$checked': {
                color: '#417FA3',
            },
        },
        checked: {},
    })((props) => <Radio color="default" {...props} />);

    const onNameChange = (e) => {
        personData[1](prev => {
            const copy = { ...prev }
            copy.name = e.target.value
            return copy
        })
    }
    const onSurnameChange = (e) => {
        personData[1](prev => {
            const copy = { ...prev }
            copy.surname = e.target.value
            return copy
        })
    }
    const onNumberChange = (value) => {
        if (value) {
            personData[1](prev => {
                const copy = { ...prev }
                copy.number = value
                return copy
            })
        }
    }
    switch (step) {
        case 0:
            return (
                <form className='mt-2 mb-3'>

                    <FormControl fullWidth color="primary" component="fieldset" className="m-2 mb-5">
                        <FormLabel row component="legend" fullWidth>Выберите стол</FormLabel>
                        <RadioGroup row aria-label="desk" name="desk"
                            value={bookData[0].deskId}
                            onChange={onChangeDesk}>

                            {deskList.map((table, i) => {
                                return <MyTooltip
                                    title={
                                        <React.Fragment>
                                            <Typography color="inherit">Характеристики</Typography>
                                            <em>Размер стола: </em> <b>{table.size.toUpperCase()}</b><br />
                                            <em>Доступные девайсы: </em>
                                            {(table.devices.length > 0)
                                                ? <b>{table.devices.map(item => item.name).join(', ')}</b>
                                                : <b>—</b>}

                                        </React.Fragment>
                                    }
                                ><FormControlLabel value={table.id}
                                    control={<GreenRadio />}
                                    label={table.name}
                                    style={{ width: 200 }}
                                    disabled={false}
                                    />
                                </MyTooltip>
                            })
                            }
                        </RadioGroup>
                    </FormControl>


                    <div className='row>'>
                        <div className='col-12'>
                            <FormControl className={classes.formControl} fullWidth>
                                <FormLabel row component="legend" fullWidth>Выберите дату</FormLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={bookData[0].date}
                                    defaultValue={bookData[0].date}
                                    onChange={onDateChange}
                                >
                                    {createSelectItems()}
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    {isLoading
                        ? <Loader placement={'form'} />
                        : timeArr.length > 0
                            ?
                            <FormControl color="primary" component="fieldset" className="m-2">
                                <FormLabel row component="legend">Выберите время</FormLabel>
                                <RadioGroup row aria-label="time" name="time"
                                    value={bookData[0].time}
                                    onChange={onChangeTime}>
                                    {timeArr.map(time =>
                                        <FormControlLabel
                                            value={time.time}
                                            control={<GreenRadio />}
                                            label={time.time}
                                            style={{ width: 170 }}
                                            disabled={time.disabled}
                                        />
                                    )}
                                </RadioGroup>
                            </FormControl>
                            : null
                    }

                </form>
            )


        case 1:
            return (
                <form>
                    <TextField id="standard-basic" label="Имя" fullWidth className="mb-2 mt-2"
                        value={personData[0].name} onChange={onNameChange} />
                    <TextField id="standard-basic" label="Фамилия" fullWidth className="mb-2 mt-3"
                        value={personData[0].surname} onChange={onSurnameChange} />
                    <MuiPhoneNumber id="standard-basic" label="Номер" fullWidth className="mb-4 mt-3"
                        data-cy="user-phone" defaultCountry={"ru"}
                        value={personData[0].number} onChange={onNumberChange} />
                </form>
            );
        default:
            return 'Unknown step';
    }
}

export default getStepContent