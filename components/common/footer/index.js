import FooterBlock from './footerBlock'
import Copyright from './copyright';
import { policy, category, contact } from '../constants/constants'
const Footer = () => (
  <footer class="text-gray-600 body-font bg-gray-300">
    <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img src="/logo/shopit-logos_transparent.png" className="w-28 sm:w-48 h-auto" alt="logo" />
          {/* <span class="ml-3 text-xl">Little Tags</span> */}
        </a>
        <p class="mt-2 text-sm text-gray-500">E commerce based on React</p>
      </div>
      <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <FooterBlock blockType={contact} />
        <FooterBlock blockType={category} />
        <FooterBlock blockType={policy} />
      </div>
    </div>
    <Copyright />
  </footer>
);

export default Footer;