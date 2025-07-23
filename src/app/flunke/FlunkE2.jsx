import tornado from '../../../assets/images/tornado.png'
import bier from '../../../assets/images/bier.png'
import win from '../../../assets/images/win.png'
import bowling from '../../../assets/images/bowling.png'

import aufbau from '../../../assets/videos/aufbau.mp4'
import challenge from '../../../assets/videos/challenge.mp4'

import challenges from '../../../assets/images/challenges.png'

const FlunkE2 = () => {
    return ( <div>

        {/* About Section */}

        <section className="relative h-auto flex flex-col bg-gradient-to-b from-white to-orange-500 overflow-hidden mb-40">
        
            {/* Vignette overlay */}
            
            <div className="absolute w-full h-full bg-white rounded-t-3xl z-20"></div>
            

            {/* Video and Text Container */}

            <div className="container mx-auto px-4 pt-16 z-30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 content-center">

                    {/* Video Container */}
                    <div className="relative aspect-video rounded-lg">
                        <video 
                            autoPlay 
                            playsInline
                            loop
                            muted 
                            className="w-3/4 h-auto object-cover"
                        >
                            <source src={aufbau} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    {/* Text Content */}
                    <div className="text-neutral-700 pt-20 pr-20">
                        <h1 className='text-4xl leading-loose tracking-wide font-syne font-light'>Flunkyball</h1>
                        <p className="text-xl pt-4 leading-loose tracking-wide font-light">
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