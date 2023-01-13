const root = document.getElementById('root')

function mainPageContent() {
    const renderMainPageContent =
        `
        <div class="container">
            <h1>Modal Window 2.0</h1>
            <h2>for my future Sailor-Welder resume 😎</h2>
            <p>Version 2_0</p>
        </div>
        <div class="buttonWrapperDiv">
            <button type="button" class="button" id="button2">Click To Open Modal Window</button>
        </div>
        <div class="backgroundMusicDiv">No Background Music</div>
    `
    return renderMainPageContent
}

root.insertAdjacentHTML("afterend", mainPageContent())
