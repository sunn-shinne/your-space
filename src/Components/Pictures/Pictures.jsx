import './Pictures.css'
import React, { useState } from 'react';


const Pictures = () => {

    const [openImg, setOpenImg] = useState([false, null])


    const seligPhotos = [
        'https://images.pexels.com/photos/7688156/pexels-photo-7688156.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3153204/pexels-photo-3153204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3182808/pexels-photo-3182808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/4623349/pexels-photo-4623349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/2977544/pexels-photo-2977544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/1181426/pexels-photo-1181426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/1181357/pexels-photo-1181357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/1181474/pexels-photo-1181474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/3747107/pexels-photo-3747107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/326518/pexels-photo-326518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    ]


    return (
        <div className="mt-5">
            <div className="row pb-5">
                    {seligPhotos.map(item => (
                        <div className="col-sm-6 col-md-4 item mt-3" key={item}>
                            <img className="img-fluid Img" src={item} onClick={() => setOpenImg([true, item])} />
                        </div>
                    ))} 
            </div>

            {openImg[0]
                ? <div className='PopImgBlock' onClick={() => setOpenImg([false, null])}>
                    <img src={openImg[1]} />
                </div>
                : null
            }
        </div>

    );
}

export default Pictures