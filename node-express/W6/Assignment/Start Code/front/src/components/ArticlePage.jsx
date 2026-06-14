import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../services/api";

export default function ArticlePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    const fetchArticle = async (articleId) => {
      try {
        if (mounted) setLoading(true);

        const found = await getArticleById(articleId);
        if (!mounted) return;

        if (found) {
          setArticle(found);
          setError("");
        } else {
          setArticle(null);
          setError("Article not found.");
        }
      } catch (err) {
        if (!mounted) return;
        setError("Failed to fetch article.");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchArticle(id);

    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) return <div>Loading article...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!article) return <div>No article found.</div>;

  const handleJournalistClick = () => {
    if (article.journalistId) {
      navigate(`/journalists/${article.journalistId}/articles`);
    }
  };

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <div>
        <strong>Journalist:</strong>{" "}
        {article.journalistId ? (
          <button
            type="button"
            onClick={handleJournalistClick}
            style={{
              border: "none",
              background: "none",
              color: "#4b84c5",
              cursor: "pointer",
              padding: 0,
              font: "inherit",
              textDecoration: "underline",
            }}
          >
            {article.journalist}
          </button>
        ) : (
          article.journalist
        )}
      </div>
      <div>
        <strong>Category:</strong> {article.category}
      </div>
    </div>
  );
}
