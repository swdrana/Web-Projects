function Book() {
  return (
    <article className="flex flex-col dark:bg-gray-50">
      <a
        rel="noopener noreferrer"
        href="#"
        aria-label="Te nulla oportere reprimique his dolorum"
      >
        <img
          alt=""
          className="object-cover w-full h-80 dark:bg-gray-500"
          src="https://source.unsplash.com/200x250/?book"
        />
      </a>
      <div className="flex flex-col flex-1 p-6" bis_skin_checked="1">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Te nulla oportere reprimique his dolorum"
        ></a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"
        >
          Convenire
        </a>
        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
          Te nulla oportere reprimique his dolorum
        </h3>
        <div
          className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600"
          bis_skin_checked="1"
        >
          <span>June 3, 2020</span>
          <span>2.3K views</span>
        </div>
      </div>
    </article>
  );
}

export default Book;
