import Layout from "../Base/Layout";
import { useData } from "../DataContext/DataContext";

export default function Links() {
  const { links, tags, deleteLink } = useData();

  const getTagName = (id: number) =>
    tags.find((tag) => tag.id === id)?.name ?? "Sem tag";

  const baseUrl = window.location.origin + "/r";

  return (
    <Layout>
      <div className="mt-4">
        <h2 className="mb-4">Meus Links Encurtados</h2>

        {links.length === 0 ? (
          <div className="alert alert-info">
            Você ainda não criou nenhum link encurtado.{" "}
            <a href="/" className="alert-link">
              Criar um novo link
            </a>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-light">
                <tr>
                  <th>URL Original</th>
                  <th>URL Encurtada</th>
                  <th>Tag</th>
                  <th>Cliques</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {links.map((link) => (
                  <tr key={link.id}>
                    <td>
                      <a
                        href={link.original_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.original_url}
                      </a>
                    </td>
                    <td>
                      <a href={`/r/${link.short_code}`} target="_blank">
                        {baseUrl}/{link.short_code}
                      </a>
                      <button
                        className="btn btn-sm btn-outline-secondary ms-2 py-0"
                        onClick={() =>
                          navigator.clipboard.writeText(
                            `${baseUrl}/${link.short_code}`
                          )
                        }
                      >
                        📋
                      </button>
                    </td>
                    <td>
                      <span className="badge bg-primary">
                        {getTagName(link.tag_id)}
                      </span>
                    </td>
                    <td>{link.clicks_count}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteLink(link.id)}
                      >
                        🗑 Excluir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
}
