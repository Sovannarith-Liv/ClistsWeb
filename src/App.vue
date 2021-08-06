<template>

  <header>
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <a class="navbar-brand" href="/">
          <div class="d-flex align-items-end bd-highlight mb-3">
            <div><img src="./assets/Clists_logo.png" class="logo me-0" alt="" /></div>
            <div>
              <h1 class="title__logo m-4 p-0">
                <span>Clists Cloud Company</span>
              </h1>
		<div class="elfsight-app-a0a0ef20-57c0-4ab1-b631-6633c94f002e"></div>
            </div>
          </div>
        </a>
        <button
          id="button"
          class="navbar-toggler m-0 p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="uil uil-apps nav__toggle"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="me-auto"></div>
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item mx-2">
              <a class="nav-link active" aria-current="page" href="/">{{
                $t("home")
              }}</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" aria-current="page" href="/services">{{
                $t("services")
              }}</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#aboutus">{{ $t("about_us") }}</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#contactus">{{ $t("contact_us") }}</a>
            </li>
            <li class="nav-item dropdown">
              <button
                class="btn dropdown-toggle"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <flag :iso="langflag" />
              </button>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <button @click="changeLanguage('en')" class="dropdown-item">
                    <flag iso="us" /> English
                  </button>
                </li>
                <li>
                  <button @click="changeLanguage('kh')" class="dropdown-item">
                    <flag iso="kh" /> ខ្មែរ
                  </button>
                </li>
                <li>
                  <button @click="changeLanguage('jp')" class="dropdown-item">
                    <flag iso="jp" /> Japanese
                  </button>
                </li>
              </ul>
            </li>
            <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="li" :title="$t('switch_day_night')" >
              <button id="button" class="btn p-0" @click="changeTheme()">
                <i class="uil uil-moon change-theme" id="theme-button"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <main>
    <router-view />
  </main>

  <footer class="footer">
    <div data-aos="fade-up" class="container py-4">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title footer__title">
                <span>Clists Company</span>
              </h3>
              <p class="card-text footer__subtitle pt-4">
                {{ $t("company__subtitle") }}
              </p>
              <p class="card-text footer__subtitle">
                {{ $t("company__subtitle__1") }}
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title footer__title">{{ $t("more_on_coin") }}</h5>
              <p class="card-text footer__subtitle pt-4">
                {{ $t("more_on_coin__subtitle") }}
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title footer__title">
                {{ $t("connect_with_us") }}
              </h5>
              <div class="card-text pt-4">
                <ul class="footer__links">
                  <li>
                    <a href="/">{{ $t("home") }}</a>
                  </li>
                  <li class="mt-2">
                    <a href="/services">{{ $t("services") }}</a>
                  </li>
                  <li class="mt-2">
                    <a href="/#aboutus">{{ $t("about_us") }}</a>
                  </li>
                  <li class="mt-2">
                    <a href="/#contactus">{{ $t("contact_us") }}</a>
                  </li>
                  <li class="mt-2">
                    <a href="/#ourpartners">{{ $t("our_partners") }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="contactus" class="col-lg-3 col-md-6 col-sm-6 col-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title footer__title">{{ $t("contact_us") }}</h5>
              <div class="row pt-4">
                <div class="col-12 my-2">
                  <a href="tel:+85577705982" target="_blank" class="card">
                    <div class="row align-items-center">
                      <div class="col-2 text-center">
                        <i class="uil uil-phone contact__icon"></i>
                      </div>
                      <div class="col-10">
                        <!-- <h3 class="card-title contact__title">Call Me</h3> -->
                        <h6 class="card-subtitle contact__subtitle">
                          +855 77 705 982
                        </h6>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-12 my-2">
                  <a
                    href="mailto:kimsereyroath18@kit.edu.kh?subject=Coin&body=Message"
                    target="_blank"
                    class="card"
                  >
                    <div class="row align-items-center">
                      <div class="col-2 text-center">
                        <i class="uil uil-envelope contact__icon"></i>
                      </div>
                      <div class="col-10">
                        <h6 class="card-subtitle contact__subtitle">
                          kimsereyroath18@kit.edu.kh
                        </h6>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="col-12 my-2">
                  <a
                    href="https://www.facebook.com/sereyroath21"
                    target="_blank"
                    class="card"
                  >
                    <div class="row align-items-center">
                      <div class="col-2 text-center">
                        <i class="uil uil-facebook-f contact__icon"></i>
                      </div>
                      <div class="col-10">
                        <h6 class="card-subtitle contact__subtitle">Clists</h6>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="col-12 my-2">
                  <a
                    href="https://goo.gl/maps/UX3UWzy3x2CJP7uE8"
                    target="_blank"
                    class="card"
                  >
                    <div class="row align-items-center">
                      <div class="col-2 text-center">
                        <i class="uil uil-map-marker contact__icon"></i>
                      </div>
                      <div class="col-10">
                        <h6 class="card-subtitle contact__subtitle">
                          {{ $t("conect_us__location") }}
                        </h6>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="footer__copy">
        Copyright &#169; 2021 - All Rights Reserved - Clists
      </p>
    </div>
  </footer>

  <a href="#" class="scrollup" id="scroll-up">
    <i class="uil uil-arrow-up scrollup__icon"></i>
  </a>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
import i18n from "./i18n";

export default {
  data: () => ({
    langflag: "us",
  }),
  methods: {
    changeLanguage(lang) {
      this.langflag = lang;
      i18n.global.locale = lang;
      if (lang === "en") {
        this.langflag = "us";
        localStorage.removeItem("lang");
        document.getElementById("app").style.fontFamily = "var(--body-en-font)";
        this.$router.push({ path: "/" });
      } else if (lang === "kh") {
        localStorage.setItem("lang", "kh");
        document.getElementById("app").style.fontFamily = "var(--body-kh-font)";
        this.$router.push({ path: "/kh" });
      } else if (lang === "jp") {
        localStorage.setItem("lang", "jp");
        document.getElementById("app").style.fontFamily = "var(--body-jp-font)";
        this.$router.push({ path: "/jp" });
      }
    },
    changeTheme() {
      const themeButton = document.getElementById("theme-button");
      const darkTheme = "dark-theme";
      const iconTheme = "uil-sun";

      const selectedTheme = localStorage.getItem("selected-theme");
      const selectedIcon = localStorage.getItem("selected-icon");

      const getCurrentTheme = () =>
        document.body.classList.contains(darkTheme) ? "dark" : "light";
      const getCurrentIcon = () =>
        themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

      if (selectedTheme) {
        document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
          darkTheme
        );
        themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
          iconTheme
        );
      }
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);
      localStorage.setItem("selected-theme", getCurrentTheme());
      localStorage.setItem("selected-icon", getCurrentIcon());
    },
  },
  mounted() {
    AOS.init({
      offset: 300,
      duration: 500,
    });
    const lang = localStorage.getItem("lang");
    this.langflag = lang === null ? "us" : lang;
    i18n.global.locale = lang === null ? "en" : lang;
    if (lang === "kh")
      document.getElementById("app").style.fontFamily = "var(--body-kh-font)";
    else if (lang === "jp")
      document.getElementById("app").style.fontFamily = "var(--body-jp-font)";
    const themeButton = document.getElementById("theme-button");
    const darkTheme = "dark-theme";
    const iconTheme = "uil-sun";
    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");
    if (selectedTheme) {
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
      );
      themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
        iconTheme
      );
    }

    function scrollUp() {
      const scrollUp = document.getElementById("scroll-up");
      if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
      else scrollUp.classList.remove("show-scroll");
    }
    window.addEventListener("scroll", scrollUp);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kantumruy:wght@300;400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap");

