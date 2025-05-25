document.addEventListener('DOMContentLoaded', () => {
  const articles = document.querySelectorAll('article');
  articles.forEach(article => {
    const pubDate = article.querySelector('time');
    const lastUpdated = new Date();
    pubDate.setAttribute('datetime', lastUpdated.toISOString());
    pubDate.textContent = `Updated on ${lastUpdated.toLocaleDateString()}`;
    // Adiciona parágrafo dinâmico
    const updateNote = document.createElement('p');
    updateNote.textContent = 'This article was recently updated with the latest travel tips for 2025.';
    article.insertBefore(updateNote, article.firstChild);
  });
});