import { useEffect, useState } from 'react';
import axios from 'axios'
export default function ArticleFilterByJournalist() {
  const [articles, setArticles] = useState([]);
  const [journalists,setJournalists] = useState([])
  const [selectedJornalistId, setSelectedJournalistId] = useState('')
  const [appliedJornalistId, setAppliedJournalistId] = useState('')

  // Fetch all articles when component mounts
  useEffect(() => {
    fetchArticles();
    fetchJournalists();
  }, []);

  const fetchArticles = async () => {
    // Fetch articles from the API
    try {
      const response = await axios.get('http://localhost:3000/articles');
      setArticles(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchJournalists = async () => {
    // Fetch journalists from the API
    try {
      const response = await axios.get('http://localhost:3000/journalists');
      setJournalists(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  // don't have to re-fetch
  const filteredArticles = appliedJornalistId ? articles.filter((article) => String(article.journalistId) === appliedJornalistId  ) : articles;

  return (
    <div>
      <h2>Articles</h2>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <label htmlFor="journalistFilter">Filter by Journalist:</label>
        <select id="journalistFilter" 
          value={selectedJornalistId}
          onChange={(event) => setSelectedJournalistId(event.target.value)}
        >
          <option value="">All Journalists</option>
          {journalists.map((journalist)=> (
            <option key={journalist.id} value={journalist.id}>
              {journalist.name}
            </option>
          ))}
        </select>

        <button
          onClick={() => {
            // Logic to apply filters
            setAppliedJournalistId(selectedJornalistId)
          }}
        >Apply Filters</button>
        <button
          onClick={() => {
            // Logic to reset filters
            setSelectedJournalistId('')
            setAppliedJournalistId('')
          }}
        >Reset Filters</button>
      </div>

      <ul>
        {filteredArticles.map(article => (
          <li key={article.id}>
            <strong>{article.title}</strong> <br />
            <small>By Journalist #{article.journalistId} | Category #{article.categoryId}</small><br />
            <button disabled>Delete</button>
            <button disabled>Update</button>
            <button disabled>View</button>
          </li>
        ))}
      </ul>
    </div>
  );
}