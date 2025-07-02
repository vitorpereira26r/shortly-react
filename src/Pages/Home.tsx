import { useState } from "react";
import Layout from "../Base/Layout";
import { mockTags } from "../Mock/Tags";
import { generateShortCode } from "../Utils/utils";

export default function Home() {
  const [url, setUrl] = useState("");
  const [tag, setTag] = useState("");
  const [shortCode, setShortCode] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !tag) return;
    const code = generateShortCode();
    setShortCode(code);
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
              placeholder="https://exemplo.com"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Tag</label>
            <select
              className="form-select"
              required
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            >
              <option value="">Selecione uma tag</option>
              {mockTags.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
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
