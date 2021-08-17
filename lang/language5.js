function cookieLang() {

console.log(document.cookie)
if (document.cookie.split(';').some((item) => item.includes('lang=en'))) {
    document.getElementById("language").value = "en";
    document.getElementById("corrections").innerHTML = "Fixed a problem with the background when zooming out!";
    document.getElementById("javascript").innerHTML = "Javascript test";
    document.getElementById("changelog").innerHTML = "Added the changelog";
    document.getElementById("kevcoorp").innerHTML = "Removed \"KevCoorp\" in Contact Me";
    document.getElementById("version").innerHTML = "Removed the version of the website in About me";
    document.getElementById("navigation").innerHTML = "Changed the style of the navigation bar";
    document.getElementById("background").innerHTML = "The changelog's background is now grey.";
    document.getElementById("navigation2").innerHTML = "Changed the navigation bar's colour to translucent green.";
    document.getElementById("myself").innerHTML = "The presentation of myself has been changed.";
    document.getElementById("kevcoorp2").innerHTML = "\"KevCoorp\" is now placed below the site build.";
    document.getElementById("99").innerHTML = "Build 99 Translation Update";
    document.getElementById("english").innerHTML = "English translation of the site";
    document.getElementById("design").innerHTML = "Some design changes";
    document.getElementById("comingsoon").innerHTML = "<b>More updates are planned in the future.</b>";
    document.getElementById("99.1").innerHTML = "Build 99.1 Minor update";
    document.getElementById("navigation3").innerHTML = "Removed the underlined text";
    document.getElementById("correction2").innerHTML = "Fixed a translation problem";
} else if (document.cookie.split(';').some((item) => item.includes('lang=fr'))) {
    document.getElementById("corrections").innerHTML = "Corrections d'un problème de fond-d'écran lorsqu'on dé-zoome";
    document.getElementById("javascript").innerHTML = "Test de Javascript (Dans le code uniquement)";
    document.getElementById("changelog").innerHTML = "Ajout d'une catégorie \"Changelog\"";
    document.getElementById("kevcoorp").innerHTML = "Suppresion de \"KevCoorp\" dans la section \"Me contactez\"";
    document.getElementById("version").innerHTML = "Suppresion de la version du site dans la section \"A propos\"";
    document.getElementById("navigation").innerHTML = "Changement du style de la barre de navigation.";
    document.getElementById("background").innerHTML = "Le Background utilisé dans le changelog a était remplaçé par un fond gris.";
    document.getElementById("navigation2").innerHTML = "La Barre de navigation change encore une fois de couleur pour passer au vert transparent.";
    document.getElementById("myself").innerHTML = "La présentation de moi-meme à était changé.";
    document.getElementById("kevcoorp2").innerHTML = "L'emplacement de \"KevCoorp\" ce trouve en dessous des builds du site.";
    document.getElementById("99").innerHTML = "Build 99 Traduction Update";
    document.getElementById("english").innerHTML = "Traduction en anglais du site";
    document.getElementById("design").innerHTML = "Quelques changements de conception";
    document.getElementById("comingsoon").innerHTML = "<b>D'autres Builds sont prévus prochainnement.</b>";
    document.getElementById("99.1").innerHTML = "Mise à jour mineure Build 99.1";
    document.getElementById("navigation3").innerHTML = "Le texte souligné en rouge à était supprimét";
    document.getElementById("correction2").innerHTML = "Correction d'un problème de traduction";
}
}
function langSwitch() {
    var langId = document.getElementById("language").value;
    document.cookie = `lang=${langId};`
    if (document.cookie.split(';').some((item) => item.includes('lang=en'))) {
        document.getElementById("corrections").innerHTML = "Fixed a problem with the background when zooming out!";
        document.getElementById("javascript").innerHTML = "Javascript test";
        document.getElementById("changelog").innerHTML = "Added the changelog";
        document.getElementById("kevcoorp").innerHTML = "Removed \"KevCoorp\" in Contact Me";
        document.getElementById("version").innerHTML = "Removed the version of the website in About me";
        document.getElementById("navigation").innerHTML = "Changed the style of the navigation bar";
        document.getElementById("background").innerHTML = "The changelog's background is now grey.";
        document.getElementById("navigation2").innerHTML = "Changed the navigation bar's colour to translucent green.";
        document.getElementById("myself").innerHTML = "The presentation of myself has been changed.";
        document.getElementById("kevcoorp2").innerHTML = "\"KevCoorp\" is now placed below the site build.";
        document.getElementById("99").innerHTML = "Build 99 Translation Update";
        document.getElementById("english").innerHTML = "English translation of the site";
        document.getElementById("design").innerHTML = "Some design changes";
        document.getElementById("comingsoon").innerHTML = "<b>More updates are planned in the future.</b>";
        document.getElementById("99.1").innerHTML = "Build 99.1 Minor update";
        document.getElementById("navigation3").innerHTML = "Removed the underlined text";
        document.getElementById("correction2").innerHTML = "Fixed a translation problem";
    } else if (document.cookie.split(';').some((item) => item.includes('lang=fr'))) {
        document.getElementById("corrections").innerHTML = "Corrections d'un problème de fond-d'écran lorsqu'on dé-zoome";
        document.getElementById("javascript").innerHTML = "Test de Javascript (Dans le code uniquement)";
        document.getElementById("changelog").innerHTML = "Ajout d'une catégorie \"Changelog\"";
        document.getElementById("kevcoorp").innerHTML = "Suppresion de \"KevCoorp\" dans la section \"Me contactez\"";
        document.getElementById("version").innerHTML = "Suppresion de la version du site dans la section \"A propos\"";
        document.getElementById("navigation").innerHTML = "Changement du style de la barre de navigation.";
        document.getElementById("background").innerHTML = "Le Background utilisé dans le changelog a était remplaçé par un fond gris.";
        document.getElementById("navigation2").innerHTML = "La Barre de navigation change encore une fois de couleur pour passer au vert transparent.";
        document.getElementById("myself").innerHTML = "La présentation de moi-meme à était changé.";
        document.getElementById("kevcoorp2").innerHTML = "L'emplacement de \"KevCoorp\" ce trouve en dessous des builds du site.";
        document.getElementById("99").innerHTML = "Build 99 Traduction Update";
        document.getElementById("english").innerHTML = "Traduction en anglais du site";
        document.getElementById("design").innerHTML = "Quelques changements de conception";
        document.getElementById("comingsoon").innerHTML = "<b>D'autres Builds sont prévus prochainnement.</b>";
        document.getElementById("99.1").innerHTML = "Mise à jour mineure Build 99.1";
        document.getElementById("navigation3").innerHTML = "Le texte souligné en rouge à était supprimét";
        document.getElementById("correction2").innerHTML = "Correction d'un problème de traduction";
    }
}
