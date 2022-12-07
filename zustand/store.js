import create from "zustand";

const store = create(set => ({
    settingContext: false,
    changeSettingsContext: ()=> set(state => ({settingsContext: state.settingsContext ? false : true})),
    closeSettings: ()=> set(state => ({settingsContext: false})),
    
    chromeContext: false,
    changeChromeContext: ()=> set(state => ({chromeContext: state.chromeContext ? false : true})),
    closeChrome: ()=> set(state => ({chromeContext: false})),

    notepadContext: false,
    changeNotepadContext: ()=> set(state => ({notepadContext: state.notepadContext ? false : true})),
    closeNotepad: ()=> set(state => ({notepadContext: false})),
    
    menuContext: false,
    changeMenuContext: ()=> set(state => ({menuContext: state.menuContext ? false : true})),

    wifiBMenuContext: false,
    changeWifiBtMenuContext: ()=> set(state => ({wifiBMenuContext: state.wifiBMenuContext ? false : true})),
}))


export default store