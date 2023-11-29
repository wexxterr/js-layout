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

TAB_BUTTON_LIST.forEach((chooseData) => {
    const choosePage = createElement(
        'div',
        chooseData.active
            ? 'choose--text choose--active'
            : 'choose--text',
    )
    ч
    choose.append(choosePage)
})


// return choose
page.append(choose)
