function changeImage(e) {
  const bp = document.getElementById('gallery-bigpicture');
  bp.firstElementChild.src = e.firstElementChild.getAttribute('src');
}

function toggleCollapseHistory(e) {
  e.classList.toggle('activated');

  document.getElementById('history-ul').classList.toggle('collapsed');
}
