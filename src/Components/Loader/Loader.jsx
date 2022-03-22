import './Loader.css'

export const Loader = (placement) => {
    const flag = (placement === 'tabs')
    const el = flag
            ? <div className='loader-wrapper-tabs'>
                <div className="lds-dual-ring"></div>
            </div>
            : <div className='loader-wrapper-form'>
                <div className="lds-dual-ring"></div>
            </div>

    return el
}