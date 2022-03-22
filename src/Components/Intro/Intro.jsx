import './Intro.css'
import introImg from '../../imges/main.jpg'
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core";




const Intro = () => {
    const MyButton = withStyles({
        root: {
            boxSizing: 'borderBox',
            backgroundColor: '#417FA3',
            color: 'white',
            padding: 15,
            right: 16,
            '&:hover': {
                backgroundColor: '#6CBFF0',
                color: 'white',
            },
        },
        hover: {},
    })((props) => <Button color="backgroundColor" {...props} />);


    return (
        <div className='Intro mb-5'>
            <div className='ImgBox'>
                <img src={introImg} className='IntroImg shadow' />
            </div>

            <div className="row">
                <div className="col mt-5 mb-5 z-index-top">
                    <div className="jumbotron p-5 rounded-3 shadow pb-3 Block-bg BoxSizing">
                        <h1 className="display-4 mb-4">Добро пожаловать в коворкинг!</h1>
                        <p className="lead">Коворкинг - это пространство, где каждый может найти для себя временное или постоянное место работы.</p>
                        <p className="lead">Co-working был придуман в Америке в 2005 году программистом Бредом Ньюбергом. Одной из задач такой организации труда было решение проблемы с изоляцией людей, занимающихся фрилансом.</p>
                        <hr className="my-4 mb-2" />
                        <p className="fs-4">Спешите забронировать стол для себя и своей команды!</p>
                        <p className="lead">
                            <Link className="btn btn-lg" to={'/booking'} role="button">
                                <MyButton
                                    variant="contained"
                                    onClick={() => { }}
                                >
                                    {'Бронировать'}
                                </MyButton>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro