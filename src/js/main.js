let toggle = document.getElementById("toggle");

if (localStorage.theme === "light") {
    document.documentElement.classList.remove("dark");
}

toggle.addEventListener("click", () => switchTheme())

document.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
        event.preventDefault();
        switchTheme();
    }
});

function switchTheme () {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
        localStorage.theme = "dark";
    }
    else {
        localStorage.theme = "light";
    }
}