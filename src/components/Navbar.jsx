const Navbar = (props) => {
  return (
    <>
      <header class="text-white-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center  bg-rose-400">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span class="ml-3 text-xl">89sblog</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a href="/" class="mr-5 hover:text-gray-900">Home</a>
      <a href="/create" class="mr-5 hover:text-gray-900">New Blog</a>
    </nav>
  </div>
</header>
    </>
  );
};

export default Navbar;
