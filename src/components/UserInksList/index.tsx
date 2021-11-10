import React, { useEffect, useState } from 'react';
import API from '@api/index';
import { Ink } from '@api/ApiInterface';
import { InkCard } from '@styles/userInkList';

const UserInkList = () => {
  const [inks, setInks] = useState<Ink[]>([]);
  useEffect(() => {
    API.getAllInks().then(({ data }) => (data !== undefined ? setInks(data) : null));
  }, []);

  if (!inks.length) return <h1>Carregando...</h1>;

  function Card({ data }: { data: Ink }) {
    const info = (name: string, x: any) => (
      <p>
        {`Parede ${name} - parede(a: ${x.height}m, l: ${x.width}m) - portas: ${x.doors} - janelas ${x.windows}`}
      </p>
    );
    return (
      <InkCard>
        <p>{`id: ${data._id}`}</p>
        <p>{`Tamanho da lata: ${data.canSize}L`}</p>
        {info('A1', data['wall-a'])}
        {info('A1', data['wall-b'])}
        {info('A1', data['wall-c'])}
        {info('A1', data['wall-d'])}
      </InkCard>
    );
  }

  return (
    <div>
      <ul>
        {inks.map((data, index) => <Card key={`${data._id}-${index}`} data={data} />)}
      </ul>
    </div>
  );
};

export default UserInkList;
