function changeImage(e) {
  const bp = document.getElementById('gallery-bigpicture');
  bp.firstElementChild.src = e.firstElementChild.getAttribute('src');
}

function toggleCollapseHistory(e) {
  e.classList.toggle('activated');
  e.innerHTML = e.innerHTML === 'View more' ? 'View less' : 'View more';
  document.getElementById('history-ul').classList.toggle('collapsed');
}
