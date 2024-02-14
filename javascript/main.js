"use strict";

// Variabler
let menuBtnEl = document.querySelector(".menubtn");
let containerEl = document.querySelector("div");
let accordionEl = document.getElementsByClassName("accordion");
let returnEl = document.getElementById("return-box");
let returnCheckboxEl = document.getElementById("return");
let freqBoxEl = document.getElementById("freq-box");
let freqCheckboxEl = document.getElementById("freq");
let weeklyFreqEl = document.getElementById("weekly-freq");
let weeklyCheckboxEl = document.getElementById("weekly");
let monthlyFreqEl = document.getElementById("monthly-freq");
let monthlyCheckboxEl = document.getElementById("monthly");
let returnIconEl = document.getElementById("return-icon");
let freqIconEl = document.getElementById("freq-icon");
let priceFormEl = document.getElementById("booking");
let priceEl = document.getElementById("price");
let i;

// Lägger till händelselyssnare för varje accordion-element vid klick
for (i = 0; i < accordionEl.length; i++) {
    accordionEl[i].addEventListener("click", displayText);
}

// Händelselyssnare vid klick och förändring som anropar funktioner
menuBtnEl.addEventListener("click", transformMenu);
menuBtnEl.addEventListener("click", dropDownMenu);

// Funktion för att växla mellan klassen cross samt opacity vid klick.
// Hämtar element genom class.
function transformMenu() {
    let menuiconEl = document.querySelector(".menuicon")
    menuiconEl.classList.toggle("cross");
    containerEl.classList.toggle("opacity");
}

// Funktion för att besöka boka färdtjänst-sidan
function goToBooking() {
    window.location.href = "booking.html";
}

// Funktion för att besöka mina sidor-sidan
function goToMySite() {
    window.location.href = "mysite.html";
}

// Funktion för att besöka mina bokade resor-sidan
function goToMyTravels() {
    window.location.href = "mytravels.html";
}

// Funktion för att besöka logga in-sidan
function goToLogIn() {
    window.location.href = "login.html";
}

// Funktion för att besöka mina bokade resor-sidan
function goToMyTravels() {
    window.location.href = "mytravels.html";
}

// Funktion för att besöka ändra resor-sidan
function goToChangeTravels() {
    window.location.href = "changetravels.html";
}

// Funktion för att besöka ändra resa 1
function goToChangeTravel1() {
    window.location.href = "change1.html";
}

// Funktion för att besöka ändra resa 2
function goToChangeTravel2() {
    window.location.href = "change2.html";
}

// Funktion för att besöka avboka resa-sidan
function goToUnbookTravels() {
    window.location.href = "unbooktravels.html";
}

// Funktion för att besöka avboka resa 1
function goToUnbookTravel1() {
    window.location.href = "unbook1.html";
}

// Funktion för att besöka avboka resa 2
function goToUnbookTravel2() {
    window.location.href = "unbook2.html";
}

// Funktion för att besöka bekräftelse avbokad resa 1
function goToUnbookConfirm1() {
    window.location.href = "confirmunbook1.html";
}

// Funktion för att besöka bekräftelse avbokad resa 2
function goToUnbookConfirm2() {
    window.location.href = "confirmunbook2.html";
}

// Funktion för att växla mellan att visa och dölja länkar i navigering när hamburgermenyn klickas.
function dropDownMenu() {
    // Hämtar element genom ID till länkarna.
    let mobilenavEl = document.getElementById("mobilenav");
    // Hämtar element genom ID till menytext.
    let menutextEl = document.getElementById("menutext");
    let style = window.getComputedStyle(mobilenavEl);
    // Kontroll om menyn visas som flex, döljer länkar & visar menytext
    if (style.display === "flex") {
        mobilenavEl.style.display = "none";
        menutextEl.innerHTML = "MENY";
    } else {
        // Om meny inte visas som flex (display: none), visar flex vid klick och döljer menytext
        mobilenavEl.style.display = "flex";
        menutextEl.innerHTML = "STÄNG";
    }
}


