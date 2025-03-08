import { useState } from "react";
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

function Tabela({ funcionarios, error }: { funcionarios: Funcionario[], error: string | null }) {
    const [linhaExpandida, setLinhaExpandida] = useState<number | null>(null);

    const expandirInformacoes = (id: number) => {
        setLinhaExpandida(linhaExpandida === id ? null : id);
    };

    return (
        <div className="Tabela">
            <div className="header-tabela">
                <h2 className="titulo1">FOTO</h2>
                <h2 className="titulo2">NOME</h2>
                <h2 className="titulo3">CARGO</h2>
                <h2 className="titulo4">DATA DE ADMISSÃO</h2>
                <h2 className="titulo5">TELEFONE</h2>

                <svg className="circle-headerTabela" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <circle cx="8" cy="8" r="8" fill="#ffffff"></circle>
                    </g>
                </svg>
            </div>

            {error && <p className="error-get">{error}</p>}
            {funcionarios.length === 0 && !error && <p className="error-get">Nenhum funcionário encontrado.</p>}

            {funcionarios.map((funcionario) => (
                <div key={funcionario.id}>
                    <div className="item-funcionario">
                        <img className="foto-tabela" src={funcionario.image} alt="Imagem do funcionário." />
                        <p className="nome-tabela">{funcionario.name}</p>
                        <p className="cargo-tabela">{funcionario.job}</p>
                        <p className="dataDeAdmissao-tabela">{formatDate(funcionario.admission_date)}</p>
                        <p className="telefone-tabela">{formatPhone(funcionario.phone)}</p>

                        <button className="btn-expandir" onClick={() => expandirInformacoes(funcionario.id)}>
                            {linhaExpandida === funcionario.id ? (
                                <svg fill="#0500FF" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M217.6,179.2c-1.637,0-3.274-0.625-4.524-1.875L128,92.25l-85.075,85.075c-2.5,2.5-6.55,2.5-9.05,0s-2.5-6.55,0-9.05  l89.6-89.601c2.5-2.5,6.551-2.5,9.051,0l89.6,89.601c2.5,2.5,2.5,6.55,0,9.05C220.875,178.575,219.237,179.2,217.6,179.2z" />
                                </svg>
                            ) : (
                                <svg fill="#0500FF" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M38.399,76.8c1.637,0,3.274,0.625,4.524,1.875l85.075,85.076l85.075-85.076c2.5-2.5,6.55-2.5,9.05,0s2.5,6.55,0,9.05  l-89.6,89.601c-2.5,2.5-6.551,2.5-9.051,0l-89.6-89.601c-2.5-2.5-2.5-6.55,0-9.05C35.124,77.425,36.762,76.8,38.399,76.8z"/>
                                </svg>
                            )}
                        </button>
                    </div>

                    {linhaExpandida === funcionario.id && (
                        <div className="informacoes-expandidas">
                            <p><strong>CARGO:</strong> {funcionario.job}</p>
                            <p><strong>DATA DE ADMISSÃO:</strong> {formatDate(funcionario.admission_date)}</p>
                            <p><strong>TELEFONE:</strong> {formatPhone(funcionario.phone)}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Tabela;
