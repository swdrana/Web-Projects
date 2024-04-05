function Slider() {
  return (
    <div
      className="hero min-h-96"
      style={{
        backgroundImage:
          "url(https://png.pngtree.com/background/20211215/original/pngtree-hd-background-of-smart-technology-city-picture-image_1473098.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">WELCOME</h1>
          <p className="mb-5">THE GROWTH HUB FOR DEVELOPERS</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
