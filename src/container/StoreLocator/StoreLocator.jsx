import MapLocation from "../MapLocation/MapLocation";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function StoreLocator() {
  return (
    <>
      <div className="p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Left Section: Text */}
        <div>
          <div className="text-[#000000] font-semibold text-2xl">
            Find a store near you
          </div>
          <div className="text-[#383838]">
            Get free eye test & eye checkup by trained optometrist and eye
            specialist
          </div>
        </div>

        {/* Middle Section: Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <div className="text-[#383838] border p-4 rounded-2xl flex items-center gap-2 cursor-pointer">
            <SearchIcon style={{ color: "#383838" }} />
            <span>Search by state/pincode/Locality</span>
          </div>

          {/* Use Current Location */}
          <div className="text-[#383838] border p-4 rounded-2xl flex items-center gap-2 cursor-pointer">
            <LocationOnOutlinedIcon style={{ color: "#383838" }} />
            <span>Use my current location</span>
          </div>
        </div>

        {/* Right Section: Help */}
        <div className="text-[#383838] flex items-center gap-2 cursor-pointer">
          <WhatsAppIcon style={{ color: "#383838" }} />
          <span>Need Help?</span>
        </div>
      </div>

      <div className="border border-[#7D7D7D]"></div>
      <div className="p-4">
        <div className="flex flex-col lg:flex-row justify-between gap-4 mb-4">
          {/* Left Side */}
          <div className="flex-1">
            <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden">
              <div className="bg-[#0A492E] p-7 flex justify-center items-center flex-col gap-2 text-[#fff] font-bold text-shadow-lg/20">
                <div>KJAR EYEWEAR</div>
                <div className="text-2xl md:text-3xl text-center">
                  KJAR EYEWEAR
                </div>
                <div className="text-sm md:text-base text-center">
                  Premium, Elegant, Stylish
                </div>
                <div className="border p-3 bg-[#fff] text-[#0A492E] font-bold rounded-2xl cursor-pointer mt-2 text-center">
                  SHOP NOW
                </div>
              </div>
              <div className="w-full lg:w-80 h-60 md:h-72 lg:h-80 overflow-hidden lg:rounded-r-2xl">
                <img
                  src="https://kjar.in/images/bgImg7.png"
                  alt="Big-Img"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 w-full lg:w-[42rem] rounded-2xl overflow-hidden">
            <MapLocation />
          </div>
        </div>

        {/* Store Available Stores */}
        <div className="mt-4 mb-4">
          <div className="text-2xl font-semibold mb-3">
            Store Available Stores
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 text-[#383838] font-bold">
            <div>Delhi</div>
            <div>Gurgaon</div>
            <div>Delhi</div>
            <div>Gurgaon</div>
            <div>Delhi</div>
            <div>Gurgaon</div>
            <div>Delhi</div>
            <div>Gurgaon</div>
            <div>Delhi</div>
            <div>Gurgaon</div>
            <div>Delhi</div>
            <div>Gurgaon</div>
            <div>Delhi</div>
            <div>Gurgaon</div>
          </div>
        </div>

        {/* Our Services */}
        <div>
          <div className="text-2xl mb-1">Our Services</div>
          <div className="mb-3">
            Experience the KJAR Eyewear Series — where sophistication meets
            functionality. Our carefully curated collection of eyeglasses,
            sunglasses, and lenses is designed to elevate every look. From bold
            trendsetters to timeless classics, theres a KJAR frame tailored for
            every face and every lifestyle.
          </div>
          <div className="mb-6">
            We take pride in the precision and quality behind every KJAR design.
            That&apos;s why we offer complimentary repair services on all
            purchases — ensuring your eyewear stays as sharp and resilient as
            your vision. Whether it&apos;s a quick fix or a detailed tune-up,
            weve got you covered.
          </div>
        </div>
        {/* Why Choose Us? */}
        <div>
          <div className="text-2xl mb-1">Why Choose Us?</div>
          <div className="mb-3">
            At KJAR Eyewear, your eyes are in the hands of trained specialists
            equipped with state-of-the-art diagnostic technology. Every store is
            designed to deliver precision-driven eye care, ensuring you receive
            accurate evaluations and the highest standard of service in the
            industry.
          </div>
          <div className="mb-6">
            Our philosophy is simple — you come first. From personalized frame
            recommendations to perfectly tailored lenses, the KJAR experience is
            seamless, supportive, and entirely customer-focused. We&apos;re here
            to make every visit memorable and every purchase perfect.
          </div>
        </div>
      </div>
    </>
  );
}
