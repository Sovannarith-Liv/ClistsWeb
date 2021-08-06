<template>
  <section>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <h3 class="home__subtitle animate__animated animate__fadeInDown">
            収入を稼ぐCLISTSを稼ぐ
          </h3>
          <h1 class="home__title text-color-main">Clists へようこそ</h1>
          <p class="home__text animate__animated animate__fadeInLeftBig">
            「Clistsはカンボジアで最初の有数のクラウドベースソリューションサービスになることを目指しています。私たちのサービスを選択することにより、カンボジアのすべての企業は絶対に
            安全性が高く最適化されたコストでサーバーを拡張する負担を軽減し、本番環境とサービスを中心にするようになります。
          </p>
          <a
            class="btn btn-warning align-item-end mt-2"
            href="#contactus"
            role="button"
            >お問い合わせ</a
          >
        </div>
        <div class="col-lg-6 animate__animated animate__fadeInRightBig">
          <img src="../../assets/server1.png" class="image__welcome" alt="" />
        </div>
      </div>
    </div>
  </section>

  <section id="video">
    <div class="container text-center">
      <video controls>
        <source src="../../assets/intro.mp4" type="video/mp4" />
        Your browser does not support HTML video.
      </video>
    </div>
  </section>

  <section data-aos="fade-up" id="ourfeature">
    <div class="wave">
      <svg
        id="wave"
        style="transform: rotate(0deg); transition: 0.3s"
        viewBox="0 0 1440 140"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="var(--body-color-shift)" offset="0%"></stop>
            <stop stop-color="var(--body-color-shift)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style="transform: translate(0, 0px); opacity: 1"
          fill="url(#sw-gradient-0)"
          d="M0,84L30,72.3C60,61,120,37,180,37.3C240,37,300,61,360,77C420,93,480,103,540,109.7C600,117,660,121,720,105C780,89,840,51,900,44.3C960,37,1020,61,1080,65.3C1140,70,1200,56,1260,46.7C1320,37,1380,33,1440,39.7C1500,47,1560,65,1620,67.7C1680,70,1740,56,1800,51.3C1860,47,1920,51,1980,63C2040,75,2100,93,2160,102.7C2220,112,2280,112,2340,100.3C2400,89,2460,65,2520,67.7C2580,70,2640,98,2700,98C2760,98,2820,70,2880,49C2940,28,3000,14,3060,18.7C3120,23,3180,47,3240,60.7C3300,75,3360,79,3420,70C3480,61,3540,37,3600,30.3C3660,23,3720,33,3780,51.3C3840,70,3900,98,3960,102.7C4020,107,4080,89,4140,70C4200,51,4260,33,4290,23.3L4320,14L4320,140L4290,140C4260,140,4200,140,4140,140C4080,140,4020,140,3960,140C3900,140,3840,140,3780,140C3720,140,3660,140,3600,140C3540,140,3480,140,3420,140C3360,140,3300,140,3240,140C3180,140,3120,140,3060,140C3000,140,2940,140,2880,140C2820,140,2760,140,2700,140C2640,140,2580,140,2520,140C2460,140,2400,140,2340,140C2280,140,2220,140,2160,140C2100,140,2040,140,1980,140C1920,140,1860,140,1800,140C1740,140,1680,140,1620,140C1560,140,1500,140,1440,140C1380,140,1320,140,1260,140C1200,140,1140,140,1080,140C1020,140,960,140,900,140C840,140,780,140,720,140C660,140,600,140,540,140C480,140,420,140,360,140C300,140,240,140,180,140C120,140,60,140,30,140L0,140Z"
        ></path>
      </svg>
    </div>
    <div class="shift-background">
      <div class="container">
        <h3 class="title py-4">対応領域</h3>
        <div class="py-4">
          <swiper
            class="pb-4"
            :autoplay="{
              delay: 2000,
              disableOnInteraction: false,
            }"
            :loop="true"
            :grabCursor="true"
            :breakpoints="whyusSwiperOptions.breakpoints"
            :pagination="{ dynamicBullets: true }"
          >
            <swiper-slide>
              <div class="card">
                <div class="text-center">
                  <img
                    src="../../assets/services/aws-certified_sysops-administrator_associate.png"
                    class="ourfeature__img"
                    alt="..."
                  />
                </div>
                <div class="card-body text-center">
                  <h5 class="card-title whyus__title">AWS SysOps Associate</h5>
                  <p class="card-text whyus__description">
                    監視、整備、セキュリティ、課金ソリューション
                  </p>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="card">
                <div class="text-center">
                  <img
                    src="../../assets/services/aws-devopsengineer-professional.png"
                    class="ourfeature__img"
                    alt="..."
                  />
                </div>
                <div class="card-body text-center">
                  <h5 class="card-title whyus__title">
                    AWS DevOps Engineer-Professional
                  </h5>
                  <p class="card-text whyus__description">アプリケーション</p>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="card">
                <div class="text-center">
                  <img
                    src="../../assets/services/solution-architect.png"
                    class="ourfeature__img"
                    alt="..."
                  />
                </div>
                <div class="card-body text-center">
                  <h5 class="card-title whyus__title">
                    AWS Solution Architect-Professional
                  </h5>
                  <p class="card-text whyus__description">
                    HA、セキュリティ、低コストを備えて、アーキテクチャを効果的に提供します。
                  </p>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="card">
                <div class="text-center">
                  <img
                    src="../../assets/services/aws-developer-associate.png"
                    class="ourfeature__img"
                    alt="..."
                  />
                </div>
                <div class="card-body text-center">
                  <h5 class="card-title whyus__title">
                    AWS Developer Associate
                  </h5>
                  <p class="card-text whyus__description">
                    統合、展開、移行、開発
                  </p>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="card">
                <div class="text-center">
                  <img
                    src="../../assets/services/gcp-professional-cloud-network-engineer.png"
                    class="ourfeature__img"
                    alt="..."
                  />
                </div>
                <div class="card-body text-center">
                  <h5 class="card-title whyus__title">
                    GCP Professional Network Engineer
                  </h5>
                  <p class="card-text whyus__description">
                    統合、展開、移行、開発
                  </p>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="card">
                <div class="text-center">
                  <img
                    src="../../assets/services/gcp-associate-cloud-engineer.png"
                    class="ourfeature__img"
                    alt="..."
                  />
                </div>
                <div class="card-body text-center">
                  <h5 class="card-title whyus__title">
                    GCP Associate Cloud Engineer
                  </h5>
                  <p class="card-text whyus__description">
                    Google Cloud
                    Platformを使用してアプリケーションのアーキテクチャを構築する
                  </p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>

  <section id="whyus">
    <div class="shift-background">
      <div class="container py-4">
        <h3 class="title py-4">なんで私達なの？</h3>
        <div class="py-4">
          <swiper
            :autoplay="{
              delay: 2000,
              disableOnInteraction: false,
              reverseDirection: true,
            }"
            class="pb-4"
            :grabCursor="true"
            :breakpoints="whyusSwiperOptions.breakpoints"
            :pagination="{ dynamicBullets: true }"
          >
            <swiper-slide>
              <div class="card">
                <div class="text-center">
                  <img
                    src="../../assets/whyus/certification-icon.png"
                    class="whyus__img"
                    alt="..."
                  />
                </div>
                <div class="card-body text-center">
                  <h5 class="card-title whyus__title">認定エンジニア</h5>
                  <p class="card-text whyus__description">
                    Amazon Web Services と Google Cloud Platform
                    の知識を持つ複数のスキルセットチーム。
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card">
                <div class="text-center">
                  <img
                    src="../../assets/whyus/server.png"
                    class="whyus__img"
                    alt="..."
                  />
                </div>
                <div class="card-body text-center">
                  <h5 class="card-title whyus__title">
                    クライアントベースのアーキテクチャ設計
                  </h5>
                  <p class="card-text whyus__description">
                    要件とクライアントの既存のインフラストラクチャに基づく設計
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card">
                <div class="text-center">
                  <img
                    src="../../assets/whyus/partner.png"
                    class="whyus__img"
                    alt="..."
                  />
                </div>
                <div class="card-body text-center">
                  <h5 class="card-title whyus__title">
                    強力なビジネスパートナー
                  </h5>
                  <p class="card-text whyus__description">
                    A2A Digital、Vkirirom Sale JP、および SG
                    kiriromによってサポートされています
                  </p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>

  <section data-aos="fade-up" id="ourmember">
    <div class="container">
      <h3 class="title py-4">私たちのメンバー</h3>
      <div class="row justify-content-center py-4">
        <div data-aos="fade-down" class="col-12 col-lg-6 col-md-6 col-sm-6">
          <div class="card">
            <div class="row">
              <div class="col-4 text-center">
                <img
                  src="../../assets/members/sereyroat.jpg"
                  class="member__img"
                  alt="..."
                />
              </div>
              <div class="col-8">
                <div class="card-body px-0">
                  <h3 class="card-title member__name">Kim Sereyroath</h3>
                  <h6 class="card-subtitle member__role pb-3">Chief Executive Officer</h6>
                  <p class="card-text">
                    コイン会社のビジネスおよびマーケティングプランナーです。彼女はキリロム工科大学の学生です。プロジェクト管理の経験があり、ネットワークマーケティングの拡大と事業計画を立っています。あらゆる問題を解決する方法があると信じています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-down" class="col-12 col-lg-6 col-md-6 col-sm-6">
          <div class="card">
            <div class="row">
              <div class="col-4 text-center">
                <img
                  src="../../assets/members/leangheng.jpg"
                  class="member__img"
                  alt="..."
                />
              </div>
              <div class="col-8">
                <div class="card-body px-0">
                  <h3 class="card-title member__name">Chuon LeangHeng</h3>
                  <h6 class="card-subtitle member__role pb-3">Chief Business & Marketing Officer</h6>
                  <p class="card-text">
                    LeanghengというClistsの技術専門家は、Vkirirom Campus
                    LANの管理とネットワークデバイスでの構成に関するインターンシップから、コンピューターネットワーキングに関する幅広い知識を持っています。彼は常に学び続け、AWS
                    Solution Architect Professional
                    に知識を広げています。技術だけでなく、Clistsネットワーキングチャネルを拡張するためのコミュニケーションも得意です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-down" class="col-12 col-lg-6 col-md-6 col-sm-6">
          <div class="card">
            <div class="row">
              <div class="col-4 text-center">
                <img
                  src="../../assets/members/sovannarith.jpg"
                  class="member__img"
                  alt="..."
                />
              </div>
              <div class="col-8">
                <div class="card-body px-0">
                  <h3 class="card-title member__name">Liv Sovannarith</h3>
                  <h6 class="card-subtitle member__role pb-3">Chief Designing Officer</h6>
                  <p class="card-text">
                    "Clists Google Cloud Platformの専門家で、Google Cloud
                    プラットフォームによってアソシエイトクラウドエンジニアとして認定されています。
                    Sovannarith
                    は勤勉で、友好的で、時間厳守で、責任感が高く、プレッシャーの下でもうまく機能する可能性があります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-down" class="col-12 col-lg-6 col-md-6 col-sm-6">
          <div class="card">
            <div class="row">
              <div class="col-4 text-center">
                <img
                  src="../../assets/members/kimhak.jpg"
                  class="member__img"
                  alt="..."
                />
              </div>
              <div class="col-8">
                <div class="card-body px-0">
                  <h3 class="card-title member__name">Heng Kimhak</h3>
                  <h6 class="card-subtitle member__role pb-3">Chief Technology Officer</h6>
                  <p class="card-text">
                    Kimhakは、キリロム工科大学でソフトウェアエンジニアリングを専攻し、Web開発とロボット工学を経験している、3番目の大学生です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section data-aos="fade-up" id="achievement">
    <div class="achievement"></div>
    <div class="shift-background">
      <div class="container">
        <h3 class="title py-4">私たちの業績</h3>

        <div class="row title">
          <div class="col-12 p-3">
            <img
              data-bs-toggle="modal"
              data-bs-target="#floatimg"
              src="../../assets/achievement/champion.jpg"
              alt=""
              class="img-fluid"
            />
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-sm-4 col-md-4 p-3">
            <img
              data-bs-toggle="modal"
              data-bs-target="#floatimg__sereyroath"
              src="../../assets/achievement/sereyroath.jpg"
              alt=""
              class="img-fluid"
            />
          </div>

          <div class="col-12 col-sm-4 col-md-4 p-3">
            <img
              data-bs-toggle="modal"
              data-bs-target="#floatimg__leangheng"
              src="../../assets/achievement/leangheng.jpg"
              alt=""
              class="img-fluid"
            />
          </div>

          <div class="col-12 col-sm-4 col-md-4 p-3">
            <img
              data-bs-toggle="modal"
              data-bs-target="#floatimg__sovannarith"
              src="../../assets/achievement/sovannarith.jpg"
              alt=""
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="ourpartners">
    <div class="shift-background">
      <!--<div class="container py-4">
        <h3 class="title py-4">当社のパートナー</h3>
        <div>
          <swiper
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :breakpoints="partnerSwiperOptions.breakpoints"
            class="text-center pb-3"
            :pagination="{ dynamicBullets: true }"
            :grabCursor="true"
          >
            <swiper-slide class="partners__container">
              <a href="#">
                <img
                  src="../../assets/partnerships/a2a.png"
                  class="partners__img"
                  alt=""
                />
              </a>
            </swiper-slide>

            <swiper-slide class="partners__container">
              <a href="#">
                <img
                  src="../../assets/partnerships/vkirirom.png"
                  class="partners__img"
                  alt=""
                />
              </a>
            </swiper-slide>

            <swiper-slide class="partners__container">
              <a href="#">
                <img
                  src="../../assets/partnerships/kit.png"
                  class="partners__img"
                  alt=""
                />
              </a>
            </swiper-slide>
          </swiper>
        </div>
      </div>-->
    </div>
  </section>

  <section data-aos="fade-up" id="aboutus">
    <div class="container text-center">
      <h3 class="title py-4">“ 会社情報 „</h3>

      <p>
        "「私たちはカンボジアの主要なクラウドエンジニアであり、A2A Town
        (Cambodia) co., ltd. と提携しています。
        私たちは、会社全体でプライベートホスティングサービスを提供することにより、A2Aキリロムデータセンターと協力した経験があります。
        私たちの中核的な価値観は、パブリッククラウドのアマゾンウェブサービス、グーグルクラウドプラットフォーム、プライベートクラウドのOpenStackに基づいています。」"
      </p>

      <p>
        「私たちのビジョンと使命は、ほとんどのカンボジア企業が直面する潜在的な問題に取り組むために、カンボジアのクラウドコンピューティング業界を発展させ、改善することです。これは、革新と標準化によってカンボジア経済をさらに成長させるための鍵です。」
      </p>

      <a
        class="btn btn-warning align-item-end my-4"
        href="/services"
        role="button"
        >当社のサービス</a
      >
    </div>
  </section>

  <section>
    <div
      class="modal fade"
      id="floatimg"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-body">
            <img
              src="../../assets/achievement/champion.jpg"
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="floatimg__sereyroath"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-body">
            <img
              src="../../assets/achievement/sereyroath.jpg"
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="floatimg__leangheng"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-body">
            <img
              src="../../assets/achievement/leangheng.jpg"
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="floatimg__sovannarith"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-body">
            <img
              src="../../assets/achievement/sovannarith.jpg"
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);
export default {
  data() {
    return {
      whyusSwiperOptions: {
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },
      },
      partnerSwiperOptions: {
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },
      },
    };
  },
  mounted() {
    AOS.init({
      offset: 300,
      duration: 500,
    });
  },
  computed: {},
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {},
};
</script>

