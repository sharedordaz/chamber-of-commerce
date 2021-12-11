const requestURL = '../businesses.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing'
    const companies = jsonObject['main'];

    for (let i = 0; i < companies.length; i++ ) {

        let card = document.createElement('div');

        let h3 = document.createElement('h3');       
        let c_info = document.createElement("p");
        let c_link = document.createElement("button");
        let image = document.createElement("img");

        h3.textContent = companies[i].name;
        c_info.textContent = companies[i].contact_info;
        c_link.textContent = "Website";
        c_link.setAttribute("href",companies[i].link); 


        image.setAttribute('src', companies[i].logo); // pasted content
        
        card.appendChild(h3);
        card.appendChild(c_info);
        card.appendChild(c_link);
        card.appendChild(image)
        document.querySelector('main').appendChild(card);
    }
  });

