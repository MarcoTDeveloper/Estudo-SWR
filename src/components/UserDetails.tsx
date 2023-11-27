import { useFetch } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';

interface User {
    id: number;
    name: string;
}

export const UserDetails: React.FC = () => {
    const { id } = useParams();
    const { data } = useFetch<User>(`users/${id}`);

    if (!data) {
        return <p>Carregando...</p>
    }

    return(
        <ul>
            <li>ID: {data?.id}</li>
            <li>Name: {data?.name}</li>
        </ul>
    )
}