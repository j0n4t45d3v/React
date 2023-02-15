import "./index.css";
import icon from "../../assets/download.png";

export default function DadosPessoais() {
  return (
    <div>
      <div className="div">
      <img className="bolsonaro-dancarino" src={icon} />
      <h1>Dados Pessoais</h1>

      </div>
      <ul className="lista">
        <li><b>Nome:</b> Jonatas</li>
        <li><b>email:</b> delimajonatas875@gmail.com</li>
        <li><b>Telefone:</b> (81) 9 88888-8888</li>
      </ul>
    </div>
  );
}
