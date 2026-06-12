import { useEffect, useState } from 'react';
import axios from 'axios'

export default function ArticleFilterByCategory() {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [appliedCategoryId, setAppliedCategoryId] = useState('');
  // Fetch all articles when component mounts
  useEffect(() => {
    fetchArticles();
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

  const fetchCategories = async () => {
    // Fetch categories from the API
    try {
      const response = await axios.get('http://localhost:3000/categories');
      setCategories(response.data);
    } catch (error) {
      console.error(error)
    }
  }

  const filteredArticles = appliedCategoryId
    ? articles.filter((article) => String(article.categoryId) === appliedCategoryId)
    : articles;

  return (
    <div>
      <h2>Articles</h2>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <label htmlFor="categoryFilter">Filter by Category:</label>
        <select
          id="categoryFilter"
          value={selectedCategoryId}
          onChange={(event) => setSelectedCategoryId(event.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <button
          onClick={() => {
            setAppliedCategoryId(selectedCategoryId);
          }}
        >Apply Filters</button>
        <button
          onClick={() => {
            setSelectedCategoryId('');
            setAppliedCategoryId('');
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