const x = {
  bien: {
    bg: "#bbf7d0",
    text: "#15803d",
    icon: "😍",
  },
  regular: {
    bg: "#fef08a",
    text: "#a16207",
    icon: "🙂",
  },
  mal: {
    bg: "#fecaca",
    text: "#b91c1c",
    icon: "🫤",
  },
}

const PROMEDIO_DEFAULT = 20;

// const cities2 = {
//   "Madrid": [
//     {
//       name: "Madrid",
//       ineCode: "28079"
//     },
//     {
//       name: "Alcalá de Henares",
//       ineCode: "28005"
//     },
//     {
//       name: "Fuenlabrada",
//       ineCode: "28058"
//     }
//   ],
//   "Barcelona": [
//     {
//       name: "Barcelona",
//       ineCode: "08019"
//     },
//     {
//       name: "L'Hospitalet de Llobregat",
//       ineCode: "08101",
//     },
//     {
//       name: "Badalona",
//       ineCode: "08015"
//     }
//   ],
//   // "Sevilla": {},
//   // "Valencia": {},
//   // "Málaga": {},
//   // "Zaragoza": {},
// }

const cities2 = {
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

let CitySelected;
let ProvinceSelected;

async function renderAvoidedEmissions(containerId, defaultProvince, defaultCity) {
  const container = document.getElementById(containerId);


  const total = await getCityData(defaultCity);
  const average = total.averageCO2emissions * 100;
  let iconFace;
  if(average > 30) {
    iconFace = x.bien;
  } else if (average > 0) {
    iconFace = x.regular;
  } else {
    iconFace = x.mal;
  }

  if (!container) {
    console.error("Container element not found");
    return;
  }

  container.innerHTML = "";
  container.style = "";


  const wrapper = document.createElement("div");
  wrapper.style.textDecoration = "none";
  wrapper.style.color = "inherit";
  wrapper.style.display = "flex";
  wrapper.style.flexDirection = "column";
  wrapper.style.gap = "12px";
  wrapper.style.fontFamily = "Arial, sans-serif";
  wrapper.style.margin = "0 auto";
  wrapper.style.padding = "16px 16px 10px 16px";
  wrapper.style.width = "480px";
  wrapper.style.border = "2px solid rgb(229 229 229)";
  wrapper.style.borderRadius = "9px";

  // HEADER
  const header = document.createElement("header");
  header.style.display = "flex";
  header.style.flexDirection = "column";
  header.style.gap = "8px";

  const containerSelectors = document.createElement("div");
  containerSelectors.style.display = "flex";
  containerSelectors.style.gap = "8px";

  const selectProvince = document.createElement("select");
  selectProvince.style.padding = "8px";
  selectProvince.style.borderRadius = "4px";
  selectProvince.style.appearance = "none";
  selectProvince.style.backgroundImage = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 5 5-5z' fill='%23808080'/%3E%3C/svg%3E\")";
  selectProvince.style.backgroundRepeat = "no-repeat";
  selectProvince.style.backgroundPosition = "right 10px center";
  selectProvince.style.outline = "none";
  selectProvince.style.width = "240px";
  selectProvince.style.border = "2px solid #E5E5E5"
  selectProvince.style.color = "#6f6d6d";
  selectProvince.style.fontWeight = "bold";

  const selectCity = selectProvince.cloneNode(false);

  Object.keys(cities2).forEach(province => {
    const option = document.createElement("option");
    option.value = province; // Establecer el valor
    option.textContent = province; // Establecer el texto visible
    if(province.toLocaleLowerCase() === defaultProvince.toLocaleLowerCase()) {
      option.selected = true;
    }
    selectProvince.appendChild(option); // Añadir al <select>
  });

  cities2[defaultProvince].forEach(city => {
    const option = document.createElement("option");
    option.value = city.ineCode;
    option.textContent = city.name; 
    if(city.ineCode === defaultCity) {
      option.selected = true;
    }
    selectCity.appendChild(option);
  });

  const cityName = cities2[defaultProvince].filter(city => city.ineCode === defaultCity)[0].name;
  const containerTitles = document.createElement("div");
  const containerText = document.createElement("div");
  containerText.style.fontSize = "18px";
  containerText.style.display = "flex";
  containerText.style.gap = "8px";
  containerText.style.justifyContent = "center";
  const title = document.createElement("p");
  const city = document.createElement("p");
  city.style.margin = 0;
  city.style.fontWeight = "bold";
  city.style.color = "rgb(8, 121, 125)";
  city.textContent = cityName;
  title.style.margin = "0";
  title.style.fontWeight = "bold";
  title.style.color = "#5b5858";
  title.textContent = "Emisiones evitadas por";

  const subTitle = document.createElement("p");
  subTitle.style.fontSize = "12px";
  subTitle.style.textAlign = "center";
  subTitle.style.margin = "0";
  subTitle.style.fontWeight = "bold";
  subTitle.style.color = "#5b5858";
  subTitle.textContent = "Por ahorro de energía eléctrica de la red en los últimos 12 meses";

  containerText.appendChild(title);
  containerText.appendChild(city);

  containerTitles.appendChild(containerText);
  containerTitles.appendChild(subTitle);

  containerSelectors.appendChild(selectProvince);
  containerSelectors.appendChild(selectCity);

  header.appendChild(containerSelectors);
  header.appendChild(containerTitles);

  // BODY
  const body = document.createElement("section");
  body.style.display = "flex";
  body.style.justifyContent = "space-between";

  const valueContainer = document.createElement("div");
  const valueText = document.createElement("p")
  const valueSpan1 = document.createElement("span");
  const valueSpan2 = document.createElement("span");
  valueText.style.margin = "0";
  valueSpan1.style.fontSize = "32px";
  valueSpan1.style.fontWeight = "bold";
  valueSpan1.textContent = `${total.totalCO2emissions.toFixed(2)} `
  valueSpan2.style.fontSize = "15px";
  valueSpan2.textContent = "tCO2eq."
  valueSpan2.style.color= "#9d9d9d";
  
  valueText.appendChild(valueSpan1);
  valueText.appendChild(valueSpan2);
  valueContainer.appendChild(valueText);

  const averageContainer = document.createElement("div");
  averageContainer.style.padding = "8px 16px";
  averageContainer.style.backgroundColor = iconFace.bg;

  averageContainer.style.borderRadius = "16px";
  const averageText = document.createElement("p");
  averageText.style.margin = "0";
  averageText.textContent = `Promedio mensual ${average.toFixed(2)}%  ${iconFace.icon}`;
  averageText.style.color = `${iconFace.text}`;
  averageContainer.appendChild(averageText);

  body.appendChild(valueContainer);
  body.appendChild(averageContainer);

  
  // FOOTER
  const footer = document.createElement("footer");
  footer.style.display = "flex";
  footer.style.flexDirection = "column";
  footer.style.gap = "8px";
  const div1 = document.createElement("div");
  
  const p2 = document.createElement("p");
  p2.style.margin = "0";
  p2.style.fontSize = "12px"
  p2.style.textAlign = "right";
  p2.style.fontWeight = "bold";
  p2.style.color = "rgb(8, 121, 125)";
  p2.textContent = "Powered by Biyiud";
  // rgb(8, 121, 125)

  footer.appendChild(p2);

  wrapper.appendChild(header);
  wrapper.appendChild(body);
  wrapper.appendChild(footer);

  container.appendChild(wrapper)

  selectProvince.addEventListener("change", (event) => {
    const value = event.target.value;
    const cities = cities2[value];
    
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
    valueSpan1.textContent = `${total.totalCO2emissions.toFixed(2)} `;
    city.textContent = `${event.target.options[event.target.selectedIndex].text}`;
    const average = total.averageCO2emissions * 100;
    let iconFace;
    if(average > 30) {
      iconFace = x.bien;
    } else if (average > 0) {
      iconFace = x.regular;
    } else {
      iconFace = x.mal;
    }
    averageText.textContent = `Promedio mensual ${average.toFixed(2)}%  ${iconFace.icon}`;
    averageText.style.color = `${iconFace.text}`;
    averageContainer.style.backgroundColor = iconFace.bg;
  });

};

async function getCityData(ineCode) {
  const resp = await fetch(`https://byd-api-v2-5praimar.ew.gateway.dev/cities/emissions/${ineCode}`);
  const data = await resp.json();
  return data.total;
}


window.renderAvoidedEmissions = renderAvoidedEmissions;
