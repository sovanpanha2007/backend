// src/services/api.js
import axios from "axios";

const API_BASE_URL = "http://localhost:4000/api";
const articleRequestCache = new Map();

export const getArticles = async () => {
  const response = await axios.get(`${API_BASE_URL}/articles`);
  return response.data;
};

export const getArticleById = async (id) => {
  if (articleRequestCache.has(id)) return articleRequestCache.get(id);

  const request = axios
    .get(`${API_BASE_URL}/articles/${id}`)
    .then((res) => res.data)
    .finally(() => articleRequestCache.delete(id));

  articleRequestCache.set(id, request);
  return request;
};

export const createArticle = async (article) => {
  const response = await axios.post(`${API_BASE_URL}/articles`, article);
  return response.data;
};

export const updateArticle = async (id, updatedData) => {
  const response = await axios.put(`${API_BASE_URL}/articles/${id}`, updatedData);
  return response.data;
};

export const removeArticle = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/articles/${id}`);
  return response.data;
};

export const getJournalistArticleList = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/journalists/${id}/articles`);
  return response.data;
};

// OLD VERSION - MOCK

// let articles = [
//   {
//     id: "1",
//     title: "React Basics",
//     content: "Learn React",
//     journalist: "Alice",
//     category: "Frontend",
//   },
//   {
//     id: "2",
//     title: "Routing",
//     content: "React Router",
//     journalist: "Bob",
//     category: "Frontend",
//   },
// ];

// export function getArticles() {
//   return articles;
// }

// export function getArticleById(id) {
//   return articles.find((a) => a.id === id);
// }

// export function removeArticle(id) {
//   articles = articles.filter((a) => a.id !== id);
// }

// export function createArticle(article) {
//   const newArticle = { ...article, id: String(Date.now()) };
//   articles.push(newArticle);
//   return newArticle;
// }

// export function updateArticle(id, updatedData) {
//   const index = articles.findIndex((a) => a.id === id);
//   if (index !== -1) {
//     articles[index] = { ...articles[index], ...updatedData };
//     return articles[index];
//   }
//   return null;
// }
