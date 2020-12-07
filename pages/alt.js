import Head from "next/head"

function Blog() {
  return (
    <div id="main" className="antialiased">
    
      <Head>
        <title>ALTERNATIVE - Jered Odegard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* Mobile Nav */}
      <div id="mobileMenu" className="hidden w-full h-full fixed z-50 bg-white p-6">
        <div className="w-full flex justify-between mb-6">
          <div className="h-20 w-16 bg-gray-900 flex items-center justify-center fill-current text-white relative -top-6 rounded-b-md">
            <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M5.384 31.168l3.348-3.636c.936.72 2.082 1.26 3.438 1.62 1.356.36 2.778.54 4.266.54 2.016 0 3.888-.324 5.616-.972 1.728-.648 3.228-1.566 4.5-2.754 1.272-1.188 2.268-2.622 2.988-4.302.72-1.68 1.08-3.54 1.08-5.58 0-3.48-1.056-6.384-3.168-8.712l3.204-3.456L27.272 1l-3.24 3.672a13.895 13.895 0 00-3.51-1.422c-1.26-.324-2.61-.486-4.05-.486-2.016 0-3.894.312-5.634.936-1.74.624-3.24 1.512-4.5 2.664-1.26 1.152-2.25 2.55-2.97 4.194-.72 1.644-1.08 3.486-1.08 5.526 0 1.704.258 3.282.774 4.734a11.878 11.878 0 002.25 3.87L2 28.288l3.384 2.88zm5.868-12.744c-.216-.528-.324-1.272-.324-2.232 0-.792.114-1.548.342-2.268.228-.72.57-1.356 1.026-1.908a5.054 5.054 0 011.728-1.332c.696-.336 1.5-.504 2.412-.504.816 0 1.5.108 2.052.324l-7.236 7.92zm5.112 3.672c-.384 0-.762-.024-1.134-.072a3.343 3.343 0 01-.954-.252l7.236-7.92c.24.6.36 1.356.36 2.268 0 .792-.114 1.548-.342 2.268a5.631 5.631 0 01-1.026 1.908 4.867 4.867 0 01-1.728 1.314c-.696.324-1.5.486-2.412.486z" fillRule="nonzero"/>
            </svg>
          </div>
          <button className="h-9 w-9 fill-current text-gray-800 " onClick={toggleNav}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="space-y-10 lg:space-y-16 text-4xl lg:text-6xl font-bold text-gray-800 text-center">
          <a className="block hover:text-yellow-600" href="/alt">Home</a>
          <a className="block hover:text-yellow-600" href="/coaching">Coaching</a>
          <a className="block hover:text-yellow-600" href="/podcast">Podcast</a>
          <a className="block hover:text-yellow-600" href="/about">About</a>
        </nav>
      </div>
      {/* Mobile Nav - End */}

      {/* Background Shape */}
      <div className="absolute z-0 w-full">
        <div className="bg-yellow-50 pt-96 sm:py-0 sm:h-72 md:h-48 lg:h-32 xl:h-0"></div>
        <svg className="fill-current text-yellow-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 744">
          <path d="M0 0h1920v654.395c-179.423-73.807-402.81-73.807-670.16 0-164.619 45.447-467.454 141.64-810.272 0C294.326 594.387 147.803 624.185 0 743.787V0z" fill-rule="evenodd"/>
        </svg>
      </div>
      {/* Background Shape - End */}

      {/* Page Wrapper */}
      <div className="px-6 lg:px-24 pt-6 pb-4 z-10 relative max-w-screen-3xl mx-auto">

        {/* Navbar */}
        <div className="flex justify-between">

          {/* Left Side */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="h-20 w-16 bg-gray-900 flex items-center justify-center fill-current text-white absolute top-0 rounded-b-md">
              <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path d="M5.384 31.168l3.348-3.636c.936.72 2.082 1.26 3.438 1.62 1.356.36 2.778.54 4.266.54 2.016 0 3.888-.324 5.616-.972 1.728-.648 3.228-1.566 4.5-2.754 1.272-1.188 2.268-2.622 2.988-4.302.72-1.68 1.08-3.54 1.08-5.58 0-3.48-1.056-6.384-3.168-8.712l3.204-3.456L27.272 1l-3.24 3.672a13.895 13.895 0 00-3.51-1.422c-1.26-.324-2.61-.486-4.05-.486-2.016 0-3.894.312-5.634.936-1.74.624-3.24 1.512-4.5 2.664-1.26 1.152-2.25 2.55-2.97 4.194-.72 1.644-1.08 3.486-1.08 5.526 0 1.704.258 3.282.774 4.734a11.878 11.878 0 002.25 3.87L2 28.288l3.384 2.88zm5.868-12.744c-.216-.528-.324-1.272-.324-2.232 0-.792.114-1.548.342-2.268.228-.72.57-1.356 1.026-1.908a5.054 5.054 0 011.728-1.332c.696-.336 1.5-.504 2.412-.504.816 0 1.5.108 2.052.324l-7.236 7.92zm5.112 3.672c-.384 0-.762-.024-1.134-.072a3.343 3.343 0 01-.954-.252l7.236-7.92c.24.6.36 1.356.36 2.268 0 .792-.114 1.548-.342 2.268a5.631 5.631 0 01-1.026 1.908 4.867 4.867 0 01-1.728 1.314c-.696.324-1.5.486-2.412.486z" fillRule="nonzero"/>
              </svg>
            </div>
            {/* Logo - End */}

            {/* Nav Items */}
            <nav className="hidden md:flex space-x-8 ml-24 text-sm lg:text-base">
              <a className="font-extrabold text-gray-800" href="/alt">Home</a>
              <a className="font-medium text-gray-500 hover:text-gray-800" href="/coaching">Coaching</a>
              <a className="font-medium text-gray-500 hover:text-gray-800" href="/podcast">Podcast</a>
              <a className="font-medium text-gray-500 hover:text-gray-800" href="/about">About</a>
            </nav>
            {/* Nav Items - End */}

          </div>
          {/* Left Side - End */}

          {/* Contact */}
          <button onClick={openContact} className=" hidden md:flex px-4 py-2 bg-yellow-200 font-bold text-yellow-600 rounded hover:bg-yellow-300 text-sm lg:text-base">Contact</button>
          {/* Contact - End */}

          {/* Hamburger */}
          <button className="h-9 w-9 md:hidden fill-current text-gray-900" onClick={toggleNav}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Hamburger - End */}
        </div>
        {/* Navbar - End */}

        {/* Hero */}
        <div className="mt-32 mb-24 sm:mb-32 md:mb-48 lg:mb-52 text-center mx-auto md:max-w-none">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 font-bold font-serif leading-tight">Leadership fascinates me.</h1>
          <p className="text-gray-500 text-lg md:text-xl md:text-2xl max-w-screen-lg mt-4 mx-auto">My purpose is to help create more authentic and capable leaders.</p>
          <a href="/about">
            <button className="px-8 py-3 bg-yellow-600 text-sm sm:text-lg font-bold text-white rounded mt-8 hover:bg-yellow-500">See my story</button>
          </a>
        </div>
        {/* Hero - End */}


        {/* Coach Card */}
        <div className="w-full p-8 sm:p-16 lg:py-32 flex items-center mt-10 bg-white mb-16 rounded-xl shadow-xl border">
          <section className="grid grid-cols-12 max-w-screen-xl xl:gap-x-20 mx-auto items-center">
            <div className="col-span-full xl:col-span-8">
              <div className="text-sm sm:text-base uppercase tracking-wide text-yellow-600 font-extrabold mb-4">CERTIFIED COACH</div>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-extrabold text-gray-900 mb-4 sm:mb-8 font-serif max-w-screen-sm">Fast-track your growth.</h2>
              <p className="text-base sm:text-lg sm:text-2xl font-medium sm:leading-10 mb-6 text-gray-500">I help high performing professionals and executives at companies like <span className="font-bold text-gray-700">Amazon</span>,  <span className="font-bold text-gray-700">Facebook</span>, and <span className="font-bold text-gray-700">Microsoft</span> achieve their goals. I'm confident I can accelerate you towards where you want to be.</p>
                <a href="/coaching">
                  <button className="px-6 sm:px-8 py-4 bg-yellow-200 text-sm sm:text-lg font-bold text-yellow-600 rounded mt-2 lg:mt-4 hover:bg-yellow-300">What is coaching?</button>
                </a>
            </div>
            <div className="hidden xl:grid col-span-full mt-10 xl:mt-0 xl:col-span-4 mt-0">
              <img className="shadow-dark rounded transform rotate-1" src="selft.jpg" />
            </div>
          </section>
        </div>
        {/* Coach Card - End */}

        {/* Podcast Card */}
        <div className="w-full p-8 sm:p-16 lg:py-32 flex items-center bg-yellow-50 mb-10 rounded-xl">
          <section className="grid grid-cols-12 max-w-screen-xl lg:gap-x-20 mx-auto items-center">
            <div className="hidden xl:grid col-span-full mt-10 xl:mt-0 xl:col-span-4 mt-0">
              <img className="shadow-dark rounded" src="podcast.jpg" />
            </div>
            <div className="col-span-full xl:col-span-8">
              <div className="text-sm sm:text-base uppercase tracking-wide text-yellow-600 font-extrabold mb-4">PODCAST HOST</div>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-4 sm:mb-8 font-serif">Experts say.</h2>
              <p className="text-base sm:text-lg sm:text-2xl font-medium sm:leading-10 mb-6 text-gray-500 max-w-screen-md">I host a podcast called the <span className="font-bold text-gray-700">Jered O Show</span>. Each episode I meet with researchers and company leaders to uncover how to become world-class.</p>
                <a href="/podcast">
                  <button className="px-6 sm:px-8 py-4 border-2 border-yellow-500 text-sm sm:text-lg font-bold text-yellow-500 rounded mt-2 lg:mt-4 hover:bg-yellow-500 hover:text-white">Listen to the podcast</button>
                </a>
            </div>
          </section>
        </div>
        {/* Podcast Card - End */}

        <div className="text-xs text-gray-400 text-center my-4">&copy; 2020 Jered Odegard. All rights reserved.</div>
      </div>
      {/* Page Wrapper - End */}

    </div>
  );
}

function openContact() {
  alert("Email me at j@jeredodegard.com")
}

function toggleNav() {
  let main = document.getElementById("main")
  let mobileNav = document.getElementById("mobileMenu")
  if (mobileNav.classList.contains("hidden")) {
    mobileNav.classList.remove("hidden")
    main.classList.add("fixed")
  }
  else {
    mobileNav.classList.add("hidden")
    main.classList.remove("fixed")
  }
}

export default Blog;
