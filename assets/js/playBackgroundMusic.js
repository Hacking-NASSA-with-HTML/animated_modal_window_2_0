let backgroundMusicDiv = document.querySelector('.backgroundMusicDiv')
let addToggleModalWindow = document.querySelector('.modal2')

let JoyfulMusic = document.querySelector('.Joyful')
let MysticalMusic = document.querySelector('.Mystical')

let JoyfulMusicSound = new Audio('./assets/media/What-Do-We-Do.mp3')
let MysticalMusicSound = new Audio('./assets/media/My-Jolly-Sailor-Bold.mp3')

let joyfulBackgroundMusic = true
let mysticalBackgroundMusic = true


JoyfulMusic.addEventListener('click', () => {
    if (joyfulBackgroundMusic) {
        backgroundMusicDiv.innerText = 'Joyful Music is playing'
        JoyfulMusicSound.volume = 0.25
        JoyfulMusicSound.play()
        joyfulBackgroundMusic = false
        addToggleModalWindow.classList.remove('openModalWin')
        addToggleModalWindow.classList.add('hideModalWin')
        setTimeout(() => {
            addToggleModalWindow.classList.remove('hideModalWin')
        }, 300)
    } else {
        backgroundMusicDiv.innerText = 'Music is paused'
        JoyfulMusicSound.pause()
        joyfulBackgroundMusic = true
        addToggleModalWindow.classList.remove('openModalWin')
        addToggleModalWindow.classList.add('hideModalWin')
        setTimeout(() => {
            addToggleModalWindow.classList.remove('hideModalWin')
        }, 300)
    }
})

MysticalMusic.addEventListener('click', () => {
    if (mysticalBackgroundMusic) {
        backgroundMusicDiv.innerText = 'Mystical Music is playing'
        MysticalMusicSound.volume = 0.25
        MysticalMusicSound.play()
        mysticalBackgroundMusic = false
        addToggleModalWindow.classList.remove('openModalWin')
        addToggleModalWindow.classList.add('hideModalWin')
        setTimeout(() => {
            addToggleModalWindow.classList.remove('hideModalWin')
        }, 300)
    } else {
        backgroundMusicDiv.innerText = 'Music is paused'
        MysticalMusicSound.pause()
        mysticalBackgroundMusic = true
        addToggleModalWindow.classList.remove('openModalWin')
        addToggleModalWindow.classList.add('hideModalWin')
        setTimeout(() => {
            addToggleModalWindow.classList.remove('hideModalWin')
        }, 300)
    }
})

JoyfulMusicSound.addEventListener('ended', () => {
    backgroundMusicDiv.innerText = 'No Background Music'
    joyfulBackgroundMusic = true
})

MysticalMusicSound.addEventListener('ended', () => {
    backgroundMusicDiv.innerText = 'No Background Music'
    mysticalBackgroundMusic = true
})
