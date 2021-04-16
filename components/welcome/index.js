

function Layout({ props }) {

  return (
    <div>

      <div class="flex flex-col md:flex-row py-20 md:py-24">
        <div class="w-4/5 sm:w-1/2 md:w-2/5 lg:w-1/3 mx-auto lg:mx-0 flex md:flex-col lg:flex-row items-start md:items-center justify-start md:justify-center md:text-center lg:text-left md:border-r-2 last:border-r-0 md:border-primary-lighter pb-3 md:pb-0">
          <div>
            <img src="https://d33wubrfki0l68.cloudfront.net/3c5b77be07c217ce310e179b30e44da59d358fb8/1fd98/assets/img/icons/icon-shipping.svg" class="w-12 h-12 object-contain object-center" alt="icon" />
          </div>
          <div class="ml-6 md:mt-3 lg:mt-0">
            <h3 class="font-hk font-semibold text-primary text-xl tracking-wide">
              Free shipping</h3>
            <p class="font-hk text-secondary-lighter text-base tracking-wide">
              On all orders over $30</p>
          </div>
        </div>
        <div class="w-4/5 sm:w-1/2 md:w-2/5 lg:w-1/3 mx-auto lg:mx-0 flex md:flex-col lg:flex-row items-start md:items-center justify-start md:justify-center md:text-center lg:text-left md:border-r-2 last:border-r-0 md:border-primary-lighter pb-3 md:pb-0">
          <div>
            <img src="https://d33wubrfki0l68.cloudfront.net/2e7e83f4e008c5efc2301e9ca7dde06e98c9a2b3/0b6dc/assets/img/icons/icon-support.svg" class="w-12 h-12 object-contain object-center" alt="icon" />
          </div>
          <div class="ml-6 md:mt-3 lg:mt-0">
            <h3 class="font-hk font-semibold text-primary text-xl tracking-wide">
              Always available</h3>
            <p class="font-hk text-secondary-lighter text-base tracking-wide">
              24/7 call center available</p>
          </div>
        </div>
        <div class="w-4/5 sm:w-1/2 md:w-2/5 lg:w-1/3 mx-auto lg:mx-0 flex md:flex-col lg:flex-row items-start md:items-center justify-start md:justify-center md:text-center lg:text-left md:border-r-2 last:border-r-0 md:border-primary-lighter pb-3 md:pb-0">
          <div>
            <img src="https://d33wubrfki0l68.cloudfront.net/c5fe62fc1adbb5e1e57a703b0f916a2ff38b4f77/efebf/assets/img/icons/icon-return.svg" class="w-12 h-12 object-contain object-center" alt="icon" />
          </div>
          <div class="ml-6 md:mt-3 lg:mt-0">
            <h3 class="font-hk font-semibold text-primary text-xl tracking-wide">
              Free returns</h3>
            <p class="font-hk text-secondary-lighter text-base tracking-wide">
              30 days free return policy</p>
          </div>
        </div>

      </div>
    </div>
  )
};

export default Layout;