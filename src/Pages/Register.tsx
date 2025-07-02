import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../Base/Layout";

export default function Register() {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (usuario === "joaosilva123") {
      setMessage("Esse nome de usuário já está em uso.");
    } else if (email === "joao@email.com") {
      setMessage("Esse e-mail já está em uso.");
    } else {
      setMessage("Usuário cadastrado com sucesso!");
      navigate("/login");
    }
  };

  return (
    <Layout>
      <div className="row justify-content-center">
        <div className="col-md-6 bg-white p-4 rounded shadow">
          <h2 className="text-center mb-4 text-primary fw-bold">
            Cadastro de Usuário
          </h2>

          {message && (
            <div className="alert alert-warning text-center" role="alert">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="usuario" className="form-label">
                Nome de usuário
              </label>
              <input
                type="text"
                className="form-control"
                id="usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="senha" className="form-label">
                Senha
              </label>
              <input
                type="password"
                className="form-control"
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Criar Conta
              </button>
            </div>
          </form>

          <p className="mt-4 text-center text-muted">
            Já tem uma conta?{" "}
            <Link to="/login" className="text-decoration-none">
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
