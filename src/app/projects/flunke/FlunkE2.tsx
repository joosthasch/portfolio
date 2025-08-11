"use client";

const FlunkE2 = () => {
    return ( <div>

        {/* About Section */}

        <section className="relative h-auto flex flex-col bg-gradient-to-b from-white to-orange-500 overflow-hidden">
        
            {/* Vignette overlay */}
            
            <div className="absolute w-full h-full bg-white rounded-t-3xl z-20"></div>
            

            {/* Video and Text Container */}

            <div className="container mx-auto px-4 pt-16 z-30 mb-40">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-8 content-center">

                    {/* Video Container */}
                    <div className="relative aspect-video rounded-lg flex justify-center items-center">
                        <video 
                            autoPlay 
                            playsInline
                            loop
                            muted 
                            className="w-full max-w-lg h-auto object-cover"
                        >
                            <source src="/assets/flunke/aufbau.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    {/* Text Content */}
                    <div className="text-neutral-700 px-8 pt-8 md:pt-20 md:pr-20">
                        <h1 className='text-2xl md:text-4xl leading-loose tracking-wide font-syne font-light'>Flunkyball</h1>
                        <p className="text-l md:text-xl pt-4 leading-loose tracking-wide font-light">
                            Flunkyball ist ein beliebtes Partyspiel, bei dem zwei Teams gegeneinander antreten und versuchen, eine Flasche in der Mitte zu treffen, während sie ihre Getränke leeren. Mit Flunk-E bringen wir das Spiel auf ein neues Level: Durch automatische Erkennung von Treffern und Würfen sowie zusätzliche Challenges wird das Spielerlebnis dynamischer und interaktiver – für noch mehr Spielspaß.
                        </p>
                    </div>
                </div>
            </div>

            {/* Cards */}


            {/* Keep the vignette effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_30%,rgba(0,0,0,0.7))] pointer-events-none z-10"></div>
        
        </section>
    </div>

    )
}

export default FlunkE2