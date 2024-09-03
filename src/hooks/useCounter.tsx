import { useState } from "react";


export const useCounter = () => {

    const [count, setCount] = useState<number>(10);

    const increaseBy = (value: number) => {
        // setCount(count + value);
        // setCount((current) => current + value);
        setCount(Math.max(count + value, 0));
    }

    return {
        // Propiedades
        count,
        // Acciones (acciones usadas para que las personas manden a llamar alguna accion en custom hook useCounter como la funcion increaseBy o algun metodo)
        increaseBy,
    }
}