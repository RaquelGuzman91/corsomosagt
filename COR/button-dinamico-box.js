document.querySelectorAll('[data-filter]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const filter = link.getAttribute('data-filter');
    
    document.querySelectorAll('#container-worshop .box').forEach(box => {
      if (filter === 'all' || box.getAttribute('data-category') === filter) {
        box.style.display = 'block';
      } else {
        box.style.display = 'none';
      }
    });
  });
});