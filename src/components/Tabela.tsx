import Img from "../assets/images/Photo - 06.png"

function Tabela(){
    return(
        <div className="Tabela">
            <div className="header-tabela">
                <h2 className="titulo1">FOTO</h2>
                <h2 className="titulo2">NOME</h2>
                <h2 className="titulo3">CARGO</h2>
                <h2 className="titulo4">DATA DE ADMISSÃO</h2>
                <h2 className="titulo5">TELEFONE</h2>
            </div>
            <div className="item-funcionario">
                <img className="foto-tabela" src={Img} alt="" />
                <p className="nome-tabela">João Pedro Dias</p>
                <p className="cargo-tabela">Front-end</p>
                <p className="dataDeAdmissao-tabela">12/12/2024</p>
                <p className="telefone-tabela">+55 (83) 9 0000-0000</p>
            </div>
        </div>
    )
}

export default Tabela;