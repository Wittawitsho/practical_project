import React from 'react';

const Home = () => {
  return (
    <div>
      {/* ใช้ flex เพื่อจัดตำแหน่ง div ให้อยู่กลางหน้าจอในแนวนอนและจัดแนวแกนกลางในแนวตั้ง */}
      <div className="flex justify-center items-center">
        {/* สี่เหลี่ยมสีดำ */}
        <div className="bg-black w-10/12 h-96 rounded-lg mt-5"></div>
        {/* สี่เหลี่ยมสีขาว */}
        <div className="bg-white w-4/6 h-16 rounded-lg absolute p-2 top-1/2 mt-24 drop-shadow-lg">
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="  ค้นหา"
              className="border border-gray-300 rounded-md p-2 w-full mr-5 focus:outline-none placeholder:font-fcfriday text-xl"
            />
            <button className="bg-blue-500 text-white font-fcfriday text-2xl rounded-md py-2 px-16">
              ค้นหา
            </button>
          </div>
        </div>
      </div>
      {/* แสดงรายการแนะนำด้านล่าง */}
      <div className="mt-24 ml-32 mr-32">
        <h1 className="font-fcfriday text-3xl">รายการแนะนำ</h1>
        <div className="bg-red-400 w-full h-[30rem] rounded-lg mt-10">
          {/* ก้อนข้อมูลแรก */}
          <div className="bg-gray-400 w-80 h-full rounded-lg flex flex-col items-center">
            <img src="/bg.jpg" alt="bg" className="w-72 h-80 mt-5 rounded-lg" />
            <div className="w-full text-left p-2 ml-5 flex flex-col">
              <h2 className="text-2xl font-fcfriday mb-5">Monster Music Festival 2024</h2>
              <span className="font-fcfriday">2-3 พ.ย. 24</span>
              <span className="font-fcfriday">13:00 - 23:00 น.</span>
              <span className="font-fcfriday">ศูนย์การประชุมแห่งชาติสิริกิติ์ ฮอลล์ 1-4, 7-8</span>
            </div>
          </div>

          {/* ก้อนข้อมูลที่สอง */}
          <div className="bg-gray-400 w-80 h-full rounded-lg flex flex-col items-center mt-5"> {/* เพิ่ม mt-5 เพื่อให้มีระยะห่าง */}
            <img src="/bg.jpg" alt="bg" className="w-72 h-80 mt-5 rounded-lg" />
            <div className="w-full text-left p-2 ml-5 flex flex-col">
              <h2 className="text-2xl font-fcfriday mb-5">Monster Music Festival 2024</h2>
              <span className="font-fcfriday">2-3 พ.ย. 24</span>
              <span className="font-fcfriday">13:00 - 23:00 น.</span>
              <span className="font-fcfriday">ศูนย์การประชุมแห่งชาติสิริกิติ์ ฮอลล์ 1-4, 7-8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
