import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Link } from "../DataContext/DataContext";

export default function RedirectLink() {
  const { short_code } = useParams<{ short_code: string }>();
  const [status, setStatus] = useState<"loading" | "notfound" | "redirected">(
    "loading"
  );

  useEffect(() => {
    if (!short_code) return;

    const storedLinks = localStorage.getItem("links");

    if (storedLinks) {
      try {
        const parsedLinks: Link[] = JSON.parse(storedLinks);
        const link = parsedLinks.find((l) => l.short_code === short_code);

        if (link) {
          setStatus("redirected");
          window.location.replace(link.original_url);
        } else {
          setStatus("notfound");
        }
      } catch {
        setStatus("notfound");
      }
    } else {
      setStatus("notfound");
    }
  }, [short_code]);

  if (status === "loading") return null;

  if (status === "notfound") {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <h3>Link não encontrado 😕</h3>
      </div>
    );
  }

  return null; // já foi redirecionado
}
