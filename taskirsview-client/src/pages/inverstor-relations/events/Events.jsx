import SectionTitle from "../../../components/SectionTitle";

function Events() {const card = (
    <div
      className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"
      bis_skin_checked="1"
    >
      <img
        src="https://source.unsplash.com/random/300x300/?2"
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div
        className="flex flex-col justify-between p-6 space-y-8"
        bis_skin_checked="1"
      >
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
        >
          2023 Annual Report
        </button>
      </div>
    </div>
  );
  return (
    <div className=" container mx-auto overflow-x-auto py-10">
      <SectionTitle position="start" title={"CALENDAR"} />
      <table className=" table table-md table-zebra">
        <tbody>
          <tr>
            <th>Date</th> <th>Activity</th> <th>Detail</th>
          </tr>{" "}
          <tr>
            <td className="calendar-date text-textBlack">
              MARCH 18, 2024 10:00 AM UTC+8
            </td>{" "}
            <td className="calendar-activity text-textBlack">
              2023 Annual Result Announcement Conference
            </td>{" "}
            <td className="calendar-detail">
              <p>
                <a href="https://mobvista.zoom.us/j/85258964409?pwd=Xzdn8JR4nVHABkAG72MuGZ2D7rjfJd.1">
                  https://mobvista.zoom.us/j/85258964409?pwd=Xzdn8JR4nVHABkAG72MuGZ2D7rjfJd.1
                </a>
              </p>
            </td>
          </tr>
          <tr>
            <td className="calendar-date text-textBlack">2023.11.15</td>{" "}
            <td className="calendar-activity text-textBlack">
              Announcement of the Third Quarterly Results for 2023
            </td>{" "}
            <td className="calendar-detail" />
          </tr>
        </tbody>
      </table>


      <>
        <section className=" pt-20">
          <SectionTitle position="start" title={"EARNINGS CALLS"} />
          <div className="container mx-auto my-10">
            <div className="grid gap-10 md:gap-x-20 grid-cols-1 md:grid-cols-3">
              {card}
              {card}
              {card}
              {card}
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default Events;
