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
          <p>Your environment variables are not configured. Please follow the steps below to set up your project. Restart the development server once you're done.</p>
          
          <div class="instructions">
            <h2>Step 1: Get Your Google Sheet Credentials</h2>
            <p><strong>Sheet ID:</strong> Open your Google Sheet and find the ID in the URL. For example, in <code>.../spreadsheets/d/SHEET_ID/edit</code>, the <code>SHEET_ID</code> is the part you need.</p>
            <p><strong>Tab ID:</strong> This is the name of the sheet tab, found at the bottom-left of your Google Sheet (e.g., "Sheet1").</p>

            <h2>Step 2: Get Your NoCodeAPI Username</h2>
            <p>Sign in to your <a href="https://nocodeapi.com/" target="_blank" rel="noopener noreferrer">NoCodeAPI dashboard</a>.</p>
            <ol>
              <li>Find and activate the <strong>Google Sheet</strong> API from the Marketplace.</li>
              <li>Click on <strong>Make Google Sheets API</strong>, authenticate your Google account, and give your API a name.</li>
              <li>Paste your <strong>Sheet ID</strong> and create the API. Your NoCodeAPI <strong>username</strong> will be available in your account details.</li>
            </ol>

            <h2>Step 3: Configure Your <code>.env</code> File</h2>
            <p>Create a <code>.env</code> file in the project's root directory and add the following variables with the credentials you just collected:</p>
            <ul>
              <li><code>VITE_SHEET_ID="YOUR_SHEET_ID"</code></li>
              <li><code>VITE_TAB_ID="YOUR_TAB_ID"</code></li>
              <li><code>VITE_USERNAME="YOUR_USERNAME"</code></li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }
})();
