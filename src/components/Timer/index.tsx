import Button from "../Button";
import Watch from "./Watch";
import style from './Timer.module.scss';

export default function Timer() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Watch />
            </div>
            <Button texto="Começar"/>
        </div>
    )
}