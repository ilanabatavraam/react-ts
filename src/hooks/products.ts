import axios, {AxiosError} from 'axios';
import React, {useEffect, useState} from 'react';
import { Iproduct } from '../models';

export function useProduts() {
    const [products, setProducts] = useState<Iproduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

  async function fetchProfects() {
    try {
        setError('');
        setLoading(true);
        const response = await axios.get<Iproduct[]>('https://fakestoreapi.com/products?limit=5');
        setProducts(response.data);
        setLoading(false);
      } catch (e: unknown) {
        const error = e as AxiosError;
        setLoading(false);
        setError(error.message);
      }
    }
  
    useEffect(() => {
      fetchProfects();
    }, [])
  
    return { products, error, loading}
}