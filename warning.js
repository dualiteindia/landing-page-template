(function() {
  const sheetId = import.meta.env.VITE_SHEET_ID;
  const tabId = import.meta.env.VITE_TAB_ID;
  const userName = import.meta.env.VITE_USERNAME;

  if (!sheetId || !tabId || !userName) {
    const warningBanner = document.createElement('div');
    warningBanner.className = 'env-warning';
    warningBanner.innerHTML = `
      <p><strong>Action Required:</strong> Configure your API credentials.</p>
      <p>Your environment variables are not configured. Please create a <code>.env</code> file by copying <code>.env.example</code> if it exists, or by creating it manually. Add the following variables:</p>
      <ul>
        <li><code>VITE_SHEET_ID</code></li>
        <li><code>VITE_TAB_ID</code></li>
        <li><code>VITE_USERNAME</code></li>
      </ul>
      <p>Restart the development server once you're done.</p>
    `;
    document.body.prepend(warningBanner);
  }
})();
