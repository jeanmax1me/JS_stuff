function myCipher(str) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const replacements = {
        A: "KfGY",
        B: "hHue",
        C: "RePzu",
        D: "C",
        E: "r",
        F: "fggdf",
        G: "eRfs",
        H: "cEdg",
        I: "Zpd",
        J: "os",
        L: "fl",
        M: "n",
        X: "a",
        Z: "pc",
        P: "jliA",
        O: "uWu",
        S: "sSp",
        U: "cs",
        N: "M"
        // Add more mappings as needed
    };

    let result = "";

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const upperChar = char.toUpperCase();

        if (replacements.hasOwnProperty(upperChar)) {
            // Replace the letter with the corresponding value from the replacements object
            result += replacements[upperChar];
        } else {
            // Preserve non-alphabetic characters
            result += char;
        }
    }

    return result;
}

console.log(myCipher("test"));
console.log(myCipher("voici un exemple lol"));
console.log(myCipher("encrypte ceci puis on verra bieng"));
console.log(myCipher("Heureusement, le jour suivant, le ciel était bleu et j’ai pu profiter de mon dernier jour de vacances en France. Je suis allé boire un café en terrasse, j’ai mangé dans un bon petit restau et l’après-midi, j’ai écrit des cartes postales à tous mes amis."))