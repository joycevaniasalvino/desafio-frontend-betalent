import Img from "../assets/images/Photo - 06.png"

function Tabela() {
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
            <div className="item-funcionario">
                <img className="foto-tabela" src={Img} alt="" />
                <p className="nome-tabela">João Pedro Dias</p>
                <p className="cargo-tabela">Front-end</p>
                <p className="dataDeAdmissao-tabela">12/12/2024</p>
                <p className="telefone-tabela">+55 (83) 9 0000-0000</p>

                <button className="btn-expandir">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 9L12 15L6 9" stroke="#0500FF"></path> </g></svg>
                </button>
            </div>
        </div>
    )
}

export default Tabela;