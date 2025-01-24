const faceIcon = {
  good: "😍",
  regular: "🙂",
  bad: "🫤"
}

const cities = {
  "Madrid": [
    {
      name: "Madrid",
      ineCode: "28079"
    },
    {
      name: "Alcalá de Henares",
      ineCode: "28005"
    },
    {
      name: "Fuenlabrada",
      ineCode: "28058"
    }
  ],
  "Barcelona": [
    {
      name: "Barcelona",
      ineCode: "08019"
    },
    {
      name: "L'Hospitalet de Llobregat",
      ineCode: "08101"
    },
    {
      name: "Badalona",
      ineCode: "08015"
    },
    {
      name: "Granollers",
      ineCode: "08096"
    }
  ],
  "Araba": [
    {
      name: "Vitoria-Gasteiz",
      ineCode: "01059"
    }
  ],
  "València": [
    {
      name: "Alzira",
      ineCode: "46017"
    },
    {
      name: "Burjassot",
      ineCode: "46078"
    }
  ],
  "A Coruña": [
    {
      name: "A Coruña",
      ineCode: "15030"
    },
    {
      name: "Ferrol",
      ineCode: "15036"
    }
  ]
};

async function renderAvoidedEmissions(containerId, defaultProvince, defaultCity) {
  const container = document.getElementById(containerId);


  const total = await getCityData(defaultCity);
  const average = total.averageCO2emissions * 100;

  const cityName = cities[defaultProvince].filter(city => city.ineCode === defaultCity)[0].name;

  if (!container) {
    console.error("Container element not found");
    return;
  }

  container.innerHTML = "";
  container.style = "";
  container.classList.add("biyiud-widget__container");

  const wrapper = document.createElement("section");
  wrapper.classList.add("biyiud-widget")

  const header = document.createElement("header");
  header.classList.add("biyiud-widget__header");

  const containerSelectors = document.createElement("div");
  containerSelectors.classList.add("biyiud-widget__selectors");
 
  const selectProvince = document.createElement("select");
  selectProvince.classList.add("biyiud-widget__select")

  const selectCity = selectProvince.cloneNode(false);

  Object.keys(cities).forEach(province => {
    const option = document.createElement("option");
    option.value = province; // Establecer el valor
    option.textContent = province; // Establecer el texto visible
    if(province.toLocaleLowerCase() === defaultProvince.toLocaleLowerCase()) {
      option.selected = true;
    }
    selectProvince.appendChild(option); // Añadir al <select>
  });

  cities[defaultProvince].forEach(city => {
    const option = document.createElement("option");
    option.value = city.ineCode;
    option.textContent = city.name; 
    if(city.ineCode === defaultCity) {
      option.selected = true;
    }
    selectCity.appendChild(option);
  });
  
  const containerTitles = document.createElement("div");
  containerTitles.classList.add("biyiud-widget__title-container");

  const title = document.createElement("p");
  title.classList.add("biyiud-widget__title");
  const city = document.createElement("span");
  city.classList.add("biyiud-widget__city");
  city.textContent = ` ${cityName}`;
  title.textContent = "Emisiones evitadas por";

  const subTitle = document.createElement("p");
  subTitle.classList.add("biyiud-widget__subtitle");
  subTitle.textContent = "ahorrando energía eléctrica de la red en los últimos 12 meses";

  title.appendChild(city);

  containerTitles.appendChild(title);
  containerTitles.appendChild(subTitle);

  containerSelectors.appendChild(selectProvince);
  containerSelectors.appendChild(selectCity);

  header.appendChild(containerSelectors);
  header.appendChild(containerTitles);

  const body = document.createElement("section");
  body.classList.add("biyiud-widget__score-container")

  const score = document.createElement("p");
  score.classList.add("biyiud-widget__score")
  const scoreValue = document.createElement("span");
  scoreValue.classList.add("biyiud-widget__score-value");
  scoreValue.textContent = `${total.totalCO2emissions.toFixed(1)} `;
  score.append(scoreValue, "tCO2eq.");

  const averageContainer = document.createElement("div");
  averageContainer.classList.add("biyiud-widget__average-container")

  if(average > 30) {
    averageContainer.classList.add("good")
  } else if (average > 0) {
    averageContainer.classList.add("regular")
  } else {
    averageContainer.classList.add("bad")
  }

  const averageText = document.createElement("p");
  averageText.classList.add("biyiud-widget__average");
  averageText.textContent = `Promedio mensual ${average.toFixed(2)}%  ${average > 30 ? faceIcon.good : average > 0 ? faceIcon.regular : faceIcon.bad}`;
  averageContainer.appendChild(averageText);

  body.appendChild(score);
  body.appendChild(averageContainer);

  
  const footer = document.createElement("footer");
  footer.style.display = "flex";
  footer.style.flexDirection = "column";
  footer.style.gap = "8px";
  
  const footerText = document.createElement("a");
  footerText.href = "https://www.biyiud.eco/";
  footerText.classList.add("biyiud-widget__footer-text");
  footerText.target = "_blank"
  footerText.textContent = "Powered by Biyiud";

  footer.appendChild(footerText);

  wrapper.appendChild(header);
  wrapper.appendChild(body);
  wrapper.appendChild(footer);

  container.appendChild(wrapper)

  selectProvince.addEventListener("change", (event) => {
    const value = event.target.value;
    const cities = cities[value];
    
    selectCity.innerHTML = "";
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Selecciona una ciudad";
    selectCity.appendChild(option);
    cities.forEach((city) => {
      const option = document.createElement("option");
      option.selected = false;
      option.value = city.ineCode;
      option.textContent = city.name;
      selectCity.appendChild(option);
    });
  })

  selectCity.addEventListener("change", async (event) => {
    const value = event.target.value;

    if(!value) return;

    const total = await getCityData(value);
    const averageResp =  total.averageCO2emissions * 100;

    scoreValue.textContent = `${total.totalCO2emissions.toFixed(2)} `;
    city.textContent = ` ${event.target.options[event.target.selectedIndex].text}`;
    averageContainer.className = "";
    averageContainer.classList.add("biyiud-widget__average-container");
    if(averageResp > 30) {
      averageContainer.classList.add("good")
    } else if(averageResp > 0) {
      averageContainer.classList.add("regular")
    } else {
      averageContainer.classList.add("bad")
    }
    averageText.textContent = `Promedio mensual ${averageResp.toFixed(2)}%  ${averageResp > 30 ? faceIcon.good : averageResp > 0 ? faceIcon.regular : faceIcon.bad}`;
  });

};

async function getCityData(ineCode) {
  const resp = await fetch(`https://byd-api-v2-5praimar.ew.gateway.dev/cities/emissions/${ineCode}`);
  const data = await resp.json();
  return data.total;
}


window.renderAvoidedEmissions = renderAvoidedEmissions;
