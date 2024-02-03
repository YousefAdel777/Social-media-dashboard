let toggle = document.getElementById("toggle");

if (localStorage.theme === "dark") {
    document.documentElement.classList.add("dark");
}

toggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
        localStorage.theme = "dark";
    }
    else {
        localStorage.theme = "light";
    }
});