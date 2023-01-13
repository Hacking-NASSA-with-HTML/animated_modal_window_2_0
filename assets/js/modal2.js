const button2 = document.getElementById('button2')
button2.addEventListener('click', () => handleOpenModal())
// let addToggleModalWindow = document.querySelector('.modal2')


function renderModal() {
    const renderedDivModal2 =
        `
        <div class='modal2'>
            <div class='modal-content'>                              
                <div class="modalHeader">
                    <span class="modalTitle">Choose the Music</span>
                    <span class='close-modal2'>X</span>
                </div>
                <div class="modalContent">
                    <p class="Joyful">Joyful Music</p>
                    <p class="Mystical">Mystical Music</p>
                </div>
            </div>
        </div>
    `
    return renderedDivModal2
}
root.insertAdjacentHTML("afterend", renderModal())


function handleOpenModal() {
    addToggleModalWindow.classList.add('openModalWin')

    const closeModalButton = document.querySelector('.close-modal2')
    closeModalButton.addEventListener('click', () => {
        addToggleModalWindow.classList.remove('openModalWin')
        addToggleModalWindow.classList.add('hideModalWin')
        setTimeout(() => {
            addToggleModalWindow.classList.remove('hideModalWin')
        }, 300)
    })
}
