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
      <h3 class="title">AWS & GCP Specialists Services</h3>
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
                  ការរៀបចំគម្រោងលើ AWS នឹង GCP
                </h5>
                <p class="card-text">
                  Clists ផ្គត់ផ្គង់ការរៀបចំនិងអភិវឌ្ឍគម្រោងលើ AWS នឹង GCP
                  ទៅតាមតម្រូវការនឹងការចង់បានរបស់អតិថិជននឹងព្យាយាមរក្សានូវគម្រោងដែលអតិថិជនកំពុងប្រើប្រាស់ស្រាប់។
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
                  ការផ្ទេរទិន្នន័យនឹងសរសេរកម្មវិធី
                </h5>
                <p class="card-text">
                  Clists ផ្គត់ផ្គង់ការសរសេរនិងអភិវឌ្ឍកម្មវិធីនិងការផ្ទេរទិន្នន័យពី
                  Cloud រឺ On-Premise ទៅកន្លែងផ្សេងតាមតម្រូវការរបស់អតិថិជន។
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
                <h5 class="card-title training__title">
                  ការត្រួតពិនិត្យនិងតម្ហែរទាំ
                </h5>
                <p class="card-text">
                  អ្នកអាចសម្រាកបានយ៉ាងស្រួលនៅពេលយប់នឹងថ្ងៃឈប់សម្រាកដោយគ្រាន់តែជ្រើសយកសេវាកម្មរបស់ពួកយើងដើម្បីតាមដាននឹងតំហែទាំ
                  Servers របស់លោកអ្នក 24h/7។
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
        <h3 class="title">Openstack Cloud Platform Services</h3>
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
                      ការណែនាំទៅលើ Hardware
                    </h3>
                    <h6 class="card-subtitle service__charge pb-3">
                      មិនគិតប្រាក់
                    </h6>
                    <p class="card-text">
                      Clists ព្យាយាមស្វែងរកនូវ hardware ដែលត្រឹមត្រូវនឹងសាកសមជាមួយ
                      server
                      ដែលអ្នកកំពុងមានក្នុងគោលបំណងជួយលោកអ្នកកាត់បន្ថយការចំណាយ។
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
                    <h3 class="card-title service__name">
                      ការផ្ទេរទិន្នន័យនិងតម្ហែរទាំ
                    </h3>
                    <h6 class="card-subtitle service__charge pb-3">
                      គិតប្រាក់
                    </h6>
                    <p class="card-text">
                      Clists
                      មានសេវាកម្មផ្គត់ផ្គង់ការផ្ទេរទិន្នន័យពីប្រភពមួយទៅប្រភពមួយទៀតជាមួយនិងការចំណាយតិចប្រកបដោយសុវត្ថិភាពខ្ពស់នឹងរហ័សទាន់ចិត្ត។
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
                    <h3 class="card-title service__name">ការព្យាករតម្លៃ</h3>
                    <h6 class="card-subtitle service__charge pb-3">
                      មិនគិតប្រាក់
                    </h6>
                    <p class="card-text">
                      Clists
                      មានផ្ដល់សេវាកម្មសម្រាប់ជួយលោកអ្នកក្នុងការព្យាករតម្លៃទៅលើគម្រោង
                      Server
                      និងធ្វើការប្រៀបធៀបតម្លៃរវាងសេវាកម្មនឹងគម្រោងដែលលោកអ្នកត្រូវប្រើ។
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
                      ការតម្លើងប្រព័ន្ធ Openstack
                    </h3>
                    <h6 class="card-subtitle service__charge pb-3">
                      គិតប្រាក់
                    </h6>
                    <p class="card-text">
                      Clists មានផ្គត់ផ្គង់សេវាកម្មក្នុងការតម្លើង Private
                      Data-Center ជាមួយនឹងប្រព័ន្ធ Openstack
                      ដោយធានានូវសុវត្ថិភាពខ្ពស់ជាមួយនឹងការចំណាយតិច។
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
                      ការណែនាំទៅលើគម្រោង Server
                    </h3>
                    <h6 class="card-subtitle service__charge pb-3">
                      មិនគិតប្រាក់
                    </h6>
                    <p class="card-text">
                      Clists ព្យាយាមបង្កើតនឹងអភិវឌ្ឍគម្រោង Server
                      របស់លោកអ្នកដើម្បីអោយត្រឹមត្រូវនិងសាកសមជាមួយគម្រោងដែលអ្នកកំពុងមានក្នុងគោលបំណងជួយលោកអ្នកកាត់បន្ថយការចំណាយ។
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
                    <h3 class="card-title service__name">ការត្រួតពិនិត្រ</h3>
                    <h6 class="card-subtitle service__charge pb-3">
                      គិតប្រាក់
                    </h6>
                    <p class="card-text">
                      Clists
                      មានផ្គត់ផ្គង់សេវាកម្មសម្រាប់ជួយលោកអ្នកក្នុងការត្រួតពិនិត្យទៅលើ
                      servers 24/7 នឹងផ្ដល់ដំណឹងដល់អ្នកនៅពេលមានបញ្ហាបន្ទាន់។
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

  <section data-aos="fade-up" id="aboutus">
    <div class="container text-center">
      <h3 class="title py-4">“ អំពីយើង „</h3>

      <p>
        ពួកយើងគឺជាក្រុមហ៊ុន Cloud
        ដំបូងគេបង្អស់នៅកម្ពុជាដែលសហការជាមួយក្រុមហ៊ុនធំៗមួយចំនួនដូចជា
        <span>A2A Town (Cambodia) Co., LTd</span> ជាដើម។
        ពួកយើងមានបទពិសោធន៏ប្រកបការងារទៅលើ
        <span>A2A Kirirom Data Center</span> ដែលបានផ្ដល់ជា
        <span>Private hosting service</span> ទៅអោយក្រុមហ៊ុន។
        គុណតម្លៃរបស់ពួកយើងគឺពឹងផ្អែកទៅលើ
        <span>Amazon Web Services, Google Cloud Platform</span> និង
        <span>Private Cloud Openstack</span>។
      </p>

      <p>
        ចក្ខុវិស័យនឹងបេសកកម្មរបស់ពួកយើងគឺលើកតម្កើននិងអភិវឌ្ឍវិស័យ
        <span>Cloud Computing</span>
        នៅកម្ពុជាអោយកាន់តែរីកចម្រើនដែលជាចំណែកមួយដ៏សំខាន់ក្នុងការអភិវឌ្ឍសេដ្ឋកិច្ចប្រទេសកម្ពុជាអោយកាន់តែរីកចម្រើនជាមួយភាពច្នៃប្រឌិតនិងស៊ីវីល័យ។
      </p>

      <a
        class="btn btn-warning align-item-end my-4"
        href="/services"
        role="button"
        >សេវាកម្ម</a
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
  padding-top: calc(var(--mb-3) + 5rem);
  padding-bottom: var(--mb-3);
}
</style>