<style scoped>
.text-color-main {
  color: white;
  background: repeating-linear-gradient(
    45deg,
    rgb(24, 39, 123) 0%,
    rgb(0, 139, 203) 8.33%,
    rgb(254, 212, 0) 16.66%,
    rgb(24, 39, 123) 24.99%,
    rgb(0, 139, 203) 33.32%,
    rgb(254, 212, 0) 41.65%,
    rgb(24, 39, 123) 50%
  );
  /* background: repeating-linear-gradient(
    -45deg,
    red 0.08%,
    yellow 7.14%,
    rgb(0, 255, 0) 14.28%,
    rgb(0, 255, 255) 21.4%,
    cyan 28.56%,
    blue 35.7%,
    magenta 42.84%,
    rgb(216, 86, 86) 50%
  ); */
  background-size: 600vw 600vw;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: slide 10s linear infinite forwards, fadeInDown 2s;
}

@keyframes slide {
  0% {
    background-position-x: 0%;
  }

  100% {
    background-position-x: 600vw;
  }
}

video {
  padding-top: var(--mb-3);
  max-width: 60%;
  height: auto;
}

#ourfeature {
  padding-top: var(--mb-3);
}

.shift-background {
  background-color: var(--body-color-shift);
}

.home__title {
  font-size: var(--big-font-size);
  line-height: calc(var(--big-font-size) + 2rem);
}

