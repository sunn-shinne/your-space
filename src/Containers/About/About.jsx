import './About.css'
import {YMaps, Map, Placemark} from "react-yandex-maps";
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core";

const mapData = {
    center: [55.751574, 37.573856],
    zoom: 10,
};

const coordinates = [
    // [55.684117, 37.738450],
    [55.863323, 37.536329]
];

const About = () => {
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
        <div className="About container mt-4">
            <div className="row">
                <div className="col-7">
                    <div className="jumbotron p-5 rounded-3 shadow pb-3 Block-bg">
                        <h3 className="display-6 mb-4">О нас</h3>
                        <p className="lead">Открытое сообщество людей с 
                        разными знаниями и профессиональными навыками — 
                        принципиальное отличие коворкингов от других пространств для работы. 
                        Наши клиенты утверждают, что обмен опытом и идеями повышает продуктивность и помогает в поиске нетривиальных решений рабочих задач.</p>
                        <p className="lead">Придлагаем и Вам опробывать все преимущества коворкинга!</p>
                        <hr className="my-4 mb-3"/>
                        <p className="fs-5 mb-2">Наш адрес:</p>

                        <div className='row mb-2'>
                            <div className='AddressBlock col-6'>
                                <p className="fs-6 text-muted mb-1"><em>Дегунинская улица, 3к5</em></p>
                                <p className="fs-6 text-muted mb-1"><em>м. Селигерская</em></p>
                                <p className='text-muted'><em>тел: 8(800)555-3535</em></p>
                            </div>
                            {/* <div className='AddressBlock col-6'>
                                <p className="fs-6 text-muted mb-1"><em>Люблинская улица, 61</em></p>
                                <p className="fs-6 text-muted mb-1"><em>м. Люблино</em></p>
                                <p className='text-muted'><em>тел: 8(900)599-3680</em></p>
                            </div> */}
                        </div>

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
                <div className="col-5">
                    <div className="Map" >
                        <YMaps>
                            <Map defaultState={mapData} className="Map">
                                {coordinates.map(coordinate => <Placemark geometry={coordinate}/>)}
                            </Map>
                        </YMaps>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About