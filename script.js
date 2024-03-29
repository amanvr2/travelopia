document.getElementById('alertBtn').addEventListener('click', function () {
  createNotification('Hello, World!');
});

function createNotification(message) {
  var div = document.createElement('div');
  div.classList.add('notification');
  div.textContent = message;

  // Add close button to the notification
  var closeButton = document.createElement('button');
  closeButton.classList.add('close-btn');
  closeButton.innerHTML = '&#10006;';
  closeButton.setAttribute('aria-label', 'Close notification');
  closeButton.addEventListener('click', function () {
    div.remove();
  });
  div.appendChild(closeButton);

  document.body.appendChild(div);

  // Trigger reflow to apply initial opacity setting before adding the .show class
  void div.offsetWidth;

  div.classList.add('show'); // Add the .show class to trigger the transition

  setTimeout(function () {
    div.remove();

  }, 3000);
}

// Export createNotification for Node.js
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = { createNotification };
}