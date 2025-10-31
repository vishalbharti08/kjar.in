import { Helmet } from "react-helmet-async";

export default function BuyingGuide() {
  return (
    <>
      <Helmet>
        <title>Frame & Face Shapes – Eyewear Buying Guide | KJAR</title>
        <meta
          name="description"
          content="Discover which eyeglass frames best suit your face shape. Learn how to match styles like round, cat-eye, aviator, and more to oval, diamond, and square face shapes."
        />
      </Helmet>
      <div className="p-4">
        {/* Top Box  */}
        <div className="flex flex-col gap-3 justify-center px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-6">
          <div className="text-[#343434] font-bold text-xs sm:text-sm md:text-base">
            OWN A SUCCESSFUL BUSINESS
          </div>
          <div className="text-[#03711B] font-bold text-2xl sm:text-3xl md:text-4xl">
            Frame & Face Shapes
          </div>
          <div className="text-[#383838] font-semibold text-xs sm:text-sm md:text-base max-w-4xl">
            Even with uncountable designs and styles out there, there are only a
            few chosen ones which complement our look every day. Your face shape
            plays a very important role to determine which frame would look the
            best on you and match your personal style statement.
          </div>
        </div>

        {/* Face Shape Box */}
        <div className="overflow-x-auto w-full mt-4 mb-20">
          <table className="min-w-[700px] w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4"></th>
                <th className="p-4">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      src="https://kjar.in/images/Oval_face.png"
                      alt="Oval_Shape"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                    <div className="text-[#03711B] font-bold text-xl">OVAL</div>
                    <div className="flex flex-col justify-center items-center text-xs">
                      <div>Symmetrical,</div>
                      <div>defined cheekbones</div>
                    </div>
                  </div>
                </th>
                <th className="p-4">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      src="https://kjar.in/images/Diamond_face.png"
                      alt="Diamond_Shape"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                    <div className="text-[#03711B] font-bold text-xl">
                      DIAMOND
                    </div>
                    <div className="flex flex-col justify-center items-center text-xs">
                      <div>Narrow forehead,</div>
                      <div>pointed jawline</div>
                    </div>
                  </div>
                </th>
                <th className="p-4">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      src="https://kjar.in/images/Round_face.png"
                      alt="Round_Shape"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                    <div className="text-[#03711B] font-bold text-xl">
                      ROUND
                    </div>
                    <div className="flex flex-col justify-center items-center text-xs">
                      <div>Round chin,</div>
                      <div>wide cheeks</div>
                    </div>
                  </div>
                </th>
                <th className="p-4">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      src="https://kjar.in/images/Rectangle_face.png"
                      alt="Rectangle_Shape"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                    <div className="text-[#03711B] font-bold text-xl">
                      RECTANGLE
                    </div>
                    <div className="flex flex-col justify-center items-center text-xs">
                      <div>Wide cheeks,</div>
                      <div>wide chin</div>
                    </div>
                  </div>
                </th>
                <th className="p-4">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      src="https://kjar.in/images/V_Triangle_face.png"
                      alt="V-Triangle_Shape"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                    <div className="text-[#03711B] font-bold text-xl">
                      V-TRIANGLE
                    </div>
                    <div className="flex flex-col justify-center items-center text-xs">
                      <div>Wide cheeks,</div>
                      <div>tapered chin</div>
                    </div>
                  </div>
                </th>
                <th className="p-4">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      src="https://kjar.in/images/Long_face.png"
                      alt="Long_Shape"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                    <div className="text-[#03711B] font-bold text-xl">LONG</div>
                    <div className="flex flex-col justify-center items-center text-xs">
                      <div>Elongated features,</div>
                      <div>from forehead to chin</div>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 text-[#03711B] font-bold text-xl text-center">
                  ROUND
                </td>
                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Round_W.png"
                      alt="R1"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Round_B.png"
                      alt="R2"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Round_W.png"
                      alt="R3"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Round_B.png"
                      alt="R4"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Round_B.png"
                      alt="R5"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Round_B.png"
                      alt="R6"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="7">
                  <div className="border border-[#7D7D7D] w-full mt-2 mb-2"></div>
                </td>
              </tr>
              <tr>
                <td className="p-4 text-[#03711B] font-bold text-xl text-center">
                  CAT-EYE
                </td>
                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Cat_Eye_B.png"
                      alt="C1"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Cat_Eye_W.png"
                      alt="C2"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Cat_Eye_W.png"
                      alt="C3"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Cat_Eye_B.png"
                      alt="C4"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Cat_Eye_B.png"
                      alt="C5"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Cat_Eye_B.png"
                      alt="C6"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="7">
                  <div className="border border-[#7D7D7D] w-full mt-2 mb-2"></div>
                </td>
              </tr>
              <tr>
                <td className="p-4 text-[#03711B] font-bold text-xl text-center">
                  RECTANGLE
                </td>
                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Rectangle_B.png"
                      alt="Rec1"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Rectangle_W.png"
                      alt="Rec2"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Rectangle_B.png"
                      alt="Rec3"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Rectangle_W.png"
                      alt="Rec4"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Rectangle_W.png"
                      alt="Rec5"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Rectangle_W.png"
                      alt="Rec6"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="7">
                  <div className="border border-[#7D7D7D] w-full mt-2 mb-2"></div>
                </td>
              </tr>
              <tr>
                <td className="p-4 text-[#03711B] font-bold text-xl text-center">
                  AVIATOR
                </td>
                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Aviator_B.png"
                      alt="A1"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Aviator_B.png"
                      alt="A2"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Aviator_B.png"
                      alt="A3"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Aviator_B.png"
                      alt="A4"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Aviator_B.png"
                      alt="A5"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Aviator_B.png"
                      alt="A6"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="7">
                  <div className="border border-[#7D7D7D] w-full mt-2 mb-2"></div>
                </td>
              </tr>
              <tr>
                <td className="p-4 text-[#03711B] font-bold text-xl text-center">
                  WAYFARER
                </td>
                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Wayfarer_B.png"
                      alt="W1"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Wayfarer_W.png"
                      alt="W2"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Wayfarer_W.png"
                      alt="W3"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Wayfarer_B.png"
                      alt="W4"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Wayfarer_B.png"
                      alt="W5"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Wayfarer_B.png"
                      alt="W6"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="7">
                  <div className="border border-[#7D7D7D] w-full mt-2 mb-2"></div>
                </td>
              </tr>
              <tr>
                <td className="p-4 text-[#03711B] font-bold text-xl text-center">
                  SQUARE
                </td>
                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Square_B.png"
                      alt="S1"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Square_W.png"
                      alt="S2"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Square_B.png"
                      alt="S3"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Square_W.png"
                      alt="S4"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Square_B.png"
                      alt="S5"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Square_W.png"
                      alt="S6"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="7">
                  <div className="border border-[#7D7D7D] w-full mt-2 mb-2"></div>
                </td>
              </tr>
              <tr>
                <td className="p-4 text-[#03711B] font-bold text-xl text-center">
                  HEXAGONAL
                </td>
                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Hexagonal_B.png"
                      alt="H1"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Hexagonal_B.png"
                      alt="H2"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Hexagonal_W.png"
                      alt="H3"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Hexagonal_W.png"
                      alt="H4"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Hexagonal_B.png"
                      alt="H5"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Hexagonal_B.png"
                      alt="H6"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="7">
                  <div className="border border-[#7D7D7D] w-full mt-2 mb-2"></div>
                </td>
              </tr>
              <tr>
                <td className="p-4 text-[#03711B] font-bold text-xl text-center">
                  OVAL
                </td>
                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Oval_W.png"
                      alt="O1"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Oval_B.png"
                      alt="O2"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Oval_W.png"
                      alt="O3"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Oval_B.png"
                      alt="O4"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Oval_W.png"
                      alt="O5"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex justify-center">
                    <img
                      src="https://kjar.in/images/Oval_B.png"
                      alt="O6"
                      className="w-16 h-auto"
                      loading="lazy"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="7">
                  <div className="border border-[#7D7D7D] w-full mt-2 mb-2"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
