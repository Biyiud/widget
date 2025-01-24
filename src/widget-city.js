const faceIcon = {
  good: "😍",
  regular: "🙂",
  bad: "🫤"
}

const cities = {
  Albacete: [{ name: "Hellín", ineCode: "02037" }],
  "Alicante/Alacant": [
    { name: "Benidorm", ineCode: "03031" },
    { name: "Campello, El", ineCode: "03050" },
    { name: "Crevillent", ineCode: "03059" },
    { name: "Dénia", ineCode: "03063" },
    { name: "Elda", ineCode: "03066" },
    { name: "Orihuela", ineCode: "03099" },
    { name: "Petrer", ineCode: "03104" },
    { name: "Santa Pola", ineCode: "03121" },
    { name: "Torrevieja", ineCode: "03133" },
    { name: "Villena", ineCode: "03140" },
  ],
  Almería: [
    { name: "Almería", ineCode: "04013" },
    { name: "Ejido, El", ineCode: "04902" },
    { name: "Níjar", ineCode: "04066" },
    { name: "Roquetas De Mar", ineCode: "04079" },
  ],
  "Araba/Álava": [{ name: "Vitoria-Gasteiz", ineCode: "01059" }],
  Asturias: [
    { name: "Gijón", ineCode: "33024" },
    { name: "Langreo", ineCode: "33031" },
    { name: "Mieres", ineCode: "33037" },
    { name: "Oviedo", ineCode: "33044" },
    { name: "Siero", ineCode: "33066" },
  ],
  Ávila: [{ name: "Ávila", ineCode: "05019" }],
  Badajoz: [
    { name: "Almendralejo", ineCode: "06011" },
    { name: "Badajoz", ineCode: "06015" },
    { name: "Don Benito", ineCode: "06044" },
    { name: "Mérida", ineCode: "06083" },
  ],
  "Balears, Illes": [
    { name: "Calvià", ineCode: "07011" },
    { name: "Ciutadella De Menorca", ineCode: "07015" },
    { name: "Eivissa", ineCode: "07026" },
    { name: "Inca", ineCode: "07027" },
    { name: "Llucmajor", ineCode: "07031" },
    { name: "Manacor", ineCode: "07033" },
    { name: "Marratxí", ineCode: "07036" },
    { name: "Santa Eulària Des Riu", ineCode: "07054" },
    { name: "Sant Josep De Sa Talaia", ineCode: "07048" },
  ],
  Barcelona: [
    { name: "Badalona", ineCode: "08015" },
    { name: "Barberà Del Vallès", ineCode: "08252" },
    { name: "Barcelona", ineCode: "08019" },
    { name: "Castelldefels", ineCode: "08056" },
    { name: "Cerdanyola Del Vallès", ineCode: "08266" },
    { name: "Cornellà De Llobregat", ineCode: "08073" },
    { name: "Esplugues De Llobregat", ineCode: "08077" },
    { name: "Gavà", ineCode: "08089" },
    { name: "Granollers", ineCode: "08096" },
    { name: "Hospitalet De Llobregat, L`", ineCode: "08101" },
    { name: "Igualada", ineCode: "08102" },
    { name: "Manresa", ineCode: "08113" },
    { name: "Mataró", ineCode: "08121" },
    { name: "Mollet Del Vallès", ineCode: "08124" },
    { name: "Montcada I Reixac", ineCode: "08125" },
    { name: "Prat De Llobregat, El", ineCode: "08169" },
    { name: "Ripollet", ineCode: "08180" },
    { name: "Rubí", ineCode: "08184" },
    { name: "Sabadell", ineCode: "08187" },
    { name: "Santa Coloma De Gramenet", ineCode: "08245" },
    { name: "Sant Adrià De Besòs", ineCode: "08194" },
    { name: "Sant Boi De Llobregat", ineCode: "08200" },
    { name: "Sant Cugat Del Vallès", ineCode: "08205" },
    { name: "Sant Feliu De Llobregat", ineCode: "08211" },
    { name: "Sant Joan Despí", ineCode: "08217" },
    { name: "Sant Pere De Ribes", ineCode: "08231" },
    { name: "Sitges", ineCode: "08270" },
    { name: "Terrassa", ineCode: "08279" },
    { name: "Vic", ineCode: "08298" },
    { name: "Viladecans", ineCode: "08301" },
    { name: "Vilafranca Del Penedès", ineCode: "08305" },
    { name: "Vilanova I La Geltrú", ineCode: "08307" },
  ],
  Bizkaia: [
    { name: "Basauri", ineCode: "48015" },
    { name: "Bilbao", ineCode: "48020" },
    { name: "Getxo", ineCode: "48044" },
    { name: "Leioa", ineCode: "48054" },
    { name: "Portugalete", ineCode: "48078" },
    { name: "Santurtzi", ineCode: "48082" },
  ],
  Burgos: [
    { name: "Burgos", ineCode: "09059" },
    { name: "Miranda De Ebro", ineCode: "09219" },
  ],
  Cáceres: [
    { name: "Cáceres", ineCode: "10037" },
    { name: "Plasencia", ineCode: "10148" },
  ],
  Cádiz: [
    { name: "Chiclana De La Frontera", ineCode: "11015" },
    { name: "Jerez De La Frontera", ineCode: "11020" },
    { name: "Línea De La Concepción, La", ineCode: "11022" },
    { name: "Puerto De Santa María, El", ineCode: "11027" },
    { name: "Puerto Real", ineCode: "11028" },
    { name: "San Fernando", ineCode: "11031" },
    { name: "Sanlúcar De Barrameda", ineCode: "11032" },
    { name: "San Roque", ineCode: "11033" },
  ],
  Cantabria: [
    { name: "Camargo", ineCode: "39016" },
    { name: "Castro-Urdiales", ineCode: "39020" },
    { name: "Santander", ineCode: "39075" },
    { name: "Torrelavega", ineCode: "39087" },
  ],
  "Castellón/Castelló": [
    { name: "Borriana/Burriana", ineCode: "12032" },
    { name: "Castelló De La Plana", ineCode: "12040" },
    { name: "Vall D`Uixó, La", ineCode: "12126" },
    { name: "Vila-Real", ineCode: "12135" },
  ],
  "Ciudad Real": [
    { name: "Ciudad Real", ineCode: "13034" },
    { name: "Puertollano", ineCode: "13071" },
    { name: "Tomelloso", ineCode: "13082" },
    { name: "Valdepeñas", ineCode: "13087" },
  ],
  Córdoba: [
    { name: "Córdoba", ineCode: "14021" },
    { name: "Lucena", ineCode: "14038" },
  ],
  "Coruña, A": [
    { name: "Carballo", ineCode: "15019" },
    { name: "Coruña, A", ineCode: "15030" },
    { name: "Culleredo", ineCode: "15031" },
    { name: "Ferrol", ineCode: "15036" },
    { name: "Narón", ineCode: "15054" },
    { name: "Oleiros", ineCode: "15058" },
    { name: "Santiago De Compostela", ineCode: "15078" },
  ],
  Cuenca: [{ name: "Cuenca", ineCode: "16078" }],
  Gipuzkoa: [
    { name: "Donostia/San Sebastián", ineCode: "20069" },
    { name: "Errenteria", ineCode: "20067" },
    { name: "Irun", ineCode: "20045" },
  ],
  Girona: [
    { name: "Blanes", ineCode: "17023" },
    { name: "Figueres", ineCode: "17066" },
    { name: "Girona", ineCode: "17079" },
    { name: "Lloret De Mar", ineCode: "17095" },
    { name: "Olot", ineCode: "17114" },
    { name: "Salt", ineCode: "17155" },
  ],
  Granada: [
    { name: "Granada", ineCode: "18087" },
    { name: "Motril", ineCode: "18140" },
  ],
  Guadalajara: [
    { name: "Azuqueca De Henares", ineCode: "19046" },
    { name: "Guadalajara", ineCode: "19130" },
  ],
  Huelva: [{ name: "Huelva", ineCode: "21041" }],
  Huesca: [{ name: "Huesca", ineCode: "22125" }],
  Jaén: [
    { name: "Jaén", ineCode: "23050" },
    { name: "Linares", ineCode: "23055" },
    { name: "Úbeda", ineCode: "23092" },
  ],
  León: [
    { name: "León", ineCode: "24089" },
    { name: "Ponferrada", ineCode: "24115" },
    { name: "San Andrés Del Rabanedo", ineCode: "24142" },
  ],
  Lleida: [{ name: "Lleida", ineCode: "25120" }],
  Lugo: [{ name: "Lugo", ineCode: "27028" }],
  Madrid: [
    { name: "Aranjuez", ineCode: "28013" },
    { name: "Arganda Del Rey", ineCode: "28014" },
    { name: "Arroyomolinos", ineCode: "28015" },
    { name: "Boadilla Del Monte", ineCode: "28022" },
    { name: "Collado Villalba", ineCode: "28047" },
    { name: "Colmenar Viejo", ineCode: "28045" },
    { name: "Coslada", ineCode: "28049" },
    { name: "Fuenlabrada", ineCode: "28058" },
    { name: "Galapagar", ineCode: "28061" },
    { name: "Getafe", ineCode: "28065" },
    { name: "Leganés", ineCode: "28074" },
    { name: "Madrid", ineCode: "28079" },
    { name: "Majadahonda", ineCode: "28080" },
    { name: "Móstoles", ineCode: "28092" },
    { name: "Navalcarnero", ineCode: "28096" },
    { name: "Parla", ineCode: "28106" },
    { name: "Pinto", ineCode: "28113" },
    { name: "Pozuelo De Alarcón", ineCode: "28115" },
    { name: "Rivas-Vaciamadrid", ineCode: "28123" },
    { name: "Rozas De Madrid, Las", ineCode: "28127" },
    { name: "San Fernando De Henares", ineCode: "28130" },
    { name: "San Sebastián De Los Reyes", ineCode: "28134" },
    { name: "Torrejón De Ardoz", ineCode: "28148" },
    { name: "Tres Cantos", ineCode: "28903" },
    { name: "Valdemoro", ineCode: "28161" },
  ],
  Málaga: [
    { name: "Alhaurín De La Torre", ineCode: "29007" },
    { name: "Antequera", ineCode: "29015" },
    { name: "Benalmádena", ineCode: "29025" },
    { name: "Estepona", ineCode: "29051" },
    { name: "Fuengirola", ineCode: "29054" },
    { name: "Málaga", ineCode: "29067" },
    { name: "Marbella", ineCode: "29069" },
    { name: "Mijas", ineCode: "29070" },
    { name: "Rincón De La Victoria", ineCode: "29082" },
    { name: "Ronda", ineCode: "29084" },
    { name: "Torremolinos", ineCode: "29901" },
    { name: "Vélez-Málaga", ineCode: "29094" },
  ],
  Murcia: [
    { name: "Cartagena", ineCode: "30016" },
    { name: "Lorca", ineCode: "30024" },
    { name: "Mazarrón", ineCode: "30026" },
    { name: "Molina De Segura", ineCode: "30027" },
    { name: "Murcia", ineCode: "30030" },
    { name: "San Javier", ineCode: "30035" },
    { name: "Torre-Pacheco", ineCode: "30037" },
    { name: "Totana", ineCode: "30039" },
    { name: "Yecla", ineCode: "30043" },
  ],
  Navarra: [
    { name: "Pamplona/Iruña", ineCode: "31201" },
    { name: "Tudela", ineCode: "31232" },
  ],
  Ourense: [{ name: "Ourense", ineCode: "32054" }],
  Palencia: [{ name: "Palencia", ineCode: "34120" }],
  "Palmas, Las": [
    { name: "Agüimes", ineCode: "35002" },
    { name: "Arrecife", ineCode: "35004" },
    { name: "Arucas", ineCode: "35006" },
    { name: "Ingenio", ineCode: "35011" },
    { name: "Palmas De Gran Canaria, Las", ineCode: "35016" },
    { name: "Puerto Del Rosario", ineCode: "35017" },
    { name: "San Bartolomé De Tirajana", ineCode: "35019" },
    { name: "Santa Lucía De Tirajana", ineCode: "35022" },
    { name: "Telde", ineCode: "35026" },
  ],
  Pontevedra: [
    { name: "Pontevedra", ineCode: "36038" },
    { name: "Vigo", ineCode: "36057" },
    { name: "Vilagarcía De Arousa", ineCode: "36060" },
  ],
  "Rioja, La": [{ name: "Logroño", ineCode: "26089" }],
  Salamanca: [{ name: "Salamanca", ineCode: "37274" }],
  "Santa Cruz de Tenerife": [
    { name: "Puerto De La Cruz", ineCode: "38028" },
    { name: "Realejos, Los", ineCode: "38031" },
    { name: "Santa Cruz De Tenerife", ineCode: "38038" },
  ],
  Segovia: [{ name: "Segovia", ineCode: "40194" }],
  Sevilla: [
    { name: "Coria Del Río", ineCode: "41034" },
    { name: "Dos Hermanas", ineCode: "41038" },
    { name: "Écija", ineCode: "41039" },
    { name: "Mairena Del Aljarafe", ineCode: "41059" },
    { name: "Palacios Y Villafranca, Los", ineCode: "41069" },
    { name: "Rinconada, La", ineCode: "41081" },
    { name: "Sevilla", ineCode: "41091" },
    { name: "Utrera", ineCode: "41095" },
  ],
  Soria: [{ name: "Soria", ineCode: "42173" }],
  Tarragona: [
    { name: "Calafell", ineCode: "43037" },
    { name: "Cambrils", ineCode: "43038" },
    { name: "Reus", ineCode: "43123" },
    { name: "Salou", ineCode: "43905" },
    { name: "Tarragona", ineCode: "43148" },
    { name: "Tortosa", ineCode: "43155" },
    { name: "Vendrell, El", ineCode: "43163" },
  ],
  Teruel: [{ name: "Teruel", ineCode: "44216" }],
  Toledo: [
    { name: "Illescas", ineCode: "45081" },
    { name: "Talavera De La Reina", ineCode: "45165" },
    { name: "Toledo", ineCode: "45168" },
  ],
  "Valencia/València": [
    { name: "Aldaia", ineCode: "46021" },
    { name: "Alzira", ineCode: "46017" },
    { name: "Burjassot", ineCode: "46078" },
    { name: "Gandia", ineCode: "46131" },
    { name: "Manises", ineCode: "46159" },
    { name: "Mislata", ineCode: "46169" },
    { name: "Ontinyent", ineCode: "46184" },
    { name: "Paterna", ineCode: "46190" },
    { name: "Torrent", ineCode: "46244" },
    { name: "València", ineCode: "46250" },
    { name: "Xirivella", ineCode: "46110" },
  ],
  Valladolid: [{ name: "Valladolid", ineCode: "47186" }],
  Zamora: [{ name: "Zamora", ineCode: "49275" }],
  Zaragoza: [{ name: "Zaragoza", ineCode: "50297" }],
};

