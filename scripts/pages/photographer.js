async function displayDataProfil(photographers) {
    const photographersHeadProfil = document.querySelector(".photograph-header");
	

    const monid = window.location.search.split('id=')[1];



    const photograph = photographers.filter(monphotograph => {
        return monphotograph.id.toString()=== monid
	})

  

    const photographerMode2 = photographerFactoryProfil(photograph[0]);

    const userCardDOMPROFIL = photographerMode2.getUserCardDOMProfil();

    photographersHeadProfil.appendChild(userCardDOMPROFIL);

};

async function init2() {
	displayDataProfil(photographers);
        displayMedia(media)
        displayPriceAndLike(media, photographers)
};
    
init2();


async function displayMedia(media) {

	const classMedia = document.querySelector(".photograph-media");
	const monid = window.location.search.split('id=')[1];
	const medias = media.filter(monmedia => {
        return monmedia.photographerId.toString()=== monid
	})
	
	medias.forEach((media) => {
        const mediaModel = mediaFactory(media);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        classMedia.appendChild(mediaCardDOM);
	});
	

}

async function displayPriceAndLike(media, photographers) {
        const priceAndLike = document.querySelector(".priceandlike");

        const monid = window.location.search.split('id=')[1];

        const medias = media.filter(monmedia => {
        return monmedia.photographerId.toString()=== monid
        })

        let sum = 0

        for (let i = 0; i < medias.length; i++) {
                sum += medias[i].likes;
        }

        const photograph = photographers.filter(monphotograph => {
        return monphotograph.id.toString()=== monid
        })

        document.querySelector(".contactezmoi").innerHTML ="Contactez moi <br> <p id='nomcontact'>" + photograph[0].name + "</p>"

        
        const p0 = document.createElement('p');
        p0.textContent = photograph[0].price +"€ / jour"
        
        const aside = document.createElement('aside');
        const p = document.createElement('p');
        const i = document.createElement('i');
        p.textContent = sum
        i.className = "fas fa-heart"
        aside.appendChild(p)
        aside.appendChild(i)
        priceAndLike.appendChild(aside)
        priceAndLike.appendChild(p0)




}