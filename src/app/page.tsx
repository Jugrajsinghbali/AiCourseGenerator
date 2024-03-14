"use client";
import { PlusCircle } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const LandingPage = () => {
  const handleAddButton=async()=>{
      router.push("/generatecourse");
  }
  const session=useSession();
  const router = useRouter();
  return (
    <>
      <div className="bg-pink-00 max-w-screen">
        <div className="p-3 flex justify-start h-screen">
          <div className="h-3/5 w-screen  rounded grid space-y-3">
            <div className=" h-10 rounded-xl bg-gray-100 ">
              <button className="pl-7 pt-2 pb-2 pr-7 rounded-3xl hover:bg-gray-300">
                Add collection {session.data?.user?.email}
              </button>
            </div>
            <div className="">
              <div className="flex justify-between rounded-t-xl bg-gray-100">
                <div className="pt-5 pl-5 font-semibold font-sans">
                  Collection-1
                </div>
                <div className="">
                  <div className="space-x-3 pt-5 pr-5">
                    <button className="text-gray-900 bg-white  font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-2.5 text-center">
                      View
                    </button>
                    <button className="text-gray-900 bg-white  font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-2.5 text-center">
                      Edit Learning Page
                    </button>
                    <button className="text-white bg-blue-700 outline outline-1 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-2.5 text-center">
                      Learner's Access
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 grid rounded-b-xl pl-2">
                <div className="flex flex-row items-center">
                  <div className="bg-blue-300 m-2 h-72 w-72 flex justify-center items-center rounded-xl">
                    {/* <div className="absolute -translate-y-[-9rem] text-center"> */}
                    <div className="text-center text-md p-4">
                      <div className="flex justify-center">
                        <button
                          onClick={handleAddButton}
                          className="rounded shadow-sm font-semibold my-2 "
                        >
                          <PlusCircle className="h-14 w-14" />
                        </button>
                      </div>
                      <p>
                        Start building the course super-fast, either from
                        scratch or using the AI Course Creator.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-1 mt-2">
                <button
                  id="Audience"
                  className="bg-gray-100 pl-7 pt-2 pb-2 pr-7 rounded-3xl hover:bg-gray-300 font-medium text-sm w-full sm:w-auto text-center"
                >
                  + Add collection
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
