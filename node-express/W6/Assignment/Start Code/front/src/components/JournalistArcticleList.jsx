import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getJournalistArticleList } from "../services/api.js";

export default function JournalistArticleList() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    

    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(()=> {
        fetchArticles(id);
    }, [id]);

    const fetchArticles = async (id) => {
        setIsLoading(true);
        setError("");
        try {
            const data = await getJournalistArticleList(id);
            setArticles(data);
        } catch (err) {
            setError("Failed to load articles. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    const handleView = (id) => {
    navigate(`/articles/${id}`);
  };

    return (
        <>
          {isLoading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className="journalistArticle-list">
            {articles.map((article) => (
              <JournalistArticleCard
                key={article.id}
                article={article}
                onView={handleView}
              />
            ))}
          </div>
        </>
    )
}


function JournalistArticleCard({ article, onView }) {
    return (
        <div className="article-card">
          <div className="article-title">{article.title}</div> 
          <div className="journalist">{article.journalist}</div>       
          <div className="article-actions">
            <button className="button-secondary" onClick={() => onView(article.id)}>
              View
            </button>
          </div>
        </div>
  );
}

