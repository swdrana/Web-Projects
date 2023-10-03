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
        <p className=" text-primary font-bold underline mt-5">
          Last Update: 3 Oct 2023
        </p>
        <p className=" text-secondary font-bold text-xl">
          এখন আপনি Login ও নতুন Account তৈরি করতে পারবেন। 
        </p>
      </div>
      {/* <div className=" text-left mx-auto w-1/2">
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
            <li>- Website icon {'(Feb icon'} added in the title bar</li>
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
      </div> */}
      <div className=" mx-auto border my-6 text-green-700">
        <div className=" border">
          <b>CEO:</b>
          <p>Md. Mehedi Hasan</p>
        </div>
        <div className="border">
          <b>Phone/ WhatsApp:</b>
          <p>+8801793143054</p>
        </div>
        <div className=" border">
          <b>Facebook:</b>
          <p>
            <a href="https://www.facebook.com/sheraorganicshop">
              https://www.facebook.com/sheraorganicshop
            </a>
          </p>
        </div>
      </div>
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
