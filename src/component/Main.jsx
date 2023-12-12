import Login from "./Login";
import { staffProfile, Services } from "../data/data";
// import image from "../assets/image.jpg";
export default function Main() {
  return (
    <main className="bg-white flex-col">
      {/* section 1 */}
      <div className=" py-20 h-screen  bg-slate-500">
        <div className=" items-center justify-center w-10/12 mx-auto gap-4 md:flex ">
          {/* heading */}
          <div className="text-slate-100 font-bold basis-1/2 text-center md:text-start ">
            <p className="text-4xl">
              <span className="text-yellow-400  ">I.T.S</span> Federal
              University of Technology,
              <span className="text-yellow-400 "> Minna.</span>
            </p>
            <p className="text-sm pt-3">
              Transforming Tomorrow&apos;s Possibilities Through Technology
              Excellence.
            </p>
          </div>
          {/* loging */}
          <Login />
        </div>
      </div>
      {/* section 2 */}
      <div className="flex flex-col w-10/12 mx-auto py-12 gap-8">
        {/* ITS senior staff */}
        <div className="flex  justify-between">
          {staffProfile.map((profile, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center basis-1/4"
            >
              <img
                src={profile.image}
                alt="picture"
                className="aspect-square h-22"
              />
              <p>{profile.name}</p>
              <p>{profile.office}</p>
            </div>
          ))}
        </div>
        {/* <img src="/public/alex.jpeg" alt="logo" /> */}
        {/* ITS services */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-center bg-slate-300 px-6 font-bold text-2xl">
            OUR SERVICES
          </p>
          <div className="flex  justify-between">
            {Services.map((service, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center basis-1/4"
              >
                <p className="text-lg font-semibold">{service.name}</p>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