// Funktion för att visa text uner knapp
function displayText() {
    // Hämtar nästa element efter knappen, som är svaret
    let answer = this.nextElementSibling;

    // Om svaret är synligt, döljs den vid klick, annars visas den. Byter ikon och bakgrundsfärg vid klick.
    if (answer.style.display === "block") {
        answer.style.display = "none";
        this.querySelector("em").classList.remove("fa-angle-up");
        this.querySelector("em").classList.add("fa-angle-down");
        this.style.backgroundColor = "#0074CC";
        // Ändrar aria expanded till false vid stängd knapp
        this.setAttribute("aria-expanded", "false");
    } else {
        answer.style.display = "block";
        this.querySelector("em").classList.remove("fa-angle-down");
        this.querySelector("em").classList.add("fa-angle-up");
        this.style.backgroundColor = "#005BAF";
        // Ändrar aria expanded till true vid öppnad knapp
        this.setAttribute("aria-expanded", "true");
    }
}

// Funktion för att visa/dölja "return-box" baserat på checkboxens status
function displayReturn() {
    if (returnCheckboxEl.checked) {
        returnEl.style.display = "block";
    } else {
        returnEl.style.display = "none";
    }
}

// Funktion för att visa/dölja "frekvens-box" baserat på radioboxens status
function displayFreq() {
    if (freqCheckboxEl.checked) {
        freqBoxEl.style.display = "block";
    } else {
        freqBoxEl.style.display = "none";
    }
}

// Funktion för att visa/dölja alterativ för veckovis frekvens baserat på checkboxens status
function displayWeeklyFreq() {
    // Döljer alternativen för månadsvis när veckovis är vald
    monthlyFreqEl.style.display = "none";

    if (weeklyCheckboxEl.checked) {
        weeklyFreqEl.style.display = "block";
    } else {
        weeklyFreqEl.style.display = "none";
    }
}

// Funktion för att visa/dölja alterativ för månadsvis frekvens baserat på checkboxens status
function displayMonthlyFreq() {

    // Döljer alterantiven för veckovis när månadsvis är vald
    weeklyFreqEl.style.display = "none";

    if (monthlyCheckboxEl.checked) {
        monthlyFreqEl.style.display = "block";
    } else {
        monthlyFreqEl.style.display = "none";
    }
}

// Funktion för att kontrollera e-post + lösen vid inlogg och skicka till mina sidor
function loginUser() {

    // Hämtar formuläret och input-fält av lösen
    let formEl = document.getElementById("loginform");
    let passwordEl = document.getElementById("password");

    // Kör den inbyggda valideringen för formulär
    if (formEl.checkValidity()) {

        // Hämta värden från input av lösenord.
        let passwordValueEl = passwordEl.value;

        // Kontrollerar om lösen är ifyllt korrekt (innehåller minst 6 tecken)
        if (passwordValueEl.length >= 6) {
            // Skickar isåfall till mysite.html
            window.location.href = "mysite.html";
        } else {
            // Meddelar användaren om att fylla korrekt lösenord
            alert("Fyll i korrekt lösenord (minst 6 tecken) för att logga in.");
        }
    } else {
        // Om den inbyggda validering misslyckas visas felmeddelanden
        formEl.reportValidity();
    }
}

// Funktion för att boka resa
function submitBooking() {

    // Hämtar formuläret
    let formEl = document.getElementById("booking");

    // Kör den inbyggda valideringen för att se att alla oblogatoriska fält är ifyllda
    if (formEl.checkValidity()) {
        // Skickar till bekräftelsesida isåfall
        window.location.href = "confirm.html";
    } else {
        // Visar felmeddelanden annars
        formEl.reportValidity();
    }
}

