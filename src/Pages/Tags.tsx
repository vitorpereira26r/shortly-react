import { useState } from "react";
import Layout from "../Base/Layout";
import { mockTags } from "../Mock/Tags";

export default function Tags() {
  const [tags, setTags] = useState(mockTags);
  const [newTag, setNewTag] = useState("");

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTag) return;
    const newTagObj = {
      id: Math.random(),
      name: newTag,
    };
    setTags([...tags, newTagObj]);
    setNewTag("");
  };

  const handleEdit = (id: number, newName: string) => {
    setTags((prev) =>
      prev.map((tag) => (tag.id === id ? { ...tag, name: newName } : tag))
    );
  };

  const handleDelete = (id: number) => {
    setTags((prev) => prev.filter((tag) => tag.id !== id));
  };

  return (
    <Layout>
      <div className="mt-4">
        <h2 className="mb-4">Gerenciar Tags</h2>

        <div className="card mb-4">
          <div className="card-body">
            <form
              className="row g-2 align-items-center"
              onSubmit={handleCreate}
            >
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Digite o nome da nova tag"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-2 d-grid">
                <button className="btn btn-success" type="submit">
                  Criar Tag
                </button>
              </div>
            </form>
          </div>
        </div>

        {tags.length > 0 ? (
          <ul className="list-group">
            {tags.map((tag) => (
              <li
                key={tag.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <form
                  className="d-flex w-100 gap-2 align-items-center"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const newName = new FormData(form).get(
                      "new_name"
                    ) as string;
                    handleEdit(tag.id, newName);
                  }}
                >
                  <input type="hidden" name="tag_id" value={tag.id} />
                  <input
                    type="text"
                    name="new_name"
                    defaultValue={tag.name}
                    className="form-control"
                    required
                  />
                  <button type="submit" className="btn btn-warning btn-sm">
                    Editar
                  </button>
                </form>

                <button
                  className="btn btn-danger btn-sm ms-2"
                  onClick={() => handleDelete(tag.id)}
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted">Nenhuma tag cadastrada ainda.</p>
        )}
      </div>
    </Layout>
  );
}
