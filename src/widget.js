const USE_MOCK_DATA = false;
const CONTAINER_WIDTH = '220px';

const TITLE_1_SIZE='30px';
const SCORE_1_SIZE='24px';

const TITLE_2_SIZE='28px';
const SCORE_2_SIZE='28px';

const TITLE_3_SIZE='28px';
const SCORE_3_SIZE='28px';

const TITLE_4_SIZE='20px';
const SCORE_4_SIZE='20px';

const BASE_URL = 'https://biyiud-api-v2-9zuj05ri.nw.gateway.dev'

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
    wrapperLink.style.padding = '16px 24px';
    wrapperLink.style.border = '1px solid #d3d3d3';
    wrapperLink.style.borderRadius = '4px';
    wrapperLink.style.backgroundColor = '#f9f9f9';

    // Reset container styles
    container.style = '';

    // Create a container for the title and logo
    const logoTitleContainer = document.createElement('div');
    logoTitleContainer.style.display = 'flex';
    logoTitleContainer.style.gap = '8px'
    logoTitleContainer.style.marginBottom = '12px';

    // Create the logo
    const logo = document.createElement('img');
    logo.src = './biyiud_icono.svg';
    logo.style.width = '24px';
    logo.style.height = '24px';

    // Create the title
    const title = document.createElement('h3');
    title.textContent = 'EcoRating Biyiud';
    title.style.display = 'flex';
    title.style.gap = '3px';
    title.style.margin = '0';
    title.style.fontSize = TITLE_4_SIZE;
    title.style.color = '#4C4C54';

    const iconR = document.createElement('span');
    iconR.style.fontSize = '12px';
    iconR.textContent = '®';

    title.appendChild(iconR);

    // Append title and score to the container
    logoTitleContainer.appendChild(logo);
    logoTitleContainer.appendChild(title);

    //Create container for Score and ProgressBar
    const scoreProgressContainer = document.createElement('div');
    scoreProgressContainer.style.display = 'flex';
    scoreProgressContainer.style.alignItems = 'center';
    scoreProgressContainer.style.gap = '8px';
    scoreProgressContainer.style.marginBottom = '8px';
   
    // Create the progress bar container
    const progressContainer = document.createElement('div');
    progressContainer.style.position = 'relative';
    progressContainer.style.width = '100%';
    progressContainer.style.height = '20px';
    progressContainer.style.backgroundColor = '#E0E0E0';
    progressContainer.style.borderRadius = '4px';
    progressContainer.style.overflow = 'hidden';
    
    // Create the progress bar fill (gradient)
    const progressFill = document.createElement('div');
    progressFill.style.height = '100%';
    progressFill.style.transition = 'width .7s ease-in-out';
    progressFill.style.width = '0%';
    progressFill.style.background = 'linear-gradient(to right, #fef08a 0%, #09c3c3 40%)';
    progressFill.style.borderRadius = '4px 0 0 4px';

    // Create the score text
    const scoreText = document.createElement('div');
    scoreText.style.fontSize = SCORE_4_SIZE;
    scoreText.style.fontWeight = 'bold';
    scoreText.style.color = '#007c76';

    // Append the progressFill to the progressContainer
    progressContainer.appendChild(progressFill);

    // Append the progressContainer and scoreText to the scoreProgressContainer
    scoreProgressContainer.appendChild(progressContainer);
    scoreProgressContainer.appendChild(scoreText);

    const description = document.createElement('p');
    description.style.fontSize = '12px';
    description.style.color = '#5C5C5C';
    description.style.margin = '0';
    description.style.textAlign = 'right';

    // Append all elements to the wrapperLink
    wrapperLink.appendChild(logoTitleContainer);
    wrapperLink.appendChild(scoreProgressContainer);
    wrapperLink.appendChild(description);

    // Append the wrapperLink to the container
    container.appendChild(wrapperLink);
            
    // Fetch the data (either mock data or real data)
    if (USE_MOCK_DATA) {
        getMockBSRData(userId)
            .then(handleData)
            .catch(handleError);
    } else {
        fetch(`${BASE_URL}/companies/widget/${userId}`)
            .then(response => response.json())
            .then(handleData)
            .catch(handleError);
    }

    // Handle the data and update the progress bar and score
    function handleData(data) {
        const bsr = data.BSR;
        const companyBrand = data.brand;
        const url = `https://companies.biyiud.eco/companies/${userId}`;
        if (bsr !== undefined) {
            const percentage = (bsr / 10) * 100;
            progressFill.style.width = `${percentage}%`;
            scoreText.textContent = `${bsr}`;
            wrapperLink.href = url;
            description.textContent = `Impacto positivo de ${companyBrand}`;
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
// window.renderBSRWidget1 = renderBSRWidget1;
