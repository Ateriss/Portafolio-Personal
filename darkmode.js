let darkMode = localStorage.getItem("darkmode");

const darkModeToggle = document.querySelector("#hide-checkbox");

const darkModeON = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", "enabled");
};

const darkModeOff = ()=> {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", null);

};

darkModeToggle.addEventListener("change", () =>{
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled"){
        darkModeON();
    }
    else{
        darkModeOff();
    }
})