import SectionTitle from "../../../components/SectionTitle";
import Book from "./Book";

function Ebook() {
  return (
    <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
        <SectionTitle title="eBooks" position="start"/>
      <div className="container p-6 mx-auto space-y-8" bis_skin_checked="1">
        <div className="space-y-2 text-center" bis_skin_checked="1">
          <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
          <p className="font-serif text-sm dark:text-gray-600">
            Qualisque erroribus usu at, duo te agam soluta mucius.
          </p>
        </div>
        <div
          className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4"
          bis_skin_checked="1"
        >
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
        </div>
      </div>
    </section>
  );
}

export default Ebook;
