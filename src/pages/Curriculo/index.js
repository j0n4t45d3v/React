import DadosPessoais from "../../components/DadosPessoais/index"
import DadosProfissionais from "../../components/DadosProfissionais";
import FormacaoAcademica from "../../components/FormacaoAcademica";

export function Curriculo() {
    return (
        <div>
            <DadosPessoais/>
            <DadosProfissionais/>
            <FormacaoAcademica/>
        </div>
    );
}