(function() {
  const sheetId = import.meta.env.VITE_SHEET_ID;
  const tabId = import.meta.env.VITE_TAB_ID;
  const userName = import.meta.env.VITE_USERNAME;

  const isConfigured = sheetId && tabId && userName;

  if (!isConfigured) {
    document.body.innerHTML = `
      <div class="env-warning-full-page">
        <div class="env-warning-content">
          <h1>Action Required: Configure Your API Credentials</h1>
          <p>Your environment variables are not configured. Please create a <code>.env</code> file by copying <code>.env.example</code> if it exists, or by creating it manually. Add the following variables:</p>
          <ul>
            <li><code>VITE_SHEET_ID</code></li>
            <li><code>VITE_TAB_ID</code></li>
            <li><code>VITE_USERNAME</code></li>
          </ul>
          <p>Restart the development server once you're done.</p>
        </div>
      </div>
    `;
  }
})();
