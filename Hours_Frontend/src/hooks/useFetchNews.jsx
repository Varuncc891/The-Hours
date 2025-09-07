import { useState } from "react";

export default function useFetchNews(category) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async (pageNum = 1, reset = false) => {
    setLoading(true);
    try {
      const url = `http://localhost:3000/api/news?category=${category}&pageNum=${pageNum}`;
      const res = await fetch(url);
      
      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }
      
      const data = await res.json();

      if (data.articles && Array.isArray(data.articles)) {
        setArticles(prev => {
          const existingUrls = new Set(prev.map(article => article.url));
          const newArticles = data.articles.filter(article => !existingUrls.has(article.url));
          return reset ? data.articles : [...prev, ...newArticles];
        });
      } else {
        if (reset) setArticles([]);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      if (pageNum === 1) setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  return { articles, loading, fetchNews, setArticles };
}