:root {
  --header-height: 6rem;
  /*========== Colors ==========*/
  /* Change favorite color */
  --hue-color: 230;
  /*Purple 250 - Green 142 - Blue 230 - Pink 340*/

  /* HSL color mode */
  --first-color: hsl(var(--hue-color), 69%, 61%);
  --first-color-second: hsl(var(--hue-color), 80%, 25%);
  --first-color-alt: hsl(var(--hue-color), 57%, 53%);
  --first-color-lighter: hsl(var(--hue-color), 92%, 85%);
  --title-color: hsl(var(--hue-color), 8%, 15%);
  --text-color: hsl(var(--hue-color), 8%, 45%);
  --text-color-light: hsl(var(--hue-color), 8%, 65%);
  --input-color: hsl(var(--hue-color), 70%, 96%);
  /* --body-color: hsl(var(--hue-color), 60%, 99%); */
  --body-color: hsl(var(--hue-color), 60%, 97%);
  --body-color-shift: hsl(var(--hue-color), 60%, 93%);
  --container-color: #fff;
  --scroll-bar-color: hsl(var(--hue-color), 12%, 48%);
  --scroll-thumb-color: hsl(var(--hue-color), 12%, 36%);

  /*========== Font and typography ==========*/
  --body-jp-font: "Noto Sans JP", "Poppins", sans-serif;
  --body-kh-font: "Kantumruy", "Poppins", Arial, sans-serif;
  --body-en-font: "Poppins", sans-serif;
  /* .5rem = 8px, 1rem = 16px, 1.5rem = 24px ... */
  --big-font-size: 3rem;
  --h1-font-size: 1.5rem;
  --h2-font-size: 1.25rem;
  --h3-font-size: 1.125rem;
  --normal-font-size: 0.938rem;
  --small-font-size: 0.813rem;
  --smaller-font-size: 0.75rem;
  --line-height-size: 2rem;

  /*========== Font weight ==========*/
  --font-medium: 500;
  --font-semi-bold: 600;

  /*========== Margenes Bottom ==========*/
  /* .25rem = 4px, .5rem = 8px, .75rem = 12px ... */
  --mb-0-25: 0.25rem;
  --mb-0-5: 0.5rem;
  --mb-0-75: 0.75rem;
  --mb-1: 1rem;
  --mb-1-5: 1.5rem;
  --mb-2: 2rem;
  --mb-2-5: 2.5rem;
  --mb-3: 3rem;

  --z-tooltip: 10;
  --z-fixed: 100;
  --z-modal: 1000;

  --swiper-theme-color: var(--first-color) !important;
  --animate-duration: 800ms;
  --animate-delay: 2s;
}

