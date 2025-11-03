//  AI Assistance
// Parts of this code were assisted with the use of ChatGPT as a learning tool.
// All final code was reviewed, tested, and modified by the project author.



Array.from(document.getElementsByClassName('like-btn')).forEach(element => {
  element.addEventListener('click', function() {
    const parent = this.parentNode;
    const name = parent.childNodes[0].innerText;
    const msg = parent.childNodes[1].innerText;
    const countEl = parent.querySelector('.vote-count');
    let count = parseInt(countEl.innerText) || 0;

    count += 1;
    countEl.innerText = count;

    fetch('/messages/vote', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ name, msg, votes: count })
    });
  });
});


Array.from(document.getElementsByClassName('dislike-btn')).forEach(element => {
  element.addEventListener('click', function() {
    const parent = this.parentNode;
    const name = parent.childNodes[0].innerText;
    const msg = parent.childNodes[1].innerText;
    const countEl = parent.querySelector('.vote-count');
    let count = parseInt(countEl.innerText) || 0;

    count -= 1; 
    countEl.innerText = count;

    fetch('/messages/vote', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ name, msg, votes: count })
    });
  });
});


Array.from(document.getElementsByClassName('trash-btn')).forEach(element => {
  element.addEventListener('click', function() {
    const messageLi = this.closest('li.message');
    const name = messageLi.querySelector('span:nth-child(1)').innerText;
    const msg = messageLi.querySelector('span:nth-child(2)').innerText;

    fetch('/messages', {
      method: 'delete',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ name, msg })
    }).then(res => {
      if (res.ok) window.location.reload();
    });
  });
});