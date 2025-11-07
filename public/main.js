//  AI Assistance
// Parts of this code were assisted with the use of ChatGPT as a learning tool.
// All final code was reviewed, tested, and modified by the project author.

// Star Rating System
document.querySelectorAll('.star-rating').forEach(starContainer => {
  const stars = starContainer.querySelectorAll('.fa-star');
  
  stars.forEach(star => {
    star.addEventListener('click', function() {
      const rating = parseInt(this.getAttribute('data-rating'));
      const songLi = this.closest('li.song');
      const name = songLi.querySelector('span:nth-child(1)').innerText;
      const msg = songLi.querySelector('span:nth-child(2)').innerText;
      
      // Send rating to server
      fetch('/songs/rate', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ name, msg, rating })
      })
      .then(res => res.json())
      .then(data => {
        // Reload page to show updated average rating
        window.location.reload();
      })
      .catch(err => console.error('Error:', err));
    });
    
    // Hover effect
    star.addEventListener('mouseenter', function() {
      const rating = parseInt(this.getAttribute('data-rating'));
      highlightStars(starContainer, rating);
    });
  });
  
  // Reset on mouse leave
  starContainer.addEventListener('mouseleave', function() {
    const stars = this.querySelectorAll('.fa-star');
    stars.forEach(s => s.classList.remove('filled'));
  });
});

// Helper function to highlight stars
function highlightStars(container, rating) {
  const stars = container.querySelectorAll('.fa-star');
  stars.forEach(star => {
    const starRating = parseInt(star.getAttribute('data-rating'));
    if (starRating <= rating) {
      star.classList.add('filled');
    } else {
      star.classList.remove('filled');
    }
  });
}

// Trash/Delete functionality
Array.from(document.getElementsByClassName('trash-btn')).forEach(element => {
  element.addEventListener('click', function() {
    const songLi = this.closest('li.song');
    const name = songLi.querySelector('span:nth-child(1)').innerText;
    const msg = songLi.querySelector('span:nth-child(2)').innerText;

    fetch('/songs', {
      method: 'delete',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ name, msg })
    }).then(res => {
      if (res.ok) window.location.reload();
    });
  });
});