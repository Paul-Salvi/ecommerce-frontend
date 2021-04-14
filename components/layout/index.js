import Header from '../header/index';
import NavBar from '../navBar/index';

const Layout = props => (
  <div>
    <NavBar />

    <main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

        <div class="grid grid-cols-3 gap-4">

          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-1xl">
            <div class="md:flex">
              <div class="md:flex-shrink-0">
                <img class="h-48 w-full object-cover md:w-48" src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Man looking at item at a store" />
              </div>
              <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Rs 500</div>
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Addidas TShirt</a>
                <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work.</p>
              </div>
            </div>
          </div>
          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-1xl">
            <div class="md:flex">
              <div class="md:flex-shrink-0">
                <img class="h-48 w-full object-cover md:w-48" src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Man looking at item at a store" />
              </div>
              <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Rs 500</div>
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Addidas TShirt</a>
                <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work.</p>
              </div>
            </div>
          </div>

          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-1xl">
            <div class="md:flex">
              <div class="md:flex-shrink-0">
                <img class="h-48 w-full object-cover md:w-48" src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Man looking at item at a store" />
              </div>
              <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Rs 500</div>
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Addidas TShirt</a>
                <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work.</p>
              </div>
            </div>
          </div>


        </div>

      </div>
    </main>
  </div>
);

export default Layout;