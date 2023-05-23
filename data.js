const adventures = [
   
    lostMine = {
        name : 'Lost Mile',
        length : '3 miles',
        difficulty : 'Moderate',
        type : 'Mountains',
        img : "./assets/3481-02.jpg"
    },
    window = {
        name : 'Window View',
        length : '2.75 miles',
        difficulty : 'Moderate',
        type : 'Mountains',
        img : "./assets/3481-02.jpg"
    },
    dogCanyon = {
        name : 'Dog Canyon ',
        length : '2.5 miles',
        difficulty : 'Easy',
        type : 'Desert', 
        img : "./assets/3481-32.jpg"
    },
    balancedRock = {
        name : 'Balanced Rock',
        length : '1 mile',
        difficulty : 'Moderate',
        type : 'Desert',
        img : "./assets/3481-32.jpg"
    },
    hotSprings = {
        name : 'Hot Springs',
        length : '0.25 miles',
        difficulty : 'Easy',
        type : 'River',
        img : "./assets/3482-30.jpg"
    },
    SantaElenaCanyon = {
        name: 'Santa Elena Canyon',
        length: '0.75 miles',
        difficulty: 'Moderate',
        type : 'River',
        img : "./assets/3482-30.jpg"
    },
    
]

const trail = document.querySelector('.trail-info')

const createCards = () => {
    for(let card of adventures) {
        // Variables
        const infoWrapper = document.createElement('div')
        const infoTop = document.createElement('div')
        const title = document.createElement('div');
        const plusBtn = document.createElement('i');
        const xBtn = document.createElement('i')

        // Attributes
        infoWrapper.setAttribute('class', 'info-wrapper')
        infoTop.setAttribute('class', 'trail-info-top')
        title.setAttribute('class', 'trail-title');
        plusBtn.setAttribute('class', 'fa-solid fa-plus')

        // Content
        title.textContent = card.name

        // Append
        infoTop.append(title);
        infoTop.append(plusBtn);
        infoWrapper.append(infoTop)
        trail.append(infoWrapper) 
        
        plusBtn.addEventListener('click', function() {
            infoWrapper.classList.add('isOpen')
            plusBtn.remove();
            const xBtn = document.createElement('i')
            xBtn.setAttribute('class', 'fa-solid fa-x')
            infoTop.append(xBtn)
            expandInfo(infoWrapper, card, xBtn, plusBtn, infoTop)
           
        })

       
    }
}

const expandInfo = (el , card, button, open,top ) => {
    const bottom = document.createElement('div')
    const img = document.createElement('img')
    const infoText = document.createElement('div')
    const infoButton = document.createElement('button')

    bottom.setAttribute('class', 'trail-info-bottom')
    img.setAttribute('src', card.img)
    img.setAttribute('class', 'content-img')
    infoText.setAttribute('class','info-text')
    infoButton.setAttribute('class', 'info-button')

    infoButton.textContent = 'Add To Your Trip'

   
    bottom.append(img)
    bottom.append(infoText)
    el.append(bottom)
   
    createText(card,infoText)
    infoText.append(infoButton)
    
    

    button.addEventListener('click', function() {
        el.classList.remove('isOpen');  
        bottom.remove();
        button.remove()
        top.append(open)
    })
}

const createText = (el,container) => {
    const length = document.createElement('h4')
    const diff = document.createElement('h4')
    const type = document.createElement('h4')

    length.textContent = `Length : ${el.length}`
    diff.textContent = `Difficulty : ${el.difficulty}`
    type.textContent = `Trail Type : ${el.type}`

    container.append(length)
    container.append(diff)
    container.append(type)
}




createCards();

