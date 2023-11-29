export const createElement = (tag, className, text) => {
    const elem = document.createElement(tag)

    if (className) {
        elem.className = className
    }

    if (text) {
        elem.innerHTML = text
    }

    return elem
}

const HEADER_BUTTON_LIST = [
    {
        src: '/svg/arrow_back.svg',
    },
    {
        src: '/img/profile_icon.png',
    },
]

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

export const createHeader = () => {
    const header = createElement('header', 'header')

    HEADER_BUTTON_LIST.forEach((params) => {
        const button = createElement('button', 'button')

        const img = createElement('img')

        Object.entries(params).forEach(([key, value]) => {
            img[key] = value
        })

        button.insertAdjacentElement('beforeend', img)

        header.insertAdjacentElement('beforeend', button)
    })

    return header
}