function Hero() {
  return (
    <hero className="flex justify-between mt-14 items-center mx-auto">
      <div className="flex items-center">
        <div className="text-left">
          <span className="font-sans  text-2xl sm:text-5xl md:text-6xl lg:text-7xl mb-12 pt-10" >
            integrate your stack automate your work<br/>
          </span>
            <div className="mt-10">
          <span className="text-xl sm:text-2xl text-gray-500 pt-10 mt-10 ">
            Evolve at the speed and scale of your business <br/>with the leader in low-code automation<br/>
          </span>

            </div>

          <button className="bg-black text-white py-2 px-4 rounded-full font-bold mt-24 ">
            Get Started
          </button><br/>
          
           <div className="pt-10">

          <span className="mt-4 text-sm text-gray-400">Working with the best</span>
          <div className="flex mt-10 space-x-5">

          <img className="w-[5rem] h-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjNv5-0kn8n4SNednUqpCzmikSb2Z524pG_atbziDvORmv3gEGRNcjO-3dLbi2fFaRocs&usqp=CAU" alt="image" />

          <img className="w-[5rem] h-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL0icZQkkphQPmj6F6JfiYoV9rd1Aqnilzdw&usqp=CAU" alt="image" />

          <img className="w-[4rem] h-100" src="https://seeklogo.com/images/B/black-panther-icon-logo-E5CD7FEC30-seeklogo.com.png" alt="image" />
          </div>

           </div>



        </div>

        <img className="w-[45rem] h-100 ml-4 hidden md:block" src="https://cdn.dribbble.com/userupload/7976657/file/original-b7c83f56aa7f42825973f1fb585fce20.png?resize=752x752&vertical=center" alt="image" />


      </div>
    </hero>
  )
}

export default Hero;
