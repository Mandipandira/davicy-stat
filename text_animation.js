let text =document.querySelector(".text");

let string = text.textContent;

let arr =string.split("");

text.innerHTML = "";

arr.forEach((char) => {
    let spanTag = `<span class="split-char">${char}</span>`;

    text.insertAdjacentHTML("beforeend", spanTag);
});