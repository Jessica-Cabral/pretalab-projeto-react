import Contador from ".";
import {render, screen, fireEvent} from "@testing-library/react";
import {expect, it} from "vitest"

describe("Contador componente", () => {
    it("deve verificar se o contador está sendo incrementado", () =>{
        render(<Contador />);

        const valorDaTela = screen.getByText ("0");
        const botaoSoma = screen.getByRole ("button", {name: "+"});

        expect(valorDaTela).toBeInTheDocument ();

        fireEvent.Click (botaoSoma);

        expect(screen.getByText("1")).toBeInTheDocument();
    });

    it("Deve verificar se o contador está sendo decrementado", () => {
        render(<Contador />);
        const valorDaTela = screen.getByText ("0");
        const botaoSubtracao = screen.getByRole ("button", {name: "-"});

        expect(valorDaTela).toBeInTheDocument ();

        fireEvent.Click (botaoSubtracao);

        expect(screen.getByText("-1")).toBeInTheDocument();    
    });

    it("deve verificar se o contator está incrementando e decrementado", () => {
        render (<Contador />);
        const valorDaTela = screen.getByText ("0");
        const botaoSoma = screen.getByRole ("button", {name: "+"});
        const botaoSubtracao = screen.getByRole ("button", {name: "-"});

        expect(valorDaTela).toBeInTheDocument ();
        expect(valorDaSoma).toBeInTheDocument ();
        expect(valorDaSubtracao).toBeInTheDocument ();

        fireEvent.Click (botaoSoma);

        expect(screen.getByText("1")).toBeInTheDocument();  

        fireEvent.Click (botaoSubtracao);

        expect(screen.getByText("0")).toBeInTheDocument();  
    });
});