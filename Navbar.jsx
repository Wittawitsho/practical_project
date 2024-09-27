import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white p-3">
        {/* container: กำหนดความกว้างของ container ตามขนาดหน้าจอ  mx-auto: ตั้งค่า margin ทางแนวนอนเป็นอัตโนมัติ (auto) เพื่อให้ div อยู่กึ่งกลางหน้าจอ */}
        <div className="container mx-auto"> 
        {/* ใช้ flex เพื่อจัดให้องค์ประกอบใน Navbar อยู่ในแถวเดียวกัน โดยมีการจัดตำแหน่งแนวตั้งและการกระจายองค์ประกอบให้ห่างกัน*/}
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img src="/ticket.png" alt="TicketZone Icon" className="h-8 w-8 mr-2" />
                    <h1 className="text-black font-fcfriday text-3xl">TicketZone</h1>
                </div>
                <div className="flex space-x-10 mr-30">
                    <h2 className="text-black font-fcfriday text-xl">หน้าหลัก</h2>
                    <h2 className="text-black font-fcfriday text-xl">คอนเสิร์ต</h2>
                    <h2 className="text-black font-fcfriday text-xl">โปรโมชัน</h2>
                    <h2 className="text-black font-fcfriday text-xl">สินค้า</h2>
                    <h2 className="text-black font-fcfriday text-xl">ช่วยเหลือ</h2>
                </div>
                <div className="flex space-x-5">
                    <button className="text-blue-500 font-fcfriday text-xl border-2 border-blue-500 px-4 py-2 rounded-lg">ลงทะเบียน</button>
                    <button className="text-white font-fcfriday text-xl border-2 bg-blue-500 px-4 py-2 rounded-lg">เข้าสู่ระบบ</button>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;

