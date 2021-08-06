<template>
  <section>
    <div class="container">
      <div class="row text-center">
        <div class="col-12 col-sm-12 col-md-12">
          <img
            src="../../assets/service__landing_page.png"
            class="service__img"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>

  <section>
    <div data-aos="fade-up" class="container">
      <h3 class="title">AWSとGCPの専門家</h3>
      <div class="py-4">
        <swiper
          class="pb-4"
          :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
          }"
          :grabCursor="true"
          :breakpoints="trainingSwiperOptions.breakpoints"
          :pagination="{ dynamicBullets: true }"
        >
          <swiper-slide>
            <div class="card">
              <div class="text-center">
                <i class="uil uil-cloud-database-tree introblock__icon"></i>
              </div>
              <div class="card-body text-center">
                <h5 class="card-title training__title">
                  AWS GCP アーキテクトの設計と開発
                </h5>
                <p class="card-text">
                  Clistsは、コストの最適化、高可用性、セキュリティ、スケーラビリティに関するお客様の要件に基づいて、AWS
                  GCPクラウドのサーバーアーキテクチャ設計を提供します。
                </p>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="card">
              <div class="text-center">
                <i class="uil uil-browser introblock__icon"></i>
              </div>
              <div class="card-body text-center">
                <h5 class="card-title training__title">
                  ソフトウェアの開発と移行
                </h5>
                <p class="card-text">
                  Clistsは、システムの新規またはアップグレードを探しているクライアントにソフトウェアアプリケーションを提供し、オンプレミスまたはパブリッククラウドから他の場所にデータを移行するための安全なトンネルを設定します。
                </p>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="card">
              <div class="text-center">
                <i class="uil uil-monitor introblock__icon"></i>
              </div>
              <div class="card-body text-center">
                <h5 class="card-title training__title">整備 & 監視</h5>
                <p class="card-text">
                  Clists
                  チームに24時間年中無休でインフラストラクチャをリモートで監視と保守させることで、休日や夜間に安心して過ごすことができます。当社のアラートシステムは、すべてのインシデントでいつでも通知します。
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>

  <section id="openstack">
    <div data-aos="fade-up" class="shift-background">
      <div class="container">
        <h3 class="title">Openstackクラウドプラットフォーム</h3>
        <div class="row justify-content-center py-4">
          <div data-aos="fade-down" class="col-12 col-lg-6 col-md-6 col-sm-6">
            <div class="card">
              <div class="row">
                <div class="col-4 text-center">
                  <i class="uil uil-processor service__icon"></i>
                </div>
                <div class="col-8">
                  <div class="card-body px-0">
                    <h3 class="card-title service__name">
                      ハードウェアの推奨事項
                    </h3>
                    <h6 class="card-subtitle service__charge pb-3">無料</h6>
                    <p class="card-text">
                      Clistsは、コストを最適化する目的で新しいハードウェアと交換する前に、既存のサーバーと一致する最適なハードウェアを見つけようとします。
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
                  <i class="uil uil-rocket service__icon"></i>
                </div>
                <div class="col-8">
                  <div class="card-body px-0">
                    <h3 class="card-title service__name">移行 と 整備</h3>
                    <h6 class="card-subtitle service__charge pb-3">有料</h6>
                    <p class="card-text">
                      Clistsは、最高の費用効果の高い移行および監視サービスを提供し、クラウドプロバイダーとの間でデータベースを迅速かつ安全に移行するのに役立ちます。
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
                  <i class="uil uil-bill service__icon"></i>
                </div>
                <div class="col-8">
                  <div class="card-body px-0">
                    <h3 class="card-title service__name">
                      コストシミュレーション
                    </h3>
                    <h6 class="card-subtitle service__charge pb-3">無料</h6>
                    <p class="card-text">
                      Clistsチームは、当社のサービスと他のクラウドサービスの使用の違いによる顧客企業へのコスト削減のシミュレーションを行います。
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
                  <i class="uil uil-cloud-data-connection service__icon"></i>
                </div>
                <div class="col-8">
                  <div class="card-body px-0">
                    <h3 class="card-title service__name">
                      Openstackのセットアップ
                    </h3>
                    <h6 class="card-subtitle service__charge pb-3">有料</h6>
                    <p class="card-text">
                      Clistsは、Openstack
                      Platformを使用したプライベートデータセンターサービスのセットアップを提供し、高セキュリティのハイブリッドクラウドプラットフォームを確保します。
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
                  <i class="uil uil-compress service__icon"></i>
                </div>
                <div class="col-8">
                  <div class="card-body px-0">
                    <h3 class="card-title service__name">
                      アーキテクチャの推奨事項
                    </h3>
                    <h6 class="card-subtitle service__charge pb-3">無料</h6>
                    <p class="card-text">
                      Clistsは、コストの最適化を目的として、既存のインフラストラクチャと一致する最適なアーキテクチャを見つけようとします。
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
                  <i class="uil uil-monitor-heart-rate service__icon"></i>
                </div>
                <div class="col-8">
                  <div class="card-body px-0">
                    <h3 class="card-title service__name">監視</h3>
                    <h6 class="card-subtitle service__charge pb-3">有料</h6>
                    <p class="card-text">
                      Clistsは、サーバーを24時間年中無休で監視し、緊急時に警告することで、サーバーのパフォーマンスを追跡するのに役立ちます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="training">
    <div data-aos="fade-up" class="container">
      <h3 class="title py-4">AWSトレーニングブートキャンプ</h3>
      <div class="py-4">
        <swiper
          class="pb-4"
          :grabCursor="true"
          :breakpoints="trainingSwiperOptions.breakpoints"
          :pagination="{ dynamicBullets: true }"
        >
          <swiper-slide>
            <div class="card">
              <div class="text-center">
                <img
                  src="../../assets/training/cp.png"
                  class="training__img"
                  alt="..."
                />
              </div>
              <div class="card-body text-center">
                <h3 class="card-title training__title">
                  AWS認定クラウドプラクティショナー
                </h3>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="card">
              <div class="text-center">
                <img
                  src="../../assets/training/saa.png"
                  class="training__img"
                  alt="..."
                />
              </div>
              <div class="card-body text-center">
                <h5 class="card-title training__title">
                  AWS認定ソリューションアーキテクトアソシエイト
                </h5>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="card">
              <div class="text-center">
                <img
                  src="../../assets/training/da.png"
                  class="training__img"
                  alt="..."
                />
              </div>
              <div class="card-body text-center">
                <h5 class="card-title training__title">
                  AWS認定開発者アソシエイト
                </h5>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="card">
              <div class="text-center">
                <img
                  src="../../assets/training/soa.png"
                  class="training__img"
                  alt="..."
                />
              </div>
              <div class="card-body text-center">
                <h5 class="card-title training__title">
                  AWS認定SYSOPSアソシエイト
                </h5>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>

  <section data-aos="fade-up" id="aboutus">
    <div class="container text-center">
      <h3 class="title py-4">“ 会社概要 „</h3>

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
</template>

