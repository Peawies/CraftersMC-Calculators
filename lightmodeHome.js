let lightmode = localStorage.getItem('lightMode');
const toggle = document.getElementById('themeToggle');

const enableLightmode = () => {
    document.body.classList.add('light-mode');
    localStorage.setItem('lightMode', 'enabled');
};

const disableLightmode = () => {
    document.body.classList.remove('light-mode');
    localStorage.setItem('lightMode', 'disabled');
};  

if (lightmode === "enabled") enableLightmode();

toggle.addEventListener("click", () => {
    lightmode = localStorage.getItem('lightMode');
    lightmode !== "enabled" ? enableLightmode() : disableLightmode();
});


