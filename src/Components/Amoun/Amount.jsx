import './Amount.css'
import Button from "@material-ui/core/Button";
import React from "react";
import {timeStringToDate} from "../../Tools/dateConfig";

const Amount = ({end, bookData, handleNext, classes, handleBack, activeStep, submit}) => {

    let tableCf = 1
    if (bookData[0].deskSize === 'M') {
        tableCf = 1.5
    } else if (bookData[0].deskSize === 'L') {
        tableCf = 2
    }

    let timeCf = 1
    if ((timeStringToDate(bookData[0].time) > timeStringToDate('12:00')) && (timeStringToDate(bookData[0].time) < timeStringToDate('17:00'))) {
        timeCf = 1.7
    } else if (timeStringToDate(bookData[0].time) > timeStringToDate('17:00')) {
        timeCf = 2.3
    }

    return (
        <div className='Amount Block-bg rounded'>
            <div className={'row'}>
                <div className='col-3'>
                    <p className="lead SimpleData mb-1"><strong>Дата:</strong></p>
                    <p className="lead SimpleData mb-1"><strong>Время:</strong></p>
                </div>
                <div className='col-8'>
                    <p className="lead SimpleData mb-1">{bookData[0].date}</p>
                    <p className="lead SimpleData mb-1">{bookData[0].time}</p>
                </div>
            </div>
            <hr/>
            <div className={'row'}>
                <div className='col-3'>
                    <p className="lead SimpleData mb-1"><strong>Размер стола:</strong></p>
                    <p className="lead SimpleData mb-1"><strong>Доступные девайсы:</strong></p>
                </div>
                <div className='col-8'>
                    <p className="lead SimpleData mb-1">{bookData[0].deskSize}</p>
                    <p className="lead SimpleData mb-1">{bookData[0].devices.join(', ')}</p>
                </div>
            </div>
            <hr/>
            <div className='row mt-2'>
                <div className='col-3'>
                    <p className="lead SimpleData mb-1 fs-4"><strong>Итог:</strong></p>
                </div>
                <div className='col-8'>
                    <p className="lead SimpleData mb-1 fs-4">{bookData[0].devices.length * 100 + timeCf * tableCf * 300 + " рублей"}</p>
                </div>
            </div>
            {!end
                ? <div className='row mt-3'>
                    <Button
                        variant="contained"
                        onClick={submit}
                        className={classes}
                        color="primary"
                    >
                        Забронировать
                    </Button>
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes}
                        color="primary"
                    >
                        Назад
                    </Button>
                </div>
                : null}
        </div>
    )
}

export default Amount