import Image from"next/image"

type TechCard = {
    imageUrl : string;
    techStack : string;
}
export default function TechCard({ imageUrl, techStack }: TechCard){
    return(
        <>
            <div className="w-48 h-48 flex justify-center items-center shadow-lg drop-shadow overflow-hidden rounded-3xl
            bg-[#000000] bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 flex-col 
            hover:bg-[#000000] hover:scale-110 duration-300">
                <div className="relative object-cover w-20 h-20">
                    <Image src={imageUrl} alt="a" fill={true}/>
                </div>
                <p className="text-white text-center text-base leading-4 mt-4">
                    {techStack}
                </p>
            </div>
        </>
    )
}