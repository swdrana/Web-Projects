function App() {
  return (
    <div className=" text-center">
      <h1 className="  text-5xl my-5 text-green-700 ">
        Welcome to Shera Organic Shop.
      </h1>
      <div className="my-6">
        <p>
          বর্তমানে আমাদের website এর কাজ চলছে, খুব তাড়াতাড়ি এখানে update পাবেন।
        </p>
        <p>
          এখন আমাদের ফেসবুক পেজ থেকে অর্ডার করতে পারেন, আগামী <b>শুক্রবারের</b>{" "}
          মধ্যে আমাদের এই website এর নতুন আপডেট আসবে ইনশাল্লাহ।
        </p>
      </div>
      <div className=" text-left mx-auto w-1/2">
        <h3 className=" text-2xl underline text-teal-900 text-center">Update History</h3>
        <p>
          <b>1st Create: 21 Aug 2023</b> Lunch Website & give Massege about our
          Website.
        </p>
        <p>
          <b>25 Aug 2023:</b> 
          <ul className=" ml-5">
            <li>- Update Website Security. Now, this website is
          secure so, you can use happily.</li>
            <li>- Now the website develop with the most popular <b className=" text-blue-500">React JS</b> Web Technology</li>
          </ul>
        </p>
        <p>
          <b>26 Aug 2023:</b> 
          <ul className=" ml-5">
            <li>- Header Added</li>
            <li>- Now you can go Login Page without Loading the page.</li>
            <li>- No valuable information available in the Login Page.</li>
            <li>- Dark Mode Feature Added {'('}if your device set dark mode it automatically use dark mode option{')'}.</li>
          </ul>
        </p>
      </div>
      <table className=" mx-auto border my-6 text-green-700">
        <tr className=" border">
          <th>CEO:</th>
          <td>Md. Mehedi Hasan</td>
        </tr>
        <tr className="border">
          <th>Phone/ WhatsApp:</th>
          <td>+8801793143054</td>
        </tr>
        <tr className=" border">
          <th>Facebook:</th>
          <td>
            <a href="https://www.facebook.com/sheraorganicshop">
              https://www.facebook.com/sheraorganicshop
            </a>
          </td>
        </tr>
      </table>
      <hr />
      <div className="text-sm">
        <h5>Developer: Rana</h5>
        <p>Whatsapp: 01772651051</p>
        <a className=" link-primary" href="http://fb.com/swdrana">Facebook</a>
      </div>
    </div>
  );
}

export default App;