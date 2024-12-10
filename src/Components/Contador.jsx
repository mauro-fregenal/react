import { useState } from "react";

function Contador() {
    const [cuenta, setCuenta] = useState (0);

    const incrementaCuenta = () => {
        setCuenta(cuenta + 1);
    };

    return (
        <>
        <div>
            <h2>Contador de Clics</h2>
            <p>Has hecho clic {cuenta} veces</p>
            <button onClick={incrementaCuenta}>Haz clic aquí</button>
        </div>
        </>
    )
}

export default Contador