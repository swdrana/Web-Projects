import SectionTitle from "../../../components/SectionTitle";

function Videos() {
  return (
    <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
        <SectionTitle title="Gallery" position="start"/>
      <div
        className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4"
        bis_skin_checked="1"
      >
        <img
          src="https://source.unsplash.com/random/301x301/?img?1"
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?0"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?1"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?2"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?3"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?4"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?5"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?6"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?7"
        />
        <img
          src="https://source.unsplash.com/random/302x302/"
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
        />
      </div>
    </section>
  );
}

export default Videos;
