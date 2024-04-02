import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="landing-page relative bg-sky-200">
      <section className=" banner relative flex items-center justify-center bg-sky-200 h-screen">
        <svg
          class="waves"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#0284c7"
            fill-opacity="1"
            d="M0,160L48,154.7C96,149,192,139,288,138.7C384,139,480,149,576,170.7C672,192,768,224,864,229.3C960,235,1056,213,1152,197.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="medicine.png" alt="medicine" />
          </div>

          <div className="place-self-center relative lg:col-span-7">
            <h1 className="z-10 max-w-2xl mb-4 text-4xl font-lighter tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              UTIBU HEALTH
            </h1>
            <p className="z-10 max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Utibu health is a health facility that caters for patients with
              chronic conditions such as HIV, diabetes and hypertension. Stable
              patients can be given medication to last several months without
              having to return for a doctor’s visit.
            </p>
            <a
              href="#"
              className="z-10 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-sky-600 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <Link
              to="/signup"
              className="z-10 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-sky-600 border border-sky-600 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </section>

      {/* What do we offer */}
      <section className="py-16 bg-sky-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:justify-center md:gap-8">
            <div className="md:w-1/2">
              <video
                data-v-f4daae2a=""
                data-test-id="animation-video"
                autoPlay
                loop
                muted
                width="100%"
                height="auto"
                className="animation__element rounded-lg"
              >
                <source
                  data-v-f4daae2a=""
                  src="order.mp4"
                  preload="auto"
                  type="video/webm"
                />
              </video>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h2 class="mb-4 text-4xl tracking-tight font-light text-white dark:text-white">
                So how do you order medicine?
              </h2>
              <p class="text-white text-base dark:text-gray-400">
                If this question is brought you here, don't worry, you know
                why? because we've got you! <br />
                <ul>
                  <li>Log in to your account</li>
                  <li>Select Medicine</li>
                  <li>Pay for medicine</li>
                  <li>Checkout and wait for delivery</li>
                </ul>
              </p>
              <div className="flex justify-center md:justify-start mt-6 space-x-4 text-white">
                Order Now
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End of what we offer */}


      {/* footer section */}
      <footer class="bg-sky-600 rounded-lg shadow m-4 dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-white sm:text-center dark:text-gray-400 ">
            © 2024 Utibu Health. All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-gray-400 sm:mt-0 text-white">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
