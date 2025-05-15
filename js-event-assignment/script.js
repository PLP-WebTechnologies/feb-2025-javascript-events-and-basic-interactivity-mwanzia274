// 1. Event Handling
document.getElementById('clickMeBtn').addEventListener('click', () => {
    alert("Button clicked!");
  });
  
  document.getElementById('keyInput').addEventListener('keyup', (e) => {
    document.getElementById('keypressOutput').textContent = `You pressed: ${e.key}`;
  });
  
  document.getElementById('secretBtn').addEventListener('dblclick', () => {
    alert("You discovered the secret double-click! 🕵️");
  });
  
  // 2. Interactive Elements
  document.getElementById('colorToggleBtn').addEventListener('click', () => {
    document.body.classList.toggle('colorful');
  });
  
  function showTab(tabId) {
    document.getElementById('tab1').style.display = 'none';
    document.getElementById('tab2').style.display = 'none';
    document.getElementById(tabId).style.display = 'block';
  }
  
  // 3. Form Validation
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  
  emailInput.addEventListener('input', () => {
    const feedback = document.getElementById('emailFeedback');
    if (!emailInput.validity.valid) {
      feedback.textContent = "Invalid email format.";
    } else {
      feedback.textContent = "";
    }
  });
  
  passwordInput.addEventListener('input', () => {
    const feedback = document.getElementById('passwordFeedback');
    if (passwordInput.value.length < 8) {
      feedback.textContent = "Password must be at least 8 characters.";
    } else {
      feedback.textContent = "";
    }
  });
  
  document.getElementById('myForm').addEventListener('submit', (e) => {
    if (!emailInput.validity.valid || passwordInput.value.length < 8) {
      e.preventDefault();
      alert("Please fix form errors.");
    }
  });
  