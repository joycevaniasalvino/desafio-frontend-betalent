import { formatDate } from "../utils/formatDate";
import { formatPhone } from "../utils/formatPhone";

interface Funcionario {
    id: number;
    image: string;
    name: string;
    job: string;
    admission_date: string;
    phone: string;
}

interface ModalFuncionarioProps {
    funcionario: Funcionario;
    setAbrirModal: (value: boolean) => void;
}

const ModalFuncionario = ({ funcionario, setAbrirModal }: ModalFuncionarioProps) => {
    return (
        <div className="fundo-card">
            <div className="card-funcionario" key={funcionario.id}>
                <div className="div-btn-fecharModal">
                    <button className="btn-fecharModal" onClick={() => setAbrirModal(false)}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_11083)"> <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11083"> <rect width="24" height="24"></rect> </clipPath> </defs> </g></svg>
                    </button>
                </div>
                <div className="informacoes">
                    <img className="foto-card" src={funcionario.image} alt="Imagem do funcionário." />

                    <p className="nome-card">{funcionario.name}</p>
                    <p className="cargo-card">{funcionario.job}</p>
                    <p className="dataDeAdmissao-card">{formatDate(funcionario.admission_date)}</p>
                    <p className="telefone-card">{formatPhone(funcionario.phone)}</p>
                </div>
            </div>
        </div>
    );
};

export default ModalFuncionario;
