function About () {
  return (
    <div className="flex flex-col items-center py-40  px-80 gap-10 ">
      <h1 className="text-4xl font-semibold">Welcome to Our Restaurant App!</h1>
      <p className="text-lg">
        Our app provides you with a complete experience for exploring and
        managing your list of favorite restaurants. We&apos;ve created this
        platform with a focus on simplicity and convenience so you can fully
        enjoy your culinary experiences.
      </p>
      <h2 className="text-3xl font-semibold">Features</h2>
      <p className="leading-relaxed text-justify">
        • <strong>Explore Restaurants:</strong> Discover a wide variety of restaurants at a glance.
        Filter by cuisine type, location, and more to find the perfect spot for
        your next meal. <br />
        • <strong>Explore Restaurant Details:</strong> Get detailed information about each restaurant, including its
        address, cuisine type, and more. Easily access the details you need to
        make an informed decision. <br />
        • <strong>Secure Authentication:</strong> Your security is our
        priority. We use JWT token authentication to ensure that your personal
        data and your list of favorites are protected. <br />
        • <strong>Manage Your Sessions:</strong> Securely log in and log out of
        your account. Your information will always be protected. <br />
        • <strong>Add and Remove Favorites:</strong> Add new restaurants to your list of favorites or remove ones
        that no longer interest you. Keep your personalized list up-to-date.
      </p>
    </div>
  )
}

export default About
