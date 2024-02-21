import React from "react";
import style from './Button.module.scss';

class Button extends React.Component<{ type?: "button" | "submit" | "reset" | undefined, texto: string }> {
    render() {
        return (
            <button type={this.props.type || "button"} className={style.botao}>
                {this.props.texto}
            </button>
        )
    }
}

export default Button;