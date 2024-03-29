import { describe, expect, it} from "vitest";
import { concederAumento } from "./funcoes"
//test('forma de criar teste', () => {
    //escrever o teste aqui
//});

describe ("função concederAumento", () => {
    it("deve calcular o aumento de um dev junior corretamente", () => {
        const salario = concederAumento("dev junior", 1000);
        expect(salario).toBe(1200);
    });

    it("deve calcular o aumento de um dev pleno corretamente", () => {
        const salario = concederAumento("dev pleno", 1000);
        expect(salario).toBe(1120);
    });

    it("deve calcular o aumento de um dev senior corretamente", () => {
        const salario = concederAumento("dev senior", 1000);
        expect(salario).toBe(1050);
    });

    it("deve calcular o aumento de outro cargo que não seja dev corretamente", () => {
        const salario = concederAumento("outro cargo", 1000);
        expect(salario).toBe(1000);
    });
});


//.todo - "para fazer"  -  pula no teste