import { Link } from "react-router-dom"
import SectionTitle from "../../../components/SectionTitle"
import Blog from "../../../components/blog/Blog"
import BlogFullW from "../../../components/blog/BlogFullW"

function Blogs() {
    return (
        <>
        <SectionTitle title="Blogs" position="start"/>
            
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div
          className=" container p-6 mx-auto space-y-6 sm:space-y-12"
          bis_skin_checked="1"
        >
            <BlogFullW/>
          <div
            className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            bis_skin_checked="1"
          >
			<Blog/>
			<Blog/>
			<Blog/>
			<Blog/>
			<Blog/>
			<Blog/>
          </div>
          <div className="flex justify-center" bis_skin_checked="1">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600"
            >
              Load more posts...
            </button>
          </div>
        </div>
      </section>
        </>
    )
}

export default Blogs
