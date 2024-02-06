import "./styles.css"
import React from "react"
import "/PerfilSemFundo.png"

const SobreMimPage = () => {
    return (
      <section className="perfil">
        <div>
          <h2>Olá,</h2>
          <span>Sou Jéssica Pires Estudante de Desenvolvimento de Sistema</span>
        </div>
        <img src="/PerfilSemFundo.png" alt="Foto perfil" />
      </section>   
    );
  
  };
  
export default SobreMimPage;