async function renderAvoidedEmissions(containerId, defaultProvince, defaultCity, size) {
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
  if(size === "small") {
    title.classList.add("biyiud-widget__title--small");
  }
  const city = document.createElement("span");
  city.classList.add("biyiud-widget__city");
  city.textContent = ` ${cityName}`;
  title.textContent = "Emisiones evitadas por";

  const subTitle = document.createElement("p");
  subTitle.classList.add("biyiud-widget__subtitle");
  if(size === "small") {
    subTitle.classList.add("biyiud-widget__subtitle--small");
  }
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

  if(size === "small") {
    body.classList.add("biyiud-widget__score-container--small")
  }

  const score = document.createElement("p");
  score.classList.add("biyiud-widget__score")
  if(size === "small") {
    score.classList.add("biyiud-widget__score--small")
  }
  const scoreValue = document.createElement("span");
  scoreValue.classList.add("biyiud-widget__score-value");
  if(size === "small") {
    scoreValue.classList.add("biyiud-widget__score-value--small");
  }
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
  if(size === "small") {
    averageText.classList.add("biyiud-widget__average--small");
  }
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
  if(size === "small") {
    footerText.classList.add("biyiud-widget__footer-text--small");
  }
  footerText.target = "_blank"
  footerText.textContent = "Powered by Biyiud";

  footer.appendChild(footerText);

  wrapper.appendChild(header);
  wrapper.appendChild(body);
  wrapper.appendChild(footer);

  container.appendChild(wrapper)

  selectProvince.addEventListener("change", (event) => {
    const value = event.target.value;
    const province = cities[value];
    
    selectCity.innerHTML = "";
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Selecciona una ciudad";
    selectCity.appendChild(option);
    province.forEach((city) => {
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
