# Biyiud Widget: INTERNAL tech details
The Biyiud's widget pretends to be lightweight, easy to integrate, and provides daily updates without requiring a full framework on the client's side, like React:

On the Server-Side:
- The file `widget.js` is hosted on Biyiud's website.
- REST API is publicly accessible to clients' websites.
- BSR is updated in a daily base.

On the Client-Side:
- Clients add the `<script>` tag to load widget.js.
- They add a container div for the widget.
- They call the `renderBSRWidget` function with a user ID.

About the Widget:
- Uses the `<progress>` element for the progress bar.
- Fetches the score using a REST API call and updates the UI.

## Decisiones clave
**Widget v1:**
- Sólo para empresas
- URL: `https://api.biyiud.eco/companies/${userId}/BSR`
- El parámetro es `nickname`
- No necesita API KEY
- Debe ser muy ágil
- SEARCH: `dataCOMPANY` filtrando por `nickname`

**Widget v2 (roadmap)**
- Para todos los usuarios
- URL: `https://api.biyiud.eco/user/${userId}/BSR`
-  Optimización búsqueda usando `dataUSERS`
   - Format: `{nickname, BSR, }`
   - Ex1: `{userID, BSR, PEOPLE-...}`
   - Ex2: `{userID, BSR, COMPANY-...}`

## Tasks
[ ] Repositorio widget
[ ] Mirar dominios personalizados en API Gateway
[ ] Mirar discrepancia ESIOS

## SERVER: Javascript Widget code & CSS
The file `widget.js` is hosted on Biyiud's website and contains the logic to render the widget with the desired visuals and functionality.

```javascript
// widget.js

const USE_MOCK_DATA   =   true ;
const CONTAINER_WIDTH = '200px';
const TITLE_2_SIZE    =  '28px';
const SCORE_2_SIZE    =  '28px';

// Function to create and render the widget
function renderBSRWidget2(containerId, userId) {
    const container = document.getElementById(containerId);

    if (!container) {
        console.error('Container element not found');
        return;
    }

    // Add basic styles to the widget container
    container.style.textAlign = 'center';
    container.style.fontFamily = 'Arial, sans-serif';
    container.style.width = CONTAINER_WIDTH;  // Set the width
    container.style.margin = '0 auto';
    container.style.padding = '5px 20px';  // Reduced padding
    container.style.border = '1px solid #d3d3d3';  // Thin gray border
    container.style.borderRadius = '10px';  // Keep the rounded corners
    container.style.backgroundColor = '#f9f9f9';  // Optional: Add light background color

    // Create the title
    const title = document.createElement('h3');
    title.textContent = 'EcoRating';
    title.style.marginTop = '0';  // Remove any top margin
    title.style.marginBottom = '5px';  // Reduce space between title and progress bar
    title.style.fontSize = TITLE_2_SIZE;  // Larger font for the title
    title.style.color = '#5C5C5C';  // Color closer to the example

    // Create a flex container for progress and score
    const progressContainer = document.createElement('div');
    progressContainer.style.display = 'flex';
    progressContainer.style.alignItems = 'center';  // Vertically center align the items
    progressContainer.style.justifyContent = 'space-between';  // Space out the progress bar and score
    progressContainer.style.width = '100%';

    // Create the progress bar
    const progressFill = document.createElement('div');
    progressFill.style.height = '20px';
    progressFill.style.flexGrow = '1';  // Make progress bar take up as much space as possible
    progressFill.style.background = 'linear-gradient(to right, #c8eb64, #00c9b7)';
    progressFill.style.borderRadius = '10px';
    progressFill.style.marginRight = '10px';  // Add some space between the progress bar and the score

    // Create the score text
    const scoreText = document.createElement('div');
    scoreText.style.fontSize = SCORE_2_SIZE;  // Large font for the score
    scoreText.style.fontWeight = 'bold';
    scoreText.style.color = '#007c76';  // Color closer to the example

    // Append elements to the progress container
    progressContainer.appendChild(progressFill);
    progressContainer.appendChild(scoreText);

    // Append elements to the container
    container.appendChild(title);
    container.appendChild(progressContainer);

    // Fetch the data (either mock data or real data)
    if (USE_MOCK_DATA) {
        getMockBSRData(userId)
            .then(handleData)
            .catch(handleError);
    } else {
        fetch(`https://biyiud.eco/user/${userId}/BSR`)
            .then(response => response.json())
            .then(handleData)
            .catch(handleError);
    }

    // Handle the data and update the progress bar and score
    function handleData(data) {
        const bsr = data.bsr;
        if (bsr !== undefined) {
            const percentage = (bsr / 10) * 100;
            progressFill.style.width = `${percentage}%`;  // Update progress fill width
            scoreText.textContent = `${bsr}`;  // Update score text
        } else {
            scoreText.textContent = 'No score available';
        }
    }

    function handleError(error) {
        console.error('Error fetching BSR score:', error);
        scoreText.textContent = 'Error fetching score';
    }
}

// Expose the function globally so it can be used in client websites
window.renderBSRWidget2 = renderBSRWidget2;
```

