import { useState } from "react";
import Layout from "../Base/Layout";
import { useData } from "../DataContext/DataContext";
import { generateShortCode } from "../Utils/utils";

export default function Home() {
  const { tags, createLink } = useData();
  const [url, setUrl] = useState("");
  const [tagId, setTagId] = useState("");
  const [shortCode, setShortCode] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !tagId) return;

    const code = generateShortCode();
    createLink(url, Number(tagId), code);
    setShortCode(code);
    setUrl("");
    setTagId("");
  };

  return (
    <Layout>
      <div className="mt-4">
        <h2>Encurtar Link</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">URL original</label>
            <input
              type="url"
              className="form-control"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://exemplo.com"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Tag</label>
            <select
              className="form-select"
              value={tagId}
              onChange={(e) => setTagId(e.target.value)}
              required
            >
              <option value="">Selecione uma tag</option>
              {tags.map((tag) => (
                <option key={tag.id} value={tag.id}>
                  {tag.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Encurtar
          </button>
        </form>

        {shortCode && (
          <div className="alert alert-success mt-4">
            Link encurtado com sucesso:{" "}
            <a href={`/r/${shortCode}`} target="_blank">
              {window.location.origin}/r/{shortCode}
            </a>
          </div>
        )}
      </div>
    </Layout>
  );
}
