const certificates = [
    {
        name :'test',
        description :'tset tset tset',
        skills :['html', 'css'],
        imageSrc:'./img/gpt.png',       
    },
    {
        name :'test',
        description :'tset tset tset',
        skills :['html', 'css'],
        imageSrc:'./img/gpt.png',       
    },
];

function creatCertificatesCard(certificate){
    const certificateContainer = document.getElementById('certificates-container');

    //Creat certificate card element 
    const certificateCard = document.createElement('div')
    certificateCard.classList.add('card');
 
    // add card image
    const cardImage = document.createElement('div');
    cardImage.classList.add('card-image');
    const img = document.createElement('img');
    img.src = certificate.imageSrc;
    img.alt ='Certificate Image';
    cardImage.appendChild(img);

    // add skills info
    const skillContainer = document.createElement('div');
    skillContainer.classList.add('stack');
    certificate.skills.forEach(tech =>{
        const stackBtn = document.createElement('span');
        stackBtn.classList.add('stack-btn' ,tech.toLowerCase());
        stackBtn.textContent = tech ;
        skillContainer.appendChild(stackBtn);
    });

    //add content
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    cardContent.innerHTML = `
    <h3> ${certificate.name} </h3>
    <p> ${certificate.description} </p>
    `;

    // Assemble the certificate card
    certificateCard.appendChild(cardImage);
    certificateCard.appendChild(skillContainer);
    certificateCard.appendChild(cardContent);
   
    // Append the certificate card to the container
    certificateContainer.appendChild(certificateCard);
 
}

// Loop through the certificates array and add each certificate card to the DOM
certificates.forEach(creatCertificatesCard);