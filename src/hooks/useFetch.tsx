// importando a função useSWR do hook swr.
import useSWR from 'swr'

// importando a função api do axios.
import { api } from '../services/api';

// Criando a função useFetch que vai ser tipada para receber Data com any e Error como any. Também que vai receber a URl como uma string.
export function useFetch<Data = any, Error = any>(url: string) {

  // 
  const { data, error, mutate } = useSWR<Data, Error>(url, async (url: string) => {

    const response = await api.get(url);

    return response.data;
  })

  return { data, error, mutate }
}
