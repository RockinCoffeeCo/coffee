const Footer = () => (
  <>
    <footer class="relative bg-gray-900 lg:grid lg:grid-cols-5 z-10">
      <div class="relative block h-32 lg:col-span-2 lg:h-full">
        <img
          src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt=""
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div id="contact" class="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <div class="text-center sm:text-left">
              <p class="text-lg font-medium text-white">
                Contact Us
              </p>

              <ul class="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 shrink-0 text-white invisible lg:visible"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <span class="flex-1 text-gray-300">
                      info@rockin-coffee.com
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 shrink-0 text-white invisible lg:visible"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                   </svg>

                    <span class="flex-1 text-gray-300"
                    >931.224.4792</span
                    >
                  </a>
                </li>

                <li
                  class="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 shrink-0 text-white invisible lg:visible"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <address
                    class="-mt-0.5 flex-1 not-italic text-gray-300"
                  >
                    111 South Park Street, Hohenwald, Tennessee
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="mt-12 border-t pt-12 border-gray-800">
          <div class="flex flex-col items-center lg:flex-row lg:justify-between">
            <p class="mt-8 text-xs text-gray-400 sm:mt-0">
              Website Designed by Sylvia Zimmermann.
            </p>

            <p class="mt-8 text-xs text-gray-400 sm:mt-0">
              &copy; 2023. Rockin' Coffee Co. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
