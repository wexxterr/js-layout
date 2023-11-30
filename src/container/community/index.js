import { createElement, createHeader, } from "../../script/layout";

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'page__title', `Ком'юніті`)

page.append(title)

// ===

const TAB_BUTTON_LIST = [
    {
        active: false,
        info: 'База знань'

    },
    {
        active: true,
        info: 'Інформація'
    },
]

const choose = createElement('div', 'choose__block')
TAB_BUTTON_LIST.forEach((params) => {
    const tab = createElement('div', params.active ? 'button tab__button tab__active' : 'button tab__button')
    tab.innerText = params.info
    choose.insertAdjacentElement('beforeend', tab)
})
// return choose
page.append(choose)

const MAIN_INFO = {
    img: '/img/main_image.png',
}

const main = createElement('main', 'main');
page.append(main)

const img = createElement('img', 'main__img');
img.src = MAIN_INFO.img;
main.appendChild(img);

const mainContent = createElement('div', 'main__content')
main.append(mainContent)

const mainContentTitle = createElement('h2', 'main__content--title', 'Що таке база знань?')
mainContent.append(mainContentTitle)

const mainContentParagraph = createElement('p', 'main__content--info', 'Базата от знания е база данни, съдържаща правила за изводи и информация за човешкия опит и знания в дадена предметна област. В самообучаващите се системи базата знания съдържа и информация, която е резултат от решаването на предишни проблеми.')
mainContent.append(mainContentParagraph)

const mainContentButton = createElement('button', 'main__content--button button', `Перейти до ком'юніті у Телеграм`)
main.append(mainContentButton)