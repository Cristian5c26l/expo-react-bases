import axios from "axios"
import { UserListResponse } from "../interfaces/reqres.response"


export const loadUsersAction = async (page: number) => {
    try {
        const { data } = await axios.get<UserListResponse>('https://reqres.in/api/users', {
            params: {
                page: page,
            }
        });// https://reqres.in/api/users?page=page

        return data.data;// data literalmente es el json que se devuelve al hacer peticion GET a https://reqres.in/api/users?page=2, y .data contiene un array de objetos tipo User. (User[])
    } catch (error) {
        console.log(error);
        return [];
    }
}