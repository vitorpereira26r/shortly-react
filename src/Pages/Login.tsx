import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../Base/Layout";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "username" && password === "123456") {
      setMessage("Bem-vindo, joaosilva123!");
      navigate("/");
    } else {
      setMessage("Usuário ou senha inválidos.");
    }
  };

  return (
    <Layout>
      <div className="row justify-content-center">
        <div className="col-md-6 bg-white p-4 rounded shadow">
          <h2 className="text-center mb-4 text-primary fw-bold">
            Entrar na sua conta
          </h2>

          {message && (
            <div className="alert alert-warning text-center" role="alert">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Nome de usuário
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="ex: joaosilva123"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Senha
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                required
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Entrar
              </button>
            </div>
          </form>

          <p className="mt-4 text-center text-muted">
            Ainda não tem conta?{" "}
            <Link to="/register" className="text-decoration-none">
              Criar conta
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
