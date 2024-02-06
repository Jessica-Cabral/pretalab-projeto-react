import { render, screen } from "@testing-library/react";
import Footer from "."
import { expect } from "vitest"

describe ("Footer Componente", () => {
    it("deve exibir na tela o que foi recebido como propriedade", () => {
        render(<Footer mensagem="Teste mensagem exibida no rodapé" />);

        const mensagem = screen.getByAltText("Teste mensagem exibida no rodapé");

        expect (mensagem).toBeInTheDocument ();        
    });
});
