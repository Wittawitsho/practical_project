import React from 'react';

const Home = () => {
  // ข้อมูลรายการแนะนำ
  const events = [
    {
      title: "Monster Music Festival 2024",
      date: "2-3 พ.ย. 24",
      time: "13:00 - 23:00 น.",
      location: "ศูนย์การประชุมแห่งชาติสิริกิติ์ ฮอลล์ 1-4, 7-8",
      image: "/bg.jpg",
    },
    {
      title: "Another Festival 2024",
      date: "10-11 ธ.ค. 24",
      time: "10:00 - 20:00 น.",
      location: "ห้องประชุมใหญ่, อาคาร XYZ",
      image: "/bg.jpg",
    },
    {
        title: "Another Festival 2024",
        date: "10-11 ธ.ค. 24",
        time: "10:00 - 20:00 น.",
        location: "ห้องประชุมใหญ่, อาคาร XYZ",
        image: "/bg.jpg",
      },
      {
        title: "Another Festival 2024",
        date: "10-11 ธ.ค. 24",
        time: "10:00 - 20:00 น.",
        location: "ห้องประชุมใหญ่, อาคาร XYZ",
        image: "/bg.jpg",
      },
      {
        title: "Another Festival 2024",
        date: "10-11 ธ.ค. 24",
        time: "10:00 - 20:00 น.",
        location: "ห้องประชุมใหญ่, อาคาร XYZ",
        image: "/bg.jpg",
      },
  ];

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
        <div className="bg-red-400 w-full h-[30rem] rounded-lg mt-10 overflow-x-auto">
          <div className="flex whitespace-nowrap">
            {events.map((event, index) => (
              <div key={index} className="bg-gray-400 w-80 h-full rounded-lg flex flex-col items-center mr-5">
                <img src={event.image} alt="bg" className="w-72 h-80 mt-2 rounded-lg" />
                <div className="w-full text-left p-2 ml-5 flex flex-col">
                  <h2 className="text-2xl font-fcfriday mb-5">{event.title}</h2>
                  <span className="font-fcfriday">{event.date}</span>
                  <span className="font-fcfriday">{event.time}</span>
                  <span className="font-fcfriday">{event.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
