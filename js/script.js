const flags = {
  ENUS: "./img/Flag.png",
  UKR: "./img/Flag_UKR.png",
  POLISH: "./img/Flag_POLISH.png",
};
const translations = {
  ENUS: {
    home: "Home",
    caseStudies: "Case Studies",
    aboutUs: "About Us",
    careers: "Careers",
    whatWeDo: "What We Do",
    contact: "Contact",
    page__title: "We design experiences that move businesses to the future.",
    about__us: "It's also about creating the best work environment.",
    academi__txt: "Sharing knowledge and growing as a community.",
    busines: "Your business will never be the same",
  },
  UKR: {
    home: "Головна",
    caseStudies: "Кейси",
    aboutUs: "Про нас",
    careers: "Кар'єра",
    whatWeDo: "Що ми робимо",
    contact: "Контакти",
    page__title: "Ми створюємо досвід, який переносить бізнес у майбутнє.",
    about__us: "Це також про створення найкращого робочого середовища.",
    academi__txt: "Ділимося знаннями та розвиваємося як спільнота.",
    busines: "Ваш бізнес більше ніколи не буде таким, як раніше",
  },
  POLISH: {
    home: "Strona główna",
    caseStudies: "Studia przypadków",
    aboutUs: "O nas",
    careers: "Kariera",
    whatWeDo: "Co robimy",
    contact: "Kontakt",
    page__title:
      "Projektujemy doświadczenia, które przenoszą biznes w przyszłość.",
    about__us: "Chodzi również o tworzenie najlepszego środowiska pracy.",
    academi__txt: "Dzielimy się wiedzą i rozwijamy jako społeczność.",
    busines: "Twój biznes nigdy nie będzie taki sam",
  },
};
document
  .querySelector(".header__nav-select")
  .addEventListener("change", function () {
    const selectedLang = this.value;
    const flagImg = document.querySelector(".header__flag-img");
    flagImg.src = flags[selectedLang];
  });
function updateLanguage(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
document
  .querySelector(".header__nav-select")
  .addEventListener("change", function () {
    const selectedLang = this.value;
    updateLanguage(selectedLang);
  });

document.addEventListener("DOMContentLoaded", () => {
  const defaultLang = "ENUS";
  updateLanguage(defaultLang);
});
