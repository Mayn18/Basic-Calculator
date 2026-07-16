const input = document.querySelector("#text-field");

input.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        const inputValue = input.value;
        console.log(inputValue);
    }
}
);




