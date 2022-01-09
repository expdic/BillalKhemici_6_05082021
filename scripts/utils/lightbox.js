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
        document.addEventListener("keyup", this.onKeyUp);
    }


    /**
     * 
     * @param {KeyboardEvent} e 
     */
    onKeyUp(e) {
        if (e.key === "Escape") {
            console.log(e)
            document.querySelector('.lightbox').classList.add("closer");
            window.setTimeout(() => {
                document.querySelector('.lightbox').parentElement.removeChild(document.querySelector('.lightbox'))}
            )
        }

        else if (e.key === "ArrowRight") {
            const links = Array.from(document.querySelectorAll(`a[href$=".jpg"], a[href$=".jpeg"], a[href$=".mp4"]`))
            const gallery = links.map(link => link.getAttribute('href'))
            let index = gallery.findIndex(image => image === monurl)
            if (index === gallery.length - 1) {
                index=-1
            }
            loadMedia(gallery[index+1])
        }

        else if (e.key === "ArrowLeft") {
            e.preventDefault()
            const links = Array.from(document.querySelectorAll(`a[href$=".jpg"], a[href$=".jpeg"], a[href$=".mp4"]`))
            const gallery = links.map(link => link.getAttribute('href'))
            let index = gallery.findIndex(image => image === monurl)
            if (index === 0) {
                index=gallery.length
            }
            loadMedia(gallery[index-1])
        }
    }





    /**
     * Ferme la lightbox
     * @param {MouseEvent | KeyboardEvent} e
     */
    close(e) {
        e.preventDefault()
        console.log(this.parentElement)
        this.parentElement.classList.add("closer");
        window.setTimeout(() => {
            this.parentElement.parentElement.removeChild(this.parentElement)}
        )
    }

    /**
     * @param {MouseEvent | KeyboardEvent} e
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
     * 
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
        dom.classList.add('lightbox')
        const buttonClose = document.createElement("button")
        buttonClose.className = "lightbox_close"
        const buttonPrev = document.createElement("button")
        buttonPrev.className = "lightbox_prev"
        const buttonNext = document.createElement("button")
        buttonNext.className = "lightbox_next"
        const iClose = document.createElement("i")
        iClose.className = "fas fa-times"
        const iPrev = document.createElement("i")
        iPrev.className = "fas fa-chevron-left"
        const iNext = document.createElement("i")
        iNext.className = "fas fa-chevron-right"
        const divCont = document.createElement("div")
        divCont.className = "lightbox_container"
        buttonClose.appendChild(iClose)
        buttonPrev.appendChild(iPrev)
        buttonNext.appendChild(iNext)
        dom.appendChild(buttonClose)
        dom.appendChild(buttonNext)
        dom.appendChild(buttonPrev)
        
        if (url.substr(-3) === "jpg") {
            const title = titre(url)
            const Img = document.createElement("img")
            Img.setAttribute("src", url)
            const P = document.createElement("p")
            P.textContent = title
            divCont.appendChild(Img)
            divCont.appendChild(P)

        }

        else if (url.substr(-3) === "mp4") {
            const Vid = document.createElement("video")
            Vid.setAttribute("src", url)
            Vid.setAttribute("controls", "")
            divCont.appendChild(Vid)
            
        }

        dom.appendChild(divCont)


        dom.querySelector('.lightbox_close').addEventListener('click', this.close)
        dom.querySelector('.lightbox_next').addEventListener('click', this.next)
        dom.querySelector('.lightbox_prev').addEventListener('click', this.prev)
        return dom
    }


    

}

function init() {
    const links = Array.from(document.querySelectorAll(`a[href$=".jpg"], a[href$=".mp4"]`))
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
        console.log(title)
    }

    else if (url.substr(-3) === 'mp4') {
        const video = document.createElement("video")
        const p = document.createElement("p")
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

