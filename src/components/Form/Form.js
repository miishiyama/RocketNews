import "./Form.css";
import Send from "../../assets/send.svg";

export default function Form() {
    return (
        <form class="form-form">
            <label class="form-label">Insira seu e-mail:</label>
            <div class="form-div">
                <input class="form-input" type="email" placeholder="oi@rocketseat.com"></input>
                <button class="form-button" onClick={enviar} type="submit">
                    <img class="form-img" src={Send} />
                </button>
            </div>
        </form>
    )
}

function enviar() {
    alert("E-mail enviado com sucesso!")
}