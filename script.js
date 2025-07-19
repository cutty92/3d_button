// Navigation target - change this to your page slug or URL
const targetUrl = '/blank';

document.getElementById('custom3dButton').addEventListener('click', () => {
  // Navigate the top window to target URL
  window.top.location.href = targetUrl;
});
