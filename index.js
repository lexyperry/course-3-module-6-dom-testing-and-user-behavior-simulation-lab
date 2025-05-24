// Utility to add text to an element
function addElementToDOM(elementId, content) {
  const container = document.getElementById(elementId);
  if (container) {
    container.textContent = content;
  }
}

// Utility to remove an element from the DOM by ID
function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId);
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
}

// Simulate a click that updates content
function simulateClick(targetId, message) {
  addElementToDOM(targetId, message);
}

// Handle form submission and update the DOM
function handleFormSubmit(formId, targetId) {
  const form = document.getElementById(formId);
  const input = document.getElementById('user-input');
  const errorMessage = document.getElementById('error-message');

  if (!form || !input || !errorMessage) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value.trim();

    if (value === '') {
      errorMessage.textContent = 'Input cannot be empty';
      errorMessage.classList.remove('hidden');
    } else {
      errorMessage.classList.add('hidden');
      addElementToDOM(targetId, value);
    }
  });

  // Simulate immediate submission (for test purposes)
  const fakeEvent = new Event('submit');
  form.dispatchEvent(fakeEvent);
}

// Bind a click event to simulate-click button for demo use
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('simulate-click');
  if (button) {
    button.addEventListener('click', () => {
      simulateClick('dynamic-content', 'Button Clicked!');
    });
  }

  handleFormSubmit('user-form', 'dynamic-content');
});

// Export for testing
module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
};
