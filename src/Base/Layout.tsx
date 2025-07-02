import { ReactNode } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

interface Props {
  children: ReactNode;
}

const isAuthenticated = true; // Mock de autenticação
const user = { username: "joaosilva123", fullName: "João Silva" };

export default function Layout({ children }: Props) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="bg-primary text-white py-3 shadow-sm">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-4">
            <h1 className="h5 mb-0">
              <Link to="/" className="text-white text-decoration-none">
                Shortly
              </Link>
            </h1>
            {isAuthenticated && (
              <nav className="d-flex gap-3">
                <Link to="/" className="text-white text-decoration-none">
                  Encurtador
                </Link>
                <Link to="/tags" className="text-white text-decoration-none">
                  Categorias
                </Link>
                <Link to="/links" className="text-white text-decoration-none">
                  Meus Links
                </Link>
              </nav>
            )}
          </div>

          <div className="d-flex align-items-center gap-3">
            {isAuthenticated ? (
              <>
                <span>Olá, {user.fullName ?? user.username}!</span>
                <Link to="/logout" className="text-white text-decoration-none">
                  Sair
                </Link>
              </>
            ) : (
              <>
                <Link to="/login" className="text-white text-decoration-none">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-white text-decoration-none"
                >
                  Cadastro
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="container py-5 flex-grow-1">{children}</main>

      <footer className="bg-dark text-light text-center py-3 mt-auto">
        &copy; 2025 Shortly - Encurtador de Links
      </footer>
    </div>
  );
}
