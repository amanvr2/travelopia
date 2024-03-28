document.getElementById('alertBtn').addEventListener('click', function () {
    createNotification('Hello, World!');
  });
  
  function createNotification(message) {
    var div = document.createElement('div');
    div.classList.add('notification');
    div.textContent = message;
  
    document.body.appendChild(div);
  
    // Trigger reflow to apply initial opacity setting before adding the .show class
    void div.offsetWidth;
  
    div.classList.add('show'); // Add the .show class to trigger the transition
  
    setTimeout(function () {
      div.remove();

    }, 3000);
  }
  
  module.exports = { createNotification };