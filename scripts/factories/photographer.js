function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;
    const lien = `photographer.html?id=${id}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement('h3');
        h3.textContent = city + ", " + country
        const h4 = document.createElement('h4');
        h4.textContent = tagline
        const p = document.createElement('p');
        p.textContent = price + "€/jour"
        const a = document.createElement('a');
        a.setAttribute("href", lien)
        a.appendChild(img);
        article.appendChild(a);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(p);
        return (article);
    }
    return { name, picture, city, country, tagline, price, id, getUserCardDOM }
}

function photographerFactoryProfil(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOMProfil() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement('h3');
        h3.textContent = city + ", " + country
        const h4 = document.createElement('h4');
        h4.textContent = tagline
        article.appendChild(img)
        article.appendChild(h2)
        article.appendChild(h3)
        article.appendChild(h4)
        return (article)
    }

    return {name, picture, city, country, tagline, price, id, getUserCardDOMProfil}


}

function mediaFactory(data) {
    const { id, title, image, video, likes, date, price, photographerId } = data;


    function getMediaCardDOM() {
        const figure = document.createElement('figure');
        const footer = document.createElement('footer');
        const figcaption = document.createElement('figcaption');
        const aside = document.createElement('aside');
        const p = document.createElement('p');
        const i = document.createElement('i');
        const a = document.createElement('a')

        if (data.video === undefined) {
            const img = `assets/photographers/${image}`;
            const picture = document.createElement('img');
            picture.setAttribute("src", img)
            a.setAttribute("href", img)
            figure.appendChild(picture)
        }

        if (data.image === undefined) {
            const vid = `assets/photographers/${video}`;
            const picture = document.createElement('video');
            picture.setAttribute("src", vid)
            picture.setAttribute("type", "mp4")
            figure.appendChild(picture)
            a.setAttribute("href", vid)
        }

        figcaption.textContent = title
        p.textContent = likes
        i.className = "fas fa-heart"
        aside.appendChild(p)
        aside.appendChild(i)
        footer.appendChild(figcaption)
        footer.appendChild(aside)
        figure.appendChild(footer)
        a.appendChild(figure)
        return a

    }

    return {id, title, image, video, likes, date, price, photographerId, getMediaCardDOM}



}

