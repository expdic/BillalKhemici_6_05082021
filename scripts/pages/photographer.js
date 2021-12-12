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

async function initProfil() {
	displayDataProfil(photographers);
        displayMedia(media, 0)
        displayPriceAndLike(media, photographers)
};
    
initProfil();


async function displayMedia(media, choix) {
        const classMedia = document.querySelector(".photograph-media");
        classMedia.innerHTML =""
	const monid = window.location.search.split('id=')[1];
	const medias = media.filter(monmedia => {
        return monmedia.photographerId.toString()=== monid
        })

        if (choix === 0) {
        
                medias.sort(function(a,b){
                        if(a.likes == b.likes)
                                return 0;
                        if(a.likes < b.likes)
                                return 1;
                        if(a.likes > b.likes)
                                return -1;
                });
                        
        }

        else if (choix === 1) {
                medias.sort(function(a,b){
                        if(a.date == b.date)
                                return 0;
                        if(a.date < b.date)
                                return 1;
                        if(a.date > b.date)
                                return -1;
                });
        }

        else if (choix === 2) {
                medias.sort(function(a,b){
                        if(a.title == b.title)
                                return 0;
                        if(a.title < b.title)
                                return -1;
                        if(a.title > b.title)
                                return 1;
                });
        }


        
	
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

        document.querySelector(".contactezmoi").innerHTML ="<h1> <span> Contactez moi </span> <br> <span> " + photograph[0].name + "</span></h1> <img src='assets/icons/close.svg' aria-label='cliquer ici pour fermer le modale' alt='fermer le modal' onclick='closeModal()' />"

        
        const p0 = document.createElement('h2');
        p0.textContent = photograph[0].price +"€ / jour"
        
        const aside = document.createElement('aside');
        const p = document.createElement('h1');
        p.className = "totalLikes"
        const i = document.createElement('i');
        p.textContent = sum
        i.className = "fas fa-heart"
        aside.appendChild(p)
        aside.appendChild(i)
        priceAndLike.appendChild(aside)
        priceAndLike.appendChild(p0)




}


async function getSelectValue() {
        var selectedValue = document.getElementById("select").value
        console.log(selectedValue)
        
        if (selectedValue === "Popularité") {
                displayMedia(media, 0)
                init()
        }

        else if (selectedValue === "Date") {
                displayMedia(media, 1)
                init()
        }

        else if (selectedValue === "Titre") {
                displayMedia(media, 2)
                init()
        }
}

