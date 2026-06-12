import { useEffect, useState } from "react";
import axios from 'axios'

export default function ArticleFilter() {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([])
  const [journalists, setJournalists] = useState([])
  const [selectedJournalistId, setSelectedJournalistId] = useState('')
  const [appliedJournalistId, setAppliedJournalistId] = useState('')
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [appliedCategoryId, setAppliedCategoryId] = useState('');
  // Fetch all articles when component mounts
  useEffect(() => {
    fetchArticles();
    fetchJournalists();
    fetchCategories();
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
      console.error(error)
    }
  };

  const fetchCategories = async () => {
    // Fetch categories from the API
    try {
      const response = await axios.get('http://localhost:3000/categories');
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  let filteredArticles = articles;
  
  if (appliedJournalistId) {
    filteredArticles = filteredArticles.filter((article) => String(article.journalistId) === appliedJornalistId);
  }
  
  if (appliedCategoryId) {
    filteredArticles = filteredArticles.filter((article) => String(article.categoryId) === appliedCategoryId);
  }
  return (
    <div>
      <h2>Articles</h2>
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <label htmlFor="journalistFilter">Filter by Journalist:</label>
        <select id="journalistFilter" value={selectedJournalistId} onChange={(event) => setSelectedJournalistId(event.target.value)}>
          <option value="">All Journalists</option>
          {journalists.map((journalist)=> (
            <option key={journalist.id} value={journalist.id}>
              {journalist.name}
            </option>
          ))}
        </select>

        <label htmlFor="categoryFilter">Filter by Category:</label>
        <select id="categoryFilter" value={selectedCategoryId} onChange={(event)=> setSelectedCategoryId(event.target.value)}>
          <option value="">All Categories</option>
          {categories.map((categorie)=> (
            <option key={categorie.id} value={categorie.id}>{categorie.name}</option>
          ))}
        </select>

        <button
          onClick={() => {
            // Logic to apply filters
            setAppliedCategoryId(selectedCategoryId)
            setAppliedJournalistId(selectedJornalistId)
          }}
        >
          Apply Filters
        </button>
        <button
          onClick={() => {
            // Logic to reset filters
            setSelectedCategoryId('');
            setAppliedCategoryId('');
            setSelectedJournalistId('');
            setAppliedJournalistId('')
          }}
        >
          Reset Filters
        </button>
      </div>

      <ul>
        {filteredArticles.map((article) => (
          <li key={article.id}>
            <strong>{article.title}</strong> <br />
            <small>
              By Journalist #{article.journalistId} | Category #
              {article.categoryId}
            </small>
            <br />
            <button disabled>Delete</button>
            <button disabled>Update</button>
            <button disabled>View</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
