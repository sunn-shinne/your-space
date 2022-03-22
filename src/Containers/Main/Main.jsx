import cls from './Main.module.css'
import Intro from "../../Components/Intro/Intro";
import News from "../../Components/News/News";

const Main = () => {
    return (
        <div className={cls.Main}>
            <Intro/>
            <News/>
        </div>
    )
}

export default Main