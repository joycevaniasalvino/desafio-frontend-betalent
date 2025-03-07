import BarraDePesquisa from "./BarraDePesquisa";
import { useEffect, useState } from "react";
import { getFuncionarios, Funcionario } from "../services/funcionarios";
import Tabela from "./Tabela";

function Funcionarios(){

    const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFuncionarios = async () => {
            try {
                const data = await getFuncionarios();
                setFuncionarios(data);
            } catch (error) {
                setError("Erro ao carregar funcionários.");
                console.error(error);
            }
        };

        fetchFuncionarios();
    }, []);


    return (
        <div className="Funcionarios">
            <div className="body-funcionarios">
                <h1 className="h1-funcionarios">Funcionários</h1>
                <BarraDePesquisa/>
            </div>
                <Tabela funcionarios={funcionarios}/>
        </div>
        
    )
}

export default Funcionarios;