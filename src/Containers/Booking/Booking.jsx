import React, { useEffect, useState } from 'react';
import './Booking.css'
import BookingForm from "../../Components/BookingForm/BookingForm";
import axios from "axios";
import { FormControlLabel, Radio, withStyles } from "@material-ui/core";
import { dateToLongString } from "../../Tools/dateConfig"


const Booking = () => {


    const anyTime = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']
    const [deskList, setDeskList] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [timeArr, setTimeArr] = useState([])
    // const [renderTimeArr, setRenderTimeArr] = useState([])
    const [showEnd, setShowEnd] = useState(false)
    const [personData, setPerson] = useState({
        name: null,
        surname: null,
        number: null
    })
    const [bookData, setBookData] = useState({
        date: dateToLongString(new Date()),
        time: '',
        deskSize: null,
        devices: [],
        deskId: 1
    })


    const getDeskList = async () => {
        await axios
            .get('http://localhost:8000/desk/')
            .then((res) => {
                setDeskList(res.data)
            })
    }

    // const getRenderTimeList = () => {

    //     let copy = [...timeArr]

    //     if (copy && copy.length > 0) {
    //         copy = copy.map((item, index) => {
    //             return (
    //                 <FormControlLabel value={item.time}
    //                     control={<GreenRadio />}
    //                     label={item.time}
    //                     style={{ width: 200 }}
    //                     disabled={!item.free}
    //                 />
    //             )

    //         })
    //     }
    //     setRenderTimeArr(copy)
    // }

    const getDefaultBookingData = async () => {
        await axios
            .get('http://localhost:8000/desk/1/view/')
            .then((res) => {
                setBookData(prev => {
                    const copy = { ...prev }
                    copy.deskSize = res.data.size.toUpperCase()
                    copy.devices = res.data.devices.map(item => item.name)
                    return copy
                })
            })
    }

    const filterTime = () => {
        setLoading(true)
        const desk = deskList.find(el => el.id === bookData.deskId)
        let busyTime = []
        if (desk !== undefined) {
            busyTime = desk.time.map(item => {
                return {
                    time: item.time.substr(0, 5),
                    date: item.date
                }
            })
        }
        let timeArr = []
        if (busyTime !== undefined) {
            timeArr = anyTime.map(item => {
                if (busyTime.find(el => el.time == item && el.date == bookData.date ))
                    return {
                        time: item,
                        disabled: true
                    }
                else return {
                    time: item,
                    disabled: false
                }
            })

        }
        setTimeArr(timeArr)
        setLoading(false)
    }

    useEffect(() => {
        getDeskList()
        // getRenderTimeList()
        getDefaultBookingData()
    }, [])

    useEffect(() => {
        setBookData(prev => {
            const copy = { ...prev }
            copy.time = ''
            return copy
        })
        filterTime()
    }, [bookData.deskId, bookData.date])


    const submit = async () => {
        let timeBookId
        const json = JSON.stringify({ date: bookData.date, time: bookData.time + ":00" })

        await axios.post('http://localhost:8000/time_book/create/',
            { "date": bookData.date, "time": bookData.time + ":00", "name_user": personData.name, "surname_user": personData.surname, "phone_user": personData.number })
            .then(res => {
                timeBookId = res.data.id
            })

        const dataToUpload = []
        const deskTime = deskList.find(el => el.id === bookData.deskId).time
        if (deskTime == !undefined) {
            dataToUpload = [...deskTime]
        }
        dataToUpload.push(timeBookId)
            await axios.patch(`http://localhost:8000/desk/${bookData.deskId}/update/`, { "time": dataToUpload })
        setShowEnd(true)
    };


    const GreenRadio = withStyles({
        root: {
            color: '#6CBFF0',
            '&$checked': {
                color: '#417FA3',
            },
        },
        checked: {},
    })((props) => <Radio color="default" {...props} />);


    return (
        <div className='Booking row mr-5 ml-5'>
            <BookingForm
                personData={[personData, setPerson]}
                deskList={deskList}
                bookData={[bookData, setBookData]}
                timeArr={timeArr}
                isLoading={isLoading}
                submit={submit}
                showEnd={showEnd}
            />
        </div>
    );
}

export default Booking