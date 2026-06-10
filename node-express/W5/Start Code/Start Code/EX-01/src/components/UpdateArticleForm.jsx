import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function UpdateArticleForm() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [form, setForm] = useState({
    title: '',
    content: '',
    journalistId: '',
    categoryId: '',
  });


  // Fetch to prefill a form and update an existing article
  useEffect(() => 
    {
    const PrefillArticle = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/articles/${id}`); // because axios's fetch body: res.data, to access data of artcle's data we need to use res.data.data
        const articleData = res.data.data;
        setForm(
          {
            title: articleData.title,
            content: articleData.content,
            journalistId: articleData.journalistId,
            categoryId: articleData.categoryId
          });
      } catch (error) {
        console.error(error)
      } finally {
        console.log("prefill is completed")
      }
    }
    PrefillArticle()
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Update article with axios
    const articleData = {
      title: form.title,
      content: form.content,
      journalistId: form.journalistId,
      categoryId: form.categoryId,
    };

    try {
      await axios.put(`http://localhost:3000/articles/${id}`, articleData);
      navigate('/');
    } catch (error) {
      console.error(error);
    } finally {
      console.log('request is completed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Update Article</h3>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required /><br />
      <textarea name="content" value={form.content} onChange={handleChange} placeholder="Content" required /><br />
      <input name="journalistId" value={form.journalistId} onChange={handleChange} placeholder="Journalist ID" required /><br />
      <input name="categoryId" value={form.categoryId} onChange={handleChange} placeholder="Category ID" required /><br />
      <button type="submit">Update</button>
    </form>
  );
}
