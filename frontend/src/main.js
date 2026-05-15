document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');
  const dateOfBirthInput = document.getElementById('dateOfBirth');
  const ageInput = document.getElementById('age');

  // Calculate age when date of birth changes
  dateOfBirthInput.addEventListener('change', (e) => {
    const birthDate = new Date(e.target.value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    ageInput.value = age;
  });

  // Format phone number as it's typed
  const phoneInput = document.getElementById('phone');
  phoneInput.addEventListener('input', (e) => {
    // Remove any non-digits
    let value = e.target.value.replace(/\D/g, '');
    
    // Ensure the value doesn't exceed 10 digits
    if (value.length > 10) {
      value = value.slice(0, 10);
    }
    
    e.target.value = value;
  });

  // Handle form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Here you would typically send the data to your server
    console.log('Form submitted:', data);
    
    // For demo purposes, show a success message
    alert('Registration successful!');
    form.reset();
  });
});