// Mock document and document.getElementById
const { JSDOM } = require('jsdom');
const { window } = new JSDOM();
global.document = window.document;
global.document.getElementById = jest.fn(() => ({
  addEventListener: jest.fn()
}));

// Import the function to be tested
const { createNotification } = require('./script');

describe('createNotification', () => {
  test('should create a notification element with the specified message', () => {
    // Arrange
    const message = 'Test message';

    // Act
    createNotification(message);

    // Assert
    expect(document.getElementById).toHaveBeenCalledWith('alertBtn');
  });

  test('should remove the notification element after a certain duration', () => {
    // Arrange
    jest.useFakeTimers(); // Mock timers
    const message = 'Test message';

    // Act
    createNotification(message);

    // Assert initial state
    expect(document.querySelector('.notification')).not.toBeNull();

    // Fast-forward time
    jest.advanceTimersByTime(3000);

    // Assert after duration
    expect(document.querySelector('.notification show')).toBeNull();
  });
});
