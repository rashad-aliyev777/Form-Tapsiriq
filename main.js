const formDiv = document.querySelector("#form")

const username = document.querySelector("#username")
const email = document.querySelector("#email")
const phone = document.querySelector("#phone")
const password = document.querySelector("#password")
const repassword = document.querySelector("#repassword")


// Sehv Funksiyasi

function sehviGoster(sehv,mesaj = "Xeta Var") {
    sehv.className += " is-invalid"
    const bosDiv = sehv.nextElementSibling
    bosDiv.value = mesaj
    bosDiv.className = "bg-danger text-white"
}

// Duz Funksiyasi

function duzuGoster (input) {
    input.className += " is-valid"
}

// if - else username

function loginYoxlanmasi(login) {
    const logineBax = /^[A-Za-z]{4,10}$/
    logineBax.test(login.value.trim())
    ? duzuGoster(login)
    : sehviGoster(login,"Maksimum 4 minimum 10")
}

// if - else Email

function emailinYoxlanmasi (emailInputu) {
    const regularExpression = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    regularExpression.test(emailInputu.value.trim())
    ? duzuGoster(emailInputu) 
    : sehviGoster(emailInputu,"Elektron poct uygun deyil")
}

// if - else Parol

function parolunYoxlanmasi(parol) {
    const parolUcunQeyd = /^(?=.*[A-Z])(?=.*[.\/\\,~*-+])[A-Za-z.\/\\,~*-+]{6,15}$/;
    parolUcunQeyd.test(parol.value.trim())
    ? duzuGoster(parol)
    : sehviGoster(parol,"Minimum 6 maksimum 15 hərf, 1 böyük hərf və 1 bu işarələrdən istifadə edilməlidir (\,~*-+/)")
}

sehviGoster(username,email,parol)
duzuGoster(username,email,parol)