// Funktion för att ändra resa1
function changeBooking1() {

    // Hämtar formuläret
    let formEl = document.getElementById("booking");

    // Kör den inbyggda valideringen för att se att alla oblogatoriska fält är ifyllda
    if (formEl.checkValidity()) {
        // Skickar till bekräftelsesida isåfall
        window.location.href = "confirmchange1.html";
    } else {
        // Visar felmeddelanden annars
        formEl.reportValidity();
    }
}


// Funktion för att ändra resa2
function changeBooking2() {

    // Hämtar formuläret
    let formEl = document.getElementById("booking");

    // Kör den inbyggda valideringen för att se att alla oblogatoriska fält är ifyllda
    if (formEl.checkValidity()) {
        // Skickar till bekräftelsesida isåfall
        window.location.href = "confirmchange2.html";
    } else {
        // Visar felmeddelanden annars
        formEl.reportValidity();
    }
}

function displayPrice() {
    // Om alla obligatoriska fält är ifyllda (validering godkänd), visas kostnad annars inte
    if (priceFormEl.checkValidity()) {
        // Visa priset
        priceEl.style.display = "block";
    } else {
        // Dölj priset om validering inte är godkänd
        priceEl.style.display = "none";
    }
}

// Funktion för att skicka meddelande i kontaktformulär
function submitMessage() {

    // Hämtar formuläret
    let formEl = document.getElementById("contactform");

    // Kör den inbyggda valideringen för att se att alla oblogatoriska fält är ifyllda
    if (formEl.checkValidity()) {
        // Skickar till bekräftelsesida isåfall
        window.location.href = "confirmcontact.html";
    } else {
        // Visar felmeddelanden annars
        formEl.reportValidity();
    }
}

// Funktion för att lägga till händelselyssnare på checkboxar för returresa och återkommande resa samt dolt pris-element
function addCheckboxListeners() {
    returnCheckboxEl.addEventListener("change", displayReturn);
    freqCheckboxEl.addEventListener("change", displayFreq);
    weeklyCheckboxEl.addEventListener("change", displayWeeklyFreq);
    monthlyCheckboxEl.addEventListener("change", displayMonthlyFreq);
    priceFormEl.addEventListener("change", displayPrice);
}

// Hämtar aktuell sökväg
let currentPage = window.location.pathname;

// Om aktuell sökväg slutar med bokningssidan eller någon av ändra bokning så körs funktionen för att lägga till händelselyssnare
// Kör även funktion för att lägga till kalender och time-picker
if (currentPage.endsWith('/booking.html') || currentPage.endsWith('/change1.html') || currentPage.endsWith('/change2.html')) {
    addCheckboxListeners();

    // Funktion för att inkludera jQuerys date-picker till avresa
    $(document).ready(function () {
        $("#date").datepicker({
            showOn: "focus",
            dateFormat: 'yy-mm-dd'
        });

        // Inkluderar den svenska filen för timepicker
        $.timepicker.setDefaults($.timepicker.regional['sv']);

        // Lägger till jQuerys time-picker
        $("#time").timepicker({
            timeFormat: 'HH:mm',  // 24-timmars format
            controlType: 'select',  // Visar en rullista för timmar och minuter
            oneLine: true,  // Visar tidväljaren på en enda rad
            stepMinute: 5 // Steg på 5 minuters intervall för minuterna
        });
    });

    // Anropar "visa pris-funktionen" när tiden ändras
    $(document).on('change', '#time', function () {
        displayPrice();
    });

    // Funktion för att inkludera jQuerys date-picker till returresa
    $(document).ready(function () {
        $("#date2").datepicker({
            showOn: "focus",
            dateFormat: 'yy-mm-dd'
        });

        // Inkluderar den svenska filen för timepicker
        $.timepicker.setDefaults($.timepicker.regional['sv']);

        // Lägger till jQuerys time-picker
        $("#time2").timepicker({
            timeFormat: 'HH:mm',  // 24-timmars format
            controlType: 'select',  // Visar en rullista för timmar och minuter
            oneLine: true,  // Visar tidväljaren på en enda rad
            stepMinute: 5  // Steg på 5 minuters intervall för minuterna
        });
    });
}