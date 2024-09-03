
export const BasicTypes = () => {

    const name = 'Cristian';
    const age = 26;
    const isActive = false;

    const powers = ['React', 'React Native', 'Astro', 'Vue', 4];

    return (
        <>
            <div>BasicTypes</div>
            {name} - {age} - {isActive ? 'Activo' : 'No Activo'}

            <p>
                {powers.join(', ')}
            </p>
        </>
    )
}
