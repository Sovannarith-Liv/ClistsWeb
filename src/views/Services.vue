<template>
  <section>
    <div class="container">
      <div class="row text-center">
        <div class="col-12 col-sm-12 col-md-12">
          <img src="../assets/service__landing_page.png" class="service__img" alt="" />
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
                  AWS GCP Architect Design & Development
                </h5>
                <p class="card-text">
                  Clists provides server architecture design for AWS GCP Cloud
                  based on customers’ requirement for Cost Optimization, High
                  Availability, Security and Scalability.
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
                  Software Development & Migration
                </h5>
                <p class="card-text">
                  Clists offers a reliable software development service for
                  customers & setting up private secure tunnel for migrating
                  data from on-premise to Cloud and vice versa.
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
                  Maintenance & Monitoring
                </h5>
                <p class="card-text">
                  You can restfully at holiday and night time by letting Clists
                  Team Monitor and Maintain remotly on your infrastructure for
                  24/7/365.Our alert system will notify you in every incidents
                  at anytime .
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
                      Hardware Recommendation
                    </h3>
                    <h6 class="card-subtitle service__charge pb-3">Free</h6>
                    <p class="card-text">
                      Clists will guide you to find the right components that
                      matching with your existing hardware which could help
                      saving cost and time.
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
                      Migration & Maintenance
                    </h3>
                    <h6 class="card-subtitle service__charge pb-3">Charge</h6>
                    <p class="card-text">
                      Clists provides the best cost effectivess Migration &
                      Maintenance service helping you migrate databases to or
                      from Cloud quickly and securely.
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
                    <h3 class="card-title service__name">Cost Simulation</h3>
                    <h6 class="card-subtitle service__charge pb-3">Free</h6>
                    <p class="card-text">
                      After getting requirements from client, Clists team will
                      prepare the cost simulation of monthly expense on cloud
                      for you.
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
                      Openstack Setting Up
                    </h3>
                    <h6 class="card-subtitle service__charge pb-3">Charge</h6>
                    <p class="card-text">
                      With the Openstack Cloud platform, Clists could build a
                      highly standardize Datacenter with high availability,
                      security, and performance for our customers.
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
                      Architecture Recommendation
                    </h3>
                    <h6 class="card-subtitle service__charge pb-3">Free</h6>
                    <p class="card-text">
                      Clists will help you find the best architecture that
                      matching with your existing infrastructure in the most
                      scalable, fast, secure, and high availability.
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
                    <h3 class="card-title service__name">Monitoring</h3>
                    <h6 class="card-subtitle service__charge pb-3">Charge</h6>
                    <p class="card-text">
                      Clists helps you keep track of your server performance by
                      monitoring the system 24/7 and alert you in case of
                      emergency.
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
      <h3 class="title">“ About Us „</h3>

      <p>
        WE ARE THE LEADING CLOUD ENGINEERS IN CAMBODIA PARTNER WITH A2A TOWN
        (CAMBODIA) CO., LTD.. WE HAVE EXPERIENCE WORKING WITH A2A KIRIROM DATA
        CENTER BY PROVIDING PRIVATE HOSTING SERVICE THROUGHOUT THE COMPANY. OUR
        CORE VALUES ARE BASED ON PUBLIC CLOUD AMAZON WEB SERVICES, GOOGLE CLOUD
        PLATFORM AND PRIVATE CLOUD OPENSTACK.
      </p>

      <p>
        OUR VISIONS AND MISSIONS ARE TO DEVELOP AND IMPROVE THE CLOUD TECHNOLOGY
        IN CAMBODIA IN ORDER TO TACKLE THE POTENTIAL PROBLEM FACED BY
        MOST OF CAMBODIA ENTERPRISES WHICH IS THE KEY TO ACCELERATE CAMBODIA
        ECONOMY TO BE MORE GROWN WITH INNOVATION AND STANDARDIZATION.
      </p>

      <a
        class="btn btn-warning align-item-end my-4"
        href="/services"
        role="button"
        >Our Services</a
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

/* #aboutus {
  padding-top: calc(var(--mb-3) + 5rem);
  padding-bottom: var(--mb-3);
} */
</style>