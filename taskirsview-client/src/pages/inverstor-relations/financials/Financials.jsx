import SectionTitle from "../../../components/SectionTitle";

function Financials() {
  const card = (
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
    <div className=" mt-8">
      <>
        <SectionTitle position="start" title={"FINANCIAL HIGHLIGHTS"} />
        <section className="">
          <div className="container flex flex-col justify-center p-6 mx-auto gap-5  lg:flex-row lg:justify-between w-full">
            <div className=" w-full  md:w-1/2">
              <table className=" table table-zebra">
                <tbody>
                  <tr>
                    <th width="auto" rowSpan={1} colSpan={1} />
                    <th
                      style={{ textAlign: "left" }}
                      width="auto"
                      rowSpan={1}
                      colSpan={1}
                    >
                      2023
                    </th>
                    <th
                      style={{ textAlign: "left" }}
                      width="auto"
                      rowSpan={1}
                      colSpan={1}
                    >
                      2022
                    </th>
                    <th
                      style={{ textAlign: "left" }}
                      width="auto"
                      rowSpan={1}
                      colSpan={1}
                    >
                      YoY
                    </th>
                  </tr>
                  <tr>
                    <td width="auto" rowSpan={1} colSpan={1} />
                    <td width="auto" rowSpan={1} colSpan={1}>
                      US$'000{" "}
                    </td>
                    <td width="auto" rowSpan={1} colSpan={1}>
                      US$'000
                    </td>
                    <td width="auto" rowSpan={1} colSpan={1} />
                  </tr>
                  <tr>
                    <td width="auto" rowSpan={1} colSpan={1}>
                      Revenue
                    </td>
                    <td width="auto" rowSpan={1} colSpan={1}>
                      1,054,092
                    </td>
                    <td width="auto" rowSpan={1} colSpan={1}>
                      894,405
                    </td>
                    <td width="auto" rowSpan={1} colSpan={1}>
                      17.9%
                    </td>
                  </tr>
                  <tr>
                    <td width="auto" rowSpan={1} colSpan={1}>
                      Net Revenue<sup>(1)</sup>
                    </td>
                    <td width="auto" rowSpan={1} colSpan={1}>
                      284,204
                    </td>
                    <td width="auto" rowSpan={1} colSpan={1}>
                      224,717
                    </td>
                    <td width="auto" rowSpan={1} colSpan={1}>
                      26.5%
                    </td>
                  </tr>
                  <tr>
                    <td width="auto" rowSpan={1} colSpan={1}>
                      Gross Profit{" "}
                    </td>
                    <td width="auto" rowSpan={1} colSpan={1}>
                      217,291
                    </td>
                    <td width="auto" rowSpan={1} colSpan={1}>
                      177,029
                    </td>
                    <td width="auto" rowSpan={1} colSpan={1}>
                      22.7%
                    </td>
                  </tr>
                  <tr>
                    <td width="auto" rowSpan={1} colSpan={1}>
                      Net Profit for the Period
                    </td>
                    <td width="auto" rowSpan={1} colSpan={1}>
                      18,588
                    </td>
                    <td width="auto" rowSpan={1} colSpan={1}>
                      10,190
                    </td>
                    <td width="auto" rowSpan={1} colSpan={1}>
                      82.4%
                    </td>
                  </tr>
                  <tr>
                    <td width="auto" rowSpan={1} colSpan={1}>
                      Adjusted Net Profit<sup>(2)</sup>
                    </td>
                    <td width="auto" rowSpan={1} colSpan={1}>
                      19,120
                    </td>
                    <td width="auto" rowSpan={1} colSpan={1}>
                      9,699
                    </td>
                    <td width="auto" rowSpan={1} colSpan={1}>
                      97.1%
                    </td>
                  </tr>
                  <tr>
                    <td width="auto" rowSpan={1} colSpan={1}>
                      Adjusted EBITDA<sup>(3)</sup>
                    </td>
                    <td width="auto" rowSpan={1} colSpan={1}>
                      105,270
                    </td>
                    <td width="auto" rowSpan={1} colSpan={1}>
                      36,135
                    </td>
                    <td width="auto" rowSpan={1} colSpan={1}>
                      191.3%
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                <br />
              </p>
            </div>
            <div className=" w-full md:w-1/2">
              <h3 className=" text-xl font-bold">NOTES:</h3>
              <div className=" flex flex-col gap-5">
                <p>
                  (1) Net revenue is not an IFRS measure. We define net revenue
                  as revenue adjusted by deducting cost distributed to the
                  traffic publishers.
                </p>
                <p>
                  (2) Adjusted net profit/(loss)is not an IFRS measure. We
                  define adjusted net profit/(loss) as profit/(loss) for the
                  Reporting Period adjusted by adding back or deducting
                  share-based compensation expenses, investment gain/(loss) from
                  financial assets at fair value through profit or loss and gain
                  from change in fair value of derivative financial liabilities.
                </p>
                <p>
                  (3) Adjusted EBITDA is not an IFRS measure. We define adjusted
                  EBITDA as EBITDA (which is profit from operations plus
                  depreciation and amortization expenses, which is not an IFRS
                  measure) for the Reporting Period adjusted by adding back or
                  deducting share-based compensation expenses and investment
                  gain/(loss) from financial assets at fair value through profit
                  or loss.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
      <>
        <section className=" mt-10">
          <SectionTitle position="start" title={"PERFORMANCE REPORT"} />
          <div className="container mx-auto my-10">
            <div className="grid gap-5 md:gap-x-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {card}
              {card}
              {card}
              {card}
              {card}
              {card}
              {card}
              {card}
            </div>
          </div>
        </section>
      </>
      <>
        <section className=" mt-10">
          <SectionTitle position="start" title={"BUSINESS BRIEFING"} />
          <div className="container mx-auto my-10">
            <div className="grid gap-5 md:gap-x-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {card}
              {card}
              {card}
              {card}
              {card}
              {card}
              {card}
              {card}
            </div>
          </div>
        </section>
      </>
      <>
        <section className=" mt-10">
          <SectionTitle position="start" title={"LISTING DOCUMENTS"} />
          <div className="container mx-auto my-10">
            <div className="grid gap-5 md:gap-x-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {card}
              {card}
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default Financials;
