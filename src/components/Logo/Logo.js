import "./Logo.css";
import Imagem from "../../assets/logo.svg";

export default function Logo() {
    return (
        <div class="logo-div">
            <a href="">
                <img class="logo-img" src={Imagem} />
            </a>
        </div>
    )
}