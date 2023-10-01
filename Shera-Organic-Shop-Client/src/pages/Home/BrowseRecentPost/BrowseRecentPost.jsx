import BlogCard from "../../../components/Blog/BlogCard";

function BrowseRecentPost() {
  return (
    <div className="bg-gray-white">
      <div className=" container mx-auto ">
        <header className="py-20 md:py-20">
          <h1 className="text-3xl text-center font-bold">Browse Recent Post</h1>
          <p className=" text-center text-[#5d6374] text-md">
            Learn More About Our Recent Exclusive News, Updates & Articles
          </p>
        </header>
        <section className="flex flex-wrap gap-5 justify-center sm:justify-between">
          <BlogCard img='https://i.ibb.co/jy2Wh05/blog-thumb-1.jpg'></BlogCard>
          <BlogCard img='https://i.ibb.co/ByFJSrk/2.png'></BlogCard>
          <BlogCard img='https://i.ibb.co/qxKKHMF/3.png'></BlogCard>
        </section>
      </div>
    </div>
  );
}

export default BrowseRecentPost;
