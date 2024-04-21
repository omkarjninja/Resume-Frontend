function Hero() {
  return (
    <>
      <div>
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1602407294553-6ac9170b3ed0?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl text-left">
                  The Best Online <br></br>Resume Builder
                </h2>

                <p className="mt-4 text-gray-600 text-left">
                  Easily create the perfect resume for any job using our
                  best-in-class resume builder platform.
                </p>

                <a
                  href="/template"
                  className="mt-8 inline-block rounded bg-indigo-600 px-3 w-full py-6 text-sm no-underline font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Create My Resume Now
                </a>
              </div>
            </div>
          </div>
        </section>
        <p className="py-3 mb-3 text-xl text-mono mx-5">
          "Unlock the power of professional presentation with our intuitive
          resume creation platform, boasting an array of sleek design templates
          tailored to suit your industry. Seamlessly craft your resume with our
          AI-driven wizard, while benefiting from expert insights and
          customizable layouts. Start for free today and gain access to our
          user-friendly interface and convenient TXT file downloads."
        </p>
      </div>
    </>
  );
}
export default Hero;
