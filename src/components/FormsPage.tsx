import { useForm } from "react-hook-form";

type FormInputs = {
    email: string;
    password: string;
}

export const FormsPage = () => {

    const { register, handleSubmit } = useForm<FormInputs>({
        defaultValues: {
            email: 'cristian@google.com',
            password: '1111',
        }
    });

    const onSubmit = (myForm: FormInputs) => {
        console.log({ myForm });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Formularios</h3>
            <div className="flex flex-col space-y-2 w-[500px]">

                {/**En dispositivos moviles, este input mostraria un arroba*/}
                <input
                    type="email"
                    placeholder="email"
                    className="border border-gray-300 p-2 rounded-xl"
                    {...register('email', { required: true })}
                />

                <input
                    type="password"
                    placeholder="password"
                    className="border border-gray-300 p-2 rounded-xl"
                    {...register('password', { required: true })}

                />

                {/**Botón que hace el posteo del formulario */}
                <button type="submit"
                    className="bg-blue-500 text-white p-2 rounded-xl">
                    Ingresar
                </button>
            </div>
        </form>
    )
}
