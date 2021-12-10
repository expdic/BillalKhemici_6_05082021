/**
 * @property {HTMLElement} element
 * @property {string[]} images 
 * @property {string} url image affiché
 */


class Lightbox{
    /**
     * @param {string} url URL de l'image
     * @param {string[]} images Gallerie des image de la page
     */

    constructor(url, images) {
        this.images = images
        const element = this.buildDOM(url)
        document.body.appendChild(element)
    }





    /**
     * Ferme la lightbox
     * @param {MouseEvent} e
     */
    close(e) {
        e.preventDefault()
        
        this.parentElement.classList.add("closer");
        window.setTimeout(() => {
            this.parentElement.parentElement.removeChild(this.parentElement)}
        )
    }

    /**
     * @param {MouseEvent} e  
     */

    next(e) {
        e.preventDefault()
        const links = Array.from(document.querySelectorAll(`a[href$=".jpg"], a[href$=".jpeg"], a[href$=".mp4"]`))
        const gallery = links.map(link => link.getAttribute('href'))
        let index = gallery.findIndex(image => image === monurl)
        if (index === gallery.length - 1) {
            index=-1
        }
        loadMedia(gallery[index+1])
        

        
    }


    /**
     * @param {MouseEvent} e  
     */

    prev(e) {
        e.preventDefault()
        const links = Array.from(document.querySelectorAll(`a[href$=".jpg"], a[href$=".jpeg"], a[href$=".mp4"]`))
        const gallery = links.map(link => link.getAttribute('href'))
        let index = gallery.findIndex(image => image === monurl)
        if (index === 0) {
            index=gallery.length
        }
        loadMedia(gallery[index-1])
    }

    /**
     * @param {string} url URL de l'image
     * @return {HTMLElement}
     */

    buildDOM(url) {
        const dom = document.createElement("div")
        const p = document.createElement("p")
        const title = titre(url)
        p.textContent = title
        dom.classList.add('lightbox')
        
        if (url.substr(-3) === "jpg") {
            dom.innerHTML= `<button class="lightbox_close"><i class="fas fa-times"></i></button>
                <button class="lightbox_next"><i class="fas fa-chevron-right"></i></button>
                <button class="lightbox_prev"><i class="fas fa-chevron-left"></i></button>
                <div class="lightbox_container">
                    <img src="${url}">
                    <p> ${title} </p>
                </div>`
        }

        else if (url.substr(-3) === "mp4") {
            dom.innerHTML= `<button class="lightbox_close"><i class="fas fa-times"></i></button>
                <button class="lightbox_next"><i class="fas fa-chevron-right"></i></button>
                <button class="lightbox_prev"><i class="fas fa-chevron-left"></i></button>
                <div class="lightbox_container">
                    <video controls>
                        <source src="${url}">
                    </video>
                </div>`
        }


        dom.querySelector('.lightbox_close').addEventListener('click', this.close)
        dom.querySelector('.lightbox_next').addEventListener('click', this.next)
        dom.querySelector('.lightbox_prev').addEventListener('click', this.prev)
        return dom
    }


}

function init() {
    const links = Array.from(document.querySelectorAll(`a[href$=".jpg"], a[href$=".jpeg"], a[href$=".mp4"]`))
    const gallery = links.map(link => link.getAttribute('href'))
    console.log(gallery)
    links.forEach(link => link.addEventListener('click', e => {
        e.preventDefault()
        monurl = e.currentTarget.getAttribute("href")
        new Lightbox(monurl, gallery)
    }))
}
    
init()

function loadMedia(url) {
    gall= document.querySelector('.lightbox_container')
    gall.innerHTML = ""
    monurl = url
    console.log(url.substr(-3))
    if (url.substr(-3) === 'jpg') {
        const image = document.createElement("img")
        const p = document.createElement("p")
        image.setAttribute("src", url)
        gall.appendChild(image)
        const title = titre(url)
        p.textContent = title
        gall.appendChild(p)
    }

    else if (url.substr(-3) === 'mp4') {
        const video = document.createElement("video")
        video.setAttribute("src", url)
        video.setAttribute("controls", "")
        gall.appendChild(video)
    }
}


function titre(url) {
    const media1 = media.filter(monmedia => {
        return url.includes(monmedia.image)
    })

    return media1[0].title

}

