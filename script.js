document.getElementById('alertBtn').addEventListener('click', function () {
    createNotification('Hello, World!');
  });
  
  function createNotification(message) {
    var notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
  
    document.body.appendChild(notification);
  
    // Trigger reflow to apply initial opacity setting before adding the .show class
    void notification.offsetWidth;
  
    notification.classList.add('show'); // Add the .show class to trigger the transition
  
    setTimeout(function () {
      notification.remove();
    }, 4000);
  }
  