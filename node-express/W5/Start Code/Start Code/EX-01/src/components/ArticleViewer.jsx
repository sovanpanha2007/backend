import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'
export default function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const viewArticle = async () => {
      setLoading(true);
      setError('');

      try {
        const res = await axios.get(`http://localhost:3000/articles/${id}`); // because axios's fetch body: res.data, to access data of artcle's data we need to use res.data.data
        const articleData = res.data.data;
        setArticle(articleData);
      } catch (error) {
        setError(error.message || 'Failed to fetch article');
        setArticle(null);
      } finally {
        setLoading(false);
      }
    };

    viewArticle();
  }, [id]);

  if (loading) return <div>Loading article...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!article) return <div>No article found.</div>;

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <div>
        <strong>Journalist ID:</strong> {article.journalistId}
      </div>
      <div>
        <strong>Category ID:</strong> {article.categoryId}
      </div>
    </div>
  );
}