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

function Tabela({ funcionarios }: { funcionarios: Funcionario[] }) {
    return (
        <div className="Tabela">
            <div className="header-tabela">
                <h2 className="titulo1">FOTO</h2>
                <h2 className="titulo2">NOME</h2>
                <h2 className="titulo3">CARGO</h2>
                <h2 className="titulo4">DATA DE ADMISSÃO</h2>
                <h2 className="titulo5">TELEFONE</h2>

                <svg className="circle-headerTabela" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="8" cy="8" r="8" fill="#ffffff"></circle> </g></svg>
            </div>

            {funcionarios.length === 0 && <p className="error-get">Nenhum funcionário encontrado.</p>}

            {funcionarios.map((funcionario) => (
                <div className="item-funcionario" key={funcionario.id}>
                    <img className="foto-tabela" src={funcionario.image} alt="Imagem do funcionário." />
                    <p className="nome-tabela">{funcionario.name}</p>
                    <p className="cargo-tabela">{funcionario.job}</p>
                    <p className="dataDeAdmissao-tabela">{formatDate(funcionario.admission_date)}</p>
                    <p className="telefone-tabela">{formatPhone(funcionario.phone)}</p>

                    <button className="btn-expandir">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 9L12 15L6 9" stroke="#0500FF"></path>
                        </svg>
                    </button>
                </div>
            ))}

        </div>
    )
}

export default Tabela;