@media screen and (min-width: 968px) {
  :root {
    --big-font-size: 3rem;
    --h1-font-size: 2.25rem;
    --h2-font-size: 1.5rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: 0.875rem;
    --smaller-font-size: 0.813rem;
  }
}

/*=============== BASE ===============*/
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  margin-top: var(--header-height);
  font-family: var(--body-en-font);
  font-size: var(--normal-font-size);
  background-color: var(--body-color);
  color: var(--text-color);
}
ul {
  list-style: none;
  padding: 0;
}

a {
  text-decoration: none;
  color: var(--text-color);
}

a:hover {
  color: var(--first-color);
}

h1,
h2,
h3,
h4,
h5 {
  color: var(--title-color);
  font-weight: var(--font-semi-bold);
}

.title {
  font-size: var(--h1-font-size);
  text-align: center;
}

.navbar {
  background-color: var(--body-color);
  /* height: 5rem; */
}

.logo {
  width: 12rem;
}

.nav-item > a {
  color: var(--text-color) !important;
}
.nav-item > a:hover {
  color: var(--first-color) !important;
}

.active {
  color: var(--first-color) !important;
}

.title__logo {
  font-size: calc(var(--h2-font-size) + 0.25rem);
  font-weight: var(--font-semi-bold);
  color: var(--text-color);
}

.title__logo:hover {
  color: var(--first-color);
}

.service__img {
  padding-top: var(--mb-3);
  width: 80%;
}

#dropdownMenuLink:focus,
#button:focus {
  outline: none;
  box-shadow: none;
}

.change-theme {
  font-size: 1.25rem;
  color: var(--title-color);
  margin-right: var(--mb-1);
  cursor: pointer;
}

.change-theme:hover {
  color: var(--first-color);
}

/*========== Variables Dark theme ==========*/

body.dark-theme {
  /* HSL color mode */
  --first-color-second: hsl(var(--hue-color), 30%, 8%);
  --title-color: hsl(var(--hue-color), 8%, 95%);
  --text-color: hsl(var(--hue-color), 8%, 75%);
  --input-color: hsl(var(--hue-color), 29%, 16%);
  --body-color: hsl(var(--hue-color), 28%, 12%);
  --body-color-shift: hsl(var(--hue-color), 28%, 25%);
  --container-color: hsl(var(--hue-color), 29%, 16%);
}

.nav__toggle {
  color: var(--first-color);
  font-weight: var(--font-medium);
}

.card {
  border: none;
  background-color: transparent;
}

.footer {
  background-color: var(--first-color-second);
  padding: 2rem 0 3rem;
}

.footer .card {
  background-color: var(--first-color-second);
}

.footer__subtitle {
  font-size: var(--small-font-size);
}

.footer__title,
.footer__subtitle,
.footer__link,
.footer__social {
  color: #fff;
}

.footer__links li a {
  font-size: var(--small-font-size);
  color: #fff;
}

.footer__social {
  font-size: 1.25rem;
  margin-right: var(--mb-1-5);
}

.footer__social:hover {
  color: var(--first-color-lighter);
}

.scrollup {
  position: fixed;
  right: 1rem;
  bottom: -20%;
  background-color: var(--first-color);
  opacity: 0.8;
  padding: 0 0.3rem;
  border-radius: 0.4rem;
  z-index: var(--z-modal);
  transition: 0.4s;
}

.scrollup:hover {
  background-color: var(--first-color-alt);
}

.scrollup__icon {
  font-size: 1.5rem;
  color: #fff;
}

/* Show scroll */
.show-scroll {
  bottom: 5rem;
}

.partners__img {
  height: 3rem;
}

.contact__title {
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);
  color: #fff;
}

.contact__subtitle {
  font-size: var(--small-font-size);
  color: #fff;
}

.contact__icon {
  font-size: 1.5rem;
  color: #fff;
  margin-right: var(--mb-0-75);
}

.footer__copy {
  font-size: var(--small-font-size);
  text-align: center;
  color: var(--text-color-light);
  margin-top: var(--mb-3);
}

@media screen and (max-width: 992px) {
  body {
    margin-top: calc(var(--header-height) + 1.5rem);
  }

  .logo {
    width: 4rem;
  }
}

@media screen and (max-width: 768px) {
  .logo {
    width: 3rem;
  }

  .title__logo {
    font-size: var(--h2-font-size);
  }

  .service__img {
    width: 100%;
  }
}

@media screen and (max-width: 374px) {
  .logo {
    width: 2rem;
  }

  .title__logo {
    font-size: var(--h3-font-size);
  }
  .service__img {
    width: 100%;
  }
}

@media screen and (max-width: 336px) {
  .logo {
    width: 1.5rem;
  }

  .title__logo {
    font-size: calc(var(--h3-font-size) - 0.35rem);
  }

  .service__img {
    width: 100%;
  }
}
</style>
