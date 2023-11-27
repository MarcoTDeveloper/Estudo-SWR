import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { mutate as mutateGlobal } from 'swr';
import { useFetch } from '../hooks/useFetch';
import api from '../services/api';

interface User {
    id: number;
    name: string;
}

export const UserList: React.FC = () => {
    const { data, mutate } = useFetch<User[]>('users');

    const handleNameChange = useCallback((id: number) => {
        api.put(`users/${id}`, { name: 'Cara da água'});

        const updatedUsers = data?.map(user => {
            if (user.id === id) {
                return { ... user, name: 'Cara da água'}
            }

            return user;
        })

        mutate(updatedUsers, false)
        mutateGlobal(`users/${id}`, { id, name: 'Cara da água' })
    }, [data, mutate]);

    if (!data) {
        return <p>Loading...</p>
    }

    return (
        <ul>
        {data?.map(user => (
            <li key={user.id}>
                <Link to={`/users/${user.id}`}>
                    {user.name}
                </Link>
                <button type='button' onClick={() => handleNameChange(user.id)}>
                    Alterar nome
                </button>
            </li>
        ))}
        </ul>
    );
}