.home__subtitle {
  font-size: var(--h3-font-size);
  color: var(--text-color);
  font-weight: var(--font-medium);
  padding-bottom: var(--mb-0-75);
}

.home__text {
  line-height: var(--line-height-size);
}

.image__welcome {
  width: 100%;
}

#whyus .shift-background::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 5rem;
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.001) 0%,
    var(--body-color-shift) 100%
  );
  z-index: var(--z-tooltip);
}

.ourfeature__img {
  width: 45%;
}

#ourmember {
  padding-top: calc(var(--mb-3) + 5rem);
}

#achievement .shift-background {
  padding-top: 5rem;
  padding-bottom: var(--mb-3);
}

.achievement {
  margin-top: var(--mb-3);
  height: 5rem;
  width: 100%;
}

.achievement::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 5rem;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.001) 0%,
    var(--body-color-shift) 100%
  );

  z-index: var(--z-tooltip);
}

#ourpartners::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 5rem;
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.001) 0%,
    var(--body-color-shift) 100%
  );
  z-index: var(--z-tooltip);
}

#ourpartners .shift-background {
  padding-bottom: var(--mb-3);
}

#aboutus {
  padding-top: calc(var(--mb-3) + 5rem);
  padding-bottom: var(--mb-3);
}

.member__name {
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
}

.member__role {
  font-size: var(--small-font-size);
  color: var(--text-color-light);
}

.member__img {
  padding-top: 16px;
  width: 75%;
  border-radius: 50%;
}

.whyus__img {
  width: 45%;
  border-radius: 50%;
}

.whyus__title {
  color: var(--title-color);
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
}

.whyus__description {
  color: var(--text-color);
  text-align: center;
}

.contact__title {
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
}

.contact__subtitle {
  font-size: var(--small-font-size);
  color: var(--text-color-light);
}

.contact__icon {
  font-size: 2rem;
  color: var(--first-color);
  margin-right: var(--mb-0-75);
}

.partners__container {
  height: 200px;
}

.partners__container img {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.partners__img {
  height: 150px;
}
</style>