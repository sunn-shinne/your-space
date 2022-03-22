import './News.css'


const News = () => {

    const news = [
        {
            text: "Я должен был встретиться с клиентом, чтобы обсудить наш новый проект. Он сказал, что будет ждать меня в кафе, расположенном в здании, где я работаю. Я спустился на лифте, прошел через холл и оказался в кафе. Когда я вошел, мой клиент уже ждал меня за столиком. Но там никого не оказалось.",
            img: "https://images.pexels.com/photos/8519253/pexels-photo-8519253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            text: "Мне снился сон. Я нахожусь в каком-то огромном здании, напоминающем офисное. Посреди него стоит огромный стол, за которым сидит человек. Он что-то пишет. Я подхожу к нему и спрашиваю, где туалет. Он отвечает: \"Туалет -- второй этаж, направо и налево\". Я поднимаюсь по лестнице, прохожу через коридор и вижу дверь с надписью \"туалет\". Захожу в кабинку и пытаюсь закрыть за собой дверь, но она не закрывается. Я смотрю в зеркало и вижу, что я -- это не я, а какой-то парень, которого я видел во сне.",
            img: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            text: "Коворкинг, куда я устроился, был полон людей, которые все время говорили по телефону. Они говорили, говорили и говорили. Когда я вошел, они прекратили разговор и уставились на меня в тишине. Через минуту они снова заговорили по телефону...",
            img: "https://images.pexels.com/photos/8101503/pexels-photo-8101503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
    ]


    return (
        <div className='News mt-5 pb-5'>
            <p className="text-light mb-3 text-uppercase text-center fs-4 mb-4">Последние новости центра</p>
            <div className='row mb-5'>
                {news.map(item => (
                    <div className='col-4'>
                        <div className="card Block-bg shadow">
                            <img src={item.img} className="card-img-top Img-size" alt="..." />
                            <div className="card-body">
                                <p className="card-text">{item.text}</p>
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default News