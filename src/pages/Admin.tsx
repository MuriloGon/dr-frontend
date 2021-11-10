import React, { FC, useState } from 'react';
import API from '@api/index';

type Props = {
  token: string | null,
  setToken: React.Dispatch<React.SetStateAction<string | null>>
};

const AuthForm = ({ getToken }: { getToken: (token: string | null) => void }) => {
  const [em, setEm] = useState('');
  const [pwd, setPwd] = useState('');
  const [response, setResponse] = useState<null | undefined>(undefined);

  function submit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    API.login(em, pwd)
      .then((res) => {
        getToken(res.token);
      })
      .catch(() => {
        getToken(null);
        setResponse(null);
        alert('erro ao se conectar');
      });
  }

  if (response === null) return <h1>Usuário ou Senha incorreto </h1>;

  return (
    <form onSubmit={submit}>
      <label htmlFor="form-email">
        Email
        <input id="form-email" value={em} onChange={({ target: { value } }) => setEm(value)} />
      </label>
      <label htmlFor="form-pwd">
        Senha
        <input id="form-pwd" value={pwd} onChange={({ target: { value } }) => setPwd(value)} />
      </label>
      <button type="submit">Logar</button>
    </form>
  );
};

const Admin: FC<Props> = ({ setToken, token }) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    {token === null ? <AuthForm getToken={setToken} /> : <h1>Autenticado :)</h1>}
  </div>
);

export default Admin;
