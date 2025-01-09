import TechCard from "./TechCard";

export default function Tech(){
    return (    
        <>                  
            <div className="bg-[#A31D1D] w-screen min-h-[300px] p-8">
                    <h1 className="text-4x1 text-white font-bold mb-4">Techs</h1>
               <div className="w-32 border-2 mb-8" />
                 <div className="flex justify-center items-center w-full flex-wrap gap-10">
                  <TechCard imageUrl="/img/c.png" techStack="css" />
                  <TechCard imageUrl="/img/js.png" techStack="java scrip" />
                  <TechCard imageUrl="/img/python.png" techStack="python" />
                </div>
            </div>
        </>
    )
}