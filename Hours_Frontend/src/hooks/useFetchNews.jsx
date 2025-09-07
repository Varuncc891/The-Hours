import { useState } from "react";

const apiKey = "4779fc6ddd461b6c09227f571f8eb263";

export default function useFetchNews(category) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async (pageNum = 1, reset = false) => {
    setLoading(true);
    try {
      const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&max=10&page=${pageNum}&token=${apiKey}`;
      const res = await fetch(url);
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
