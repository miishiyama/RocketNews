import "./Link.css";
import Arrowright from "../../assets/arrow-right.svg";

export default function Link() {
    return (
        <div class="link-div">
            <a class="link-a" href="">deixe-me ler primeiro</a>
            <a class="link-a2" href="">
                <img class="link-img" src={Arrowright} />
            </a>
        </div>
    )
}