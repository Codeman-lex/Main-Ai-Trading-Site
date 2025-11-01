// Mail interceptor
document.addEventListener('click', function(e) {
  const element = e.target.closest('a');
  if (!element) return;

  // Check if it's a contact link
  if (element.getAttribute('href') === '/contact' || 
      element.getAttribute('href')?.includes('contact')) {
        
    e.preventDefault(); // Stop normal navigation
    
    // Open email client
    window.location.href = 'mailto:support@realaitrading.com';
  }
}, true); // Use capture phase to intercept before React router