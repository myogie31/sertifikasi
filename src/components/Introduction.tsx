import Image from "next/image";

export default function Introduction(){
    return(
        <>
            <div className="w-screen h-[500px] bg-[#000000] p-8">
                <div className="flex justify-between items-center">
                    <div>
                        <div>
                            <p className="text-white text-2xl font-bold">Teknik Informatika</p>
                            <h2 className="text-7xl text-white font-semibold">Hello, I&apos;m</h2>
                            <h2 className="text-7xl text-white font-semibold">Muhammad Yogie Mayendra</h2>
                        </div>

                        <div className="my-8">
                            <p className="text-white max-w-lg font-mono">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quo. Dolore temporibus deleniti assumenda aperiam aspernatur? Magni officiis asperiores laudantium eum deserunt, cumque reprehenderit quis rerum enim beatae! Id, nesciunt.
                            </p>
                        </div>
                    </div>

                    <div className="relative w-96 h-96">
                        <Image src={'/img/kwon.jpg'} 
                        alt="Muhammad Yogie Mayendra"
                        fill={true} 
                        priority= {true} 
                        className="rounded-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}