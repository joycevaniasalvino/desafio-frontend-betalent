import { FC, useState } from "react";
import { Funcionario } from "../services/funcionarios";

interface BarraDePesquisaProps {
    funcionarios: Funcionario[];
    setFuncionariosFiltrados: (funcionarios: Funcionario[]) => void;
}

const BarraDePesquisa: FC<BarraDePesquisaProps> = ({ funcionarios, setFuncionariosFiltrados }) => {
    const [query, setQuery] = useState("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        setQuery(value);
    
        if (value.trim() === "") {
            setFuncionariosFiltrados(funcionarios);
        } else {
            const filtrados = funcionarios.filter((funcionario) => {
                const telefoneFormatado = `+${funcionario.phone}`.replace(/\+/g, "");
                
                return (
                    funcionario.name.toLowerCase().startsWith(value.toLowerCase()) ||
                    funcionario.job.toLowerCase().startsWith(value.toLowerCase()) ||
                    telefoneFormatado.startsWith(value.replace(/\+/g, ""))
                );
            });
    
            setFuncionariosFiltrados(filtrados);
        }
    };
    

    return (
        <div className="barraPesquisa">
            <input type="text" placeholder="Pesquisar"  value={query}
        onChange={handleSearch}/>
            <button className="btn-barraPesquisa">
                <svg className="svg-pesquisa" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title />
                    <g data-name="Layer 2" id="Layer_2"><path d="M18,10a8,8,0,1,0-3.1,6.31l6.4,6.4,1.41-1.41-6.4-6.4A8,8,0,0,0,18,10Zm-8,6a6,6,0,1,1,6-6A6,6,0,0,1,10,16Z" /></g>
                </svg>
            </button>
        </div>
    );
};

export default BarraDePesquisa;
