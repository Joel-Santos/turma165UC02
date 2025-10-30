import { use, useState } from "react";
import on from "./on.png";
import off from "./off.png";

export default function Lampada() {
    const [luz, setLuz] = useState(true);
    return (
        <>
            <div>
                {
                    luz ?
                        <img src={on} alt="Ligada" />
                        :
                        <img src={off} alt="Desligada" />

                }
                <button onClick={() => setLuz(luz ? false : true)}>
                    {
                        luz ? "Apagar luz" : "Acender Luz"
                    }
                </button>

            </div>
        </>
    )

}
