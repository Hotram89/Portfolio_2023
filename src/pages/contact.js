const main = document.querySelector("body");

main.innerHTML = `<main>
<nav class="menu">
    <ul>
    <a href="../../index.html">
        <li>HOME
        </li>
        </a>
        <li>ABOUT</li>
        <li>PORTFOLIO</li>
        <li>CONTACT</li>
        
    </ul>
</nav>

<section class="formulaireContact">
<label for="name">Nom</label>
<input type="text" id="name">
<label for="emailAdress">Email</label>
<input type="email" id="emailAdress">
<label for="story">Votre message</label>
<textarea id="story"></textarea>
<input type="submit" id="submitButton">
</section>
<div class="myEmail"> contact@marion-dournel.fr</div>
</main>`;
