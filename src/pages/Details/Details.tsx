import { API_URL } from '../../env';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Container } from '../../components/Container/Container';
import { OrderDetails } from './components/OrderDetail/OrderDetail';

export function Details()  {
  const { id }: any = useParams();
  const { isLoading, error, data } = useQuery('data', () =>
    fetch(API_URL + '/'+ id +'.json').then(res => res.json()));
    return (
    <Container>
      {error ? (
        <p>Error: {error}</p>
        ) : isLoading ? (
          <div>carregando...</div>
          ) : (
            <OrderDetails orderDetailed={data}/>
      )}
    </Container>
  );
}
