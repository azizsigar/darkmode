const toggle = document.getElementById("icon");
const texts = document.getElementById('text');
toggle.addEventListener('click', function() {
    if (toggle.innerText === "dark_mode") { // Doğru karşılaştırmayı yapmak için === kullanmalısınız.
        toggle.innerText = "light_mode";
        texts.classList=('darkmode');
    } else {
        toggle.innerText = "dark_mode"; // Eğer dark_mode değilse, dark_mode olarak ayarlayın.
        texts.classList=('ligthmode')
    }
});
