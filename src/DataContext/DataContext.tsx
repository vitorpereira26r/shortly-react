import { createContext, useContext, useEffect, useState } from "react";
import { loadFromStorage, saveToStorage } from "../Mock/Storage";

export interface Tag {
  id: number;
  name: string;
}

export interface Link {
  id: number;
  original_url: string;
  short_code: string;
  tag_id: number;
  clicks_count: number;
}

interface DataContextProps {
  tags: Tag[];
  links: Link[];
  createTag: (name: string) => void;
  deleteTag: (id: number) => void;
  editTag: (id: number, newName: string) => void;
  createLink: (
    original_url: string,
    tag_id: number,
    short_code: string
  ) => void;
  deleteLink: (id: number) => void;
}

const DataContext = createContext<DataContextProps>({} as DataContextProps);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [tags, setTags] = useState<Tag[]>([]);
  const [links, setLinks] = useState<Link[]>([]);

  // Inicializar a partir do localStorage
  useEffect(() => {
    const storedTags = loadFromStorage<Tag[]>("tags", []);
    const storedLinks = loadFromStorage<Link[]>("links", []);

    // Verifica se já existe a tag Google
    const existingGoogleTag = storedTags.find((tag) => tag.name === "Google");

    const updatedTags = [...storedTags];
    const updatedLinks = [...storedLinks];

    if (!existingGoogleTag) {
      const googleTag = { id: Date.now(), name: "Google" };
      updatedTags.push(googleTag);

      const googleLink: Link = {
        id: Date.now() + 1,
        original_url: "https://google.com/",
        short_code: "google",
        tag_id: googleTag.id,
        clicks_count: 0,
      };

      updatedLinks.push(googleLink);
    }

    setTags(updatedTags);
    setLinks(updatedLinks);
  }, []);
  

  // Persistência automática
  useEffect(() => {
    saveToStorage("tags", tags);
  }, [tags]);

  useEffect(() => {
    saveToStorage("links", links);
  }, [links]);

  const createTag = (name: string) => {
    const newTag: Tag = { id: Date.now(), name };
    setTags((prev) => [...prev, newTag]);
  };

  const deleteTag = (id: number) => {
    setTags((prev) => prev.filter((tag) => tag.id !== id));
  };

  const editTag = (id: number, newName: string) => {
    setTags((prev) =>
      prev.map((tag) => (tag.id === id ? { ...tag, name: newName } : tag))
    );
  };

  const createLink = (
    original_url: string,
    tag_id: number,
    short_code: string
  ) => {
    const newLink: Link = {
      id: Date.now(),
      original_url,
      tag_id,
      short_code,
      clicks_count: 0,
    };
    setLinks((prev) => [...prev, newLink]);
  };

  const deleteLink = (id: number) => {
    setLinks((prev) => prev.filter((link) => link.id !== id));
  };

  return (
    <DataContext.Provider
      value={{
        tags,
        links,
        createTag,
        deleteTag,
        editTag,
        createLink,
        deleteLink,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
