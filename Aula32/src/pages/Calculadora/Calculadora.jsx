import { useState } from "react"
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

export default function Calculadora() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [resultado, setResultado] = useState("");

    function calcular(op) {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        if (isNaN(n1) || isNaN(n2)) {
            setResultado("Digite valores válidos!!!!");
            return;
        }
        switch (op) {
            case "+":
                setResultado(n1 + n2);
                break;
            case "-":
                setResultado(n1 - n2);
                break;
            case "*":
                setResultado(n1 * n2);
                break;
            case "/":
                setResultado(n2 === 0 ? "Erro: Divisão por zero" : n1 / n2);
                break;
            default:
                setResultado(null);

        }


    }


    return (
        <>
            <h1>Page calculadora</h1>
            <div>
                <Input
                    label="Número 01:"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    placeholder="Número 01"
                />
                <Input
                    label="Número 02:"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    placeholder="Número 02"
                />
                <div>
                    <Button label="+" onClick={() => calcular("+")} />
                    <Button label="-" onClick={() => calcular("-")} />
                    <Button label="×" onClick={() => calcular("*")} type="sucess" />
                    <Button label="÷" onClick={() => calcular("/")} type="danger" />
                </div>
                <p>Resultado: {resultado}</p>
            </div>
        </>
    )
}