<script>
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import AOS from "aos";
import "aos/dist/aos.css";
// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);
export default {
  data() {
    return {
      trainingSwiperOptions: {
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
            spaceBetween: 20,
          },
        },
      },
    };
  },
  computed: {},
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    AOS.init({
      offset: 300,
      duration: 500,
    });
  },
  methods: {},
};
</script>

<style scoped>
/* .container {
  padding-top: var(--mb-3);
  padding-bottom: var(--mb-3);
} */

.service__title {
  font-size: var(--big-font-size);
}

.title {
  font-size: var(--h1-font-size);
  text-align: center;
  padding-top: var(--mb-3);
  padding-bottom: var(--mb-3);
}

.shift-background {
  background-color: var(--body-color-shift);
}

.introblock__icon {
  font-size: 5rem;
  color: var(--first-color);
}

.service__name {
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
}

.service__charge {
  font-size: var(--small-font-size);
  color: var(--text-color-light);
}

.service__icon {
  font-size: 5rem;
  color: var(--first-color);
}

.training__img {
  width: 45%;
  margin-right: var(--mb-0-75);
}

.training__title {
  color: var(--title-color);
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
}

.training__description {
  color: var(--text-color);
  text-align: center;
}

.datacenter__img {
  width: 100%;
}

#aboutus {
  padding-top: var(--mb-3);
  padding-bottom: var(--mb-3);
}
</style>