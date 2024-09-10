const USE_MOCK_DATA = true;
const CONTAINER_WIDTH = '200px';

const TITLE_1_SIZE='30px';
const SCORE_1_SIZE='24px';

const TITLE_2_SIZE='28px';
const SCORE_2_SIZE='28px';

const TITLE_3_SIZE='28px';
const SCORE_3_SIZE='28px';


function getMockBSRData(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const bsr = (Math.random() * 10).toFixed(1);
            resolve({ 
                bsr: parseFloat(bsr),
                url: `https://companies.biyiud.eco/companies/${userId}` // Mock URL
            });
        }, 500);
    });
}


// ======================================================================
// ======================================================================

// Function to create and render the widget
function renderBSRWidget1(containerId, userId) {
    const container = document.getElementById(containerId);

    if (!container) {
        console.error('Container element not found');
        return;
    }

    // Create a wrapper link element
    const wrapperLink = document.createElement('a');
    wrapperLink.style.textDecoration = 'none';
    wrapperLink.style.color = 'inherit';
    wrapperLink.style.display = 'block';
    wrapperLink.style.textAlign = 'center';
    wrapperLink.style.fontFamily = 'Arial, sans-serif';
    wrapperLink.style.width = CONTAINER_WIDTH;
    wrapperLink.style.margin = '0 auto';
    wrapperLink.style.padding = '10px 20px';
    wrapperLink.style.border = '1px solid #d3d3d3';
    wrapperLink.style.borderRadius = '10px';
    wrapperLink.style.backgroundColor = '#f9f9f9';

    // Reset container styles
    container.style = '';

    // Create a container for the title and score
    const titleScoreContainer = document.createElement('div');
    titleScoreContainer.style.display = 'flex';
    titleScoreContainer.style.justifyContent = 'space-between';
    titleScoreContainer.style.alignItems = 'center';
    titleScoreContainer.style.marginBottom = '10px';

    // Create the title
    const title = document.createElement('h3');
    title.textContent = 'EcoRating';
    title.style.margin = '0';
    title.style.fontSize = TITLE_1_SIZE;
    title.style.color = '#5C5C5C';

    // Create the score text
    const scoreText = document.createElement('div');
    scoreText.style.fontSize = SCORE_1_SIZE;
    scoreText.style.fontWeight = 'bold';
    scoreText.style.color = '#007c76';

    // Append title and score to the container
    titleScoreContainer.appendChild(title);
    titleScoreContainer.appendChild(scoreText);

    // Create the progress bar container
    const progressContainer = document.createElement('div');
    progressContainer.style.position = 'relative';
    progressContainer.style.width = '100%';
    progressContainer.style.height = '20px';
    progressContainer.style.backgroundColor = '#E0E0E0';
    progressContainer.style.borderRadius = '10px';
    progressContainer.style.overflow = 'hidden';

    // Create the progress bar fill (gradient)
    const progressFill = document.createElement('div');
    progressFill.style.height = '100%';
    progressFill.style.width = '0%';
    progressFill.style.background = 'linear-gradient(to right, #c8eb64, #00c9b7)';
    progressFill.style.borderRadius = '10px 0 0 10px';

    // Append the progressFill to the progressContainer
    progressContainer.appendChild(progressFill);

    // Append all elements to the wrapperLink
    wrapperLink.appendChild(titleScoreContainer);
    wrapperLink.appendChild(progressContainer);

    // Append the wrapperLink to the container
    container.appendChild(wrapperLink);
            
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
        const url = data.url;
        if (bsr !== undefined) {
            const percentage = (bsr / 10) * 100;
            progressFill.style.width = `${percentage}%`;
            scoreText.textContent = `${bsr}`;
            wrapperLink.href = url;
        } else {
            scoreText.textContent = 'N/A';
        }
    }

    function handleError(error) {
        console.error('Error fetching BSR score:', error);
        scoreText.textContent = 'Error';
    }
}

// Expose the function globally so it can be used in client websites
window.renderBSRWidget1 = renderBSRWidget1;

// Expose the function globally so it can be used in client websites
window.renderBSRWidget1 = renderBSRWidget1;

