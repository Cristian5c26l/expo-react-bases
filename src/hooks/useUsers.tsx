import { useEffect, useRef, useState } from "react"
import { User } from "../interfaces/reqres.response";
import { loadUsersAction } from "../actions/load-users.action";



export const useUsers = () => {

    const [users, setUsers] = useState<User[]>([]);
    const currentPageRef = useRef(1);

    useEffect(() => {
        // loadUsersAction(1)
        // .then(users => setUsers(users));

        loadUsersAction(1)
            .then(setUsers);
    }, []);

    const nextPage = async () => {
        currentPageRef.current++;
        const users = await loadUsersAction(currentPageRef.current);

        if (users.length > 0) {
            setUsers(users);
        } else {
            currentPageRef.current--; // Restar porque en este caso ya no hay mas paginas hacia delante
        }
    }

    const prevPage = async () => {
        if (currentPageRef.current === 1) return;

        currentPageRef.current--;
        const users = await loadUsersAction(currentPageRef.current);

        if (users.length > 0) {
            setUsers(users);
        } else {
            currentPageRef.current++; // sumar porque en este caso ya no hay mas paginas hacia atras
        }
    }

    return {
        users,
        nextPage,
        prevPage,
    }
}