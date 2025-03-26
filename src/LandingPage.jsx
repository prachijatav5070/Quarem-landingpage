export default function LandingPage() {
    return (
      <div className="bg-white pb-32">
        {/* Heading Section */}
        <div className="text-center pt-24 pb-16">
          <h1 
            data-css="tve-u-171a784be59" 
            className="text-4xl text-gray-500 font-sans font-normal"
          >
            It all starts with the <a href="https://quarem.com/lease-abstracting/" className="text-blue-600 font-semibold tve-froala hover:underline" target="_blank" style={{ outline: "currentcolor none medium" }}>lease abstract</a>
          </h1>
          <p className="mt-12 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            This is where you capture and arrange over 400 key points of your lease, 
            including income/expense schedule, lease options, parking, TI, clauses, and more.
          </p>
        </div>
        
        {/* Image Section with White and Light Blue Split */}
        <div className="relative flex space-y-16 justify-center mt-32 pb-16">
          {/* First Image */}
          <img 
            src="https://quarem.com/wp-content/uploads/2020/08/LeaseArrowsComb.png" 
            alt="Lease Abstract" 
            className="rounded-lg shadow-lg w-3/4 md:w-1/2 relative z-10"
          />

          {/* Half Light Blue Background Overlay */}
          <div className="absolute bottom-0 w-full h-1/2 bg-blue-100 z-0"></div>
        </div>
  
        {/* Content Split Section */}
        <div className="relative bg-blue-100 py-24 px-12 md:px-24 rounded-t-3xl mt-[-120px] z-10 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Side Text */}
            <p className="ml-12 mr-24 text-lg text-gray-700 leading-relaxed">
              Within each section of Quarem's commercial lease management software, you can track 
              the actual lease language in case you need to reference it in the future.
            </p>
             
            {/* Right Side Image */}
            <div className="flex justify-center">
              <img 
                src="https://quarem.com/wp-content/uploads/2022/03/Lease-Language-1000c2022.png" 
                alt="Lease Management Software" 
                className="rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3 xl:w-full h-auto max-h-200 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Lease Version Control Section */}
        <div className="relative bg-blue-100 py-24 px-12 md:px-24 rounded-t-3xl mt-[-120px] z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Right Side Image */}
            <div className="flex justify-center">
              <img 
                src="https://quarem.com/wp-content/uploads/2022/03/Lease-Version-Control-1000-2022.png" 
                alt="Lease Version Control" 
                className="rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3 xl:w-full h-auto max-h-200 object-contain"
              />
            </div>
              
            {/* Left Side Text */}
            <p className="ml-12 mr-24 text-lg text-gray-700 leading-relaxed">
              As you move through the lifecycle of your lease, you can easily document the changes 
              with Lease Version Control. With every new amendment or renewal, a new version is added to the timeline.
            </p>
          </div>
        </div>
        <div className="relative bg-blue-100 py-24 px-12 md:px-24 rounded-t-3xl mt-[-120px] z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Right Side Image */}
            <div className="flex justify-center">
              
              <p className="ml-12 mr-24 text-lg text-gray-700 leading-relaxed">
              Get into the details of a single lease
               with the Lease Summary...
            </p>
            </div>
            <img 
                src="https://quarem.com/wp-content/uploads/2022/03/NewLeaseSummary-03x-2022.png" 
                alt="Lease Version Control" 
                className="rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3 xl:w-full h-auto max-h-200 object-contain"
              />
            {/* Left Side Text */}
            
          </div>
        </div>
      </div>
    );
}
