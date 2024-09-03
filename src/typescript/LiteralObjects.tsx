
interface Person {
    age: number;
    firstName: string;
    lastName: string;
    address: Address;
}

interface Address {
    country: string;
    houseNo: string;
    street?: string;
}

export const LiteralObjects = () => {
    const person: Person = {
        age: 26,
        firstName: 'Cristian',
        lastName: 'Hernández',
        address: {
            country: 'México',
            houseNo: '987',
        },
    }

    return (
        <>
            <h3>
                Objetos literales
            </h3>

            <pre>
                {JSON.stringify(person, null, 2)}
            </pre>
        </>
    )
}
