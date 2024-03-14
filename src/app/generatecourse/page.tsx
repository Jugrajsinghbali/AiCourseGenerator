const FormSubmission = () => {
  return (
        <div className="bg-blue-00 max-w-screen">
          <div className="flex justify-center items-center h-screen flex-col -mt-12">
            <div className="font-bold text-center text-4xl p-4">
              Learning Journey{" "}
            </div>
            <div className="h-4/5 w-1/2 rounded">
              <div className="p-2 flex justify-between font-medium">
                <div className="font-normal bg-gray-200 rounded-lg px-2 py-2">
                  Enter in a course title, or what you want to learn about. Then
                  enter a list of units, which are the specifics you want to
                  learn. And our AI will generate a course for you!
                </div>
              </div>
              <hr />
              <div className="p-2">
                <form className="max-w-4xl pt-2">
                  <div className="">
                    <label className="text-sm font-bold ">Course Idea</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 font-semibold placeholder-gray-500"
                      placeholder="Description"
                    ></textarea>
                  </div>
                  <div className="mb-5 mt-2">
                    <label className="text-sm font-bold ">Select Title</label>
                    <input
                      type="text"
                      id="profession"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg font-semibold  block w-full p-2.5  placeholder-gray-500 mb-1"
                      placeholder="Select a subject"
                      required
                    />
                    <input
                      type="text"
                      id="profession"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg font-semibold  block w-full p-2.5  placeholder-gray-500"
                      placeholder="Specifics"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label className="text-sm font-bold ">
                      Conclude the Idea
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 font-semibold placeholder-gray-500"
                      placeholder="Description"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex justify-between">
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                      Previous Level
                    </button>
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                      Next Level
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
  );
};

export default FormSubmission;
