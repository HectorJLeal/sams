
// import CustomizedProgressBar from "@/components/circularProgress";
import FrameFullWidth from "@/components/frameFullWidth/frameFullWith";
import OptionFrame from "@/components/optionFrame/optionFrame";
import { useEffect, useState } from "react";

const LoginPage = () => {
    const [isShowLoadingPage, setShowLoadingPage] = useState(true);

    

    useEffect(() => {
        const TimeOut = setTimeout(() => {
            setShowLoadingPage(false)
        }, 2000)
    },[])

    return(
     <>   
        {isShowLoadingPage && 
       <section className="h-screen w-screen relative" style={{backgroundColor: "#004B8D"}}>
            <img className="h-4/6 w-full absolute" src="assets/bgImages/loginBg.png" alt="fondo" />
            <div className="flex flex-col justify-start h-full w-full gap-10">
                <div className="flex justify-center items-center z-10 h-1/6 w-full relative">  
                    <img className="w-5/12 md:w-4/12 lg:w-2/12 absolute top-10 lg:top-15 xl:left-[500px] 2xl:left-[600px]" src="assets/bgImages/samsTitle.png" alt="Titulo Sams" />
                </div>
                <div className="flex justify-center items-center z-10 h-4/6 w-full">   
                    <img className="w-4/6 lg:w-5/12 h-5/6 animation" src="assets/hoodies/loginHoodie.png" alt="hoodie inicio" />
                </div>
                {/* <div className="flex justify-center items-center z-10 h-1/6 w-full relative">    
                    <CustomizedProgressBar classname={"absolute left-20"} />
                </div> */}
            </div>
        </section>
         }
    
  <section className={`${isShowLoadingPage ? "hidden" : "h-screen w-screen"}`}>
    <div className="flex flex-col items-center justify-start my-16 h-full w-full gap-4 md:gap-7">
        <FrameFullWidth 
            titleFrameFull={"¡Sorprendente!"} 
            textFrameFull={"PDF, imagenes, videos e historietas"}
            imageSource={"assets/hoodies/hoodiePage2.png"}
            imageAlt={"hoodie page 2"}
            textClassname="text-end md:text-center w-10/12 text-xs md:text-2xl mr-5"
            bgImage={""} 
        />
        <div className="flex justify-center items-center w-full h-3/6 md:hidden">

            <div className="grid grid-cols-2 w-10/12 h-full gap-2">
                <OptionFrame 
                    icon={"assets/icons/pdfIcon.png"} 
                    altIcon={"icono pdf"}
                    iconText={"Documentos"}
                    linkTo={"/documentsPage"}
                    iconClassName={"absolute top-[20%] left-[35%]"}
                />
                <OptionFrame 
                    icon={"assets/icons/imageIcon.png"} 
                    altIcon={"icono imagen"} 
                    iconText={"Imagenes"}
                    linkTo={"/imagesPage"}
                    iconClassName={"absolute top-[20%] left-[35%]"}
                />
                <OptionFrame 
                    icon={"assets/icons/videosIcon.png"} 
                    altIcon={"icono video"} 
                    iconText={"Videos"}
                    linkTo={"/videosPage"}
                    iconClassName={"absolute top-[20%] left-[35%]"}
                />
                <OptionFrame 
                    icon={"assets/icons/bookIcon.png"} 
                    altIcon={"icono book"}
                    iconText={"Historietas"}
                    linkTo={"/comicsPage"}
                    iconClassName={"absolute top-[20%] left-[35%]"}
                />
            </div>
        </div>

        <div className="hidden md:flex md:justify-center md:items-center md:w-10/12 md:h-3/6 md:gap-10">
            <div className="w-4/12 h-full">
                <OptionFrame 
                        icon={"assets/icons/pdfIcon.png"} 
                        altIcon={"icono pdf"}
                        iconText={"Documentos"}
                        linkTo={"/documentsPage"}
                        iconClassName={"h-[90px] absolute top-[20%] left-[38%]"}
                />
            </div>
            <div className="grid grid-rows-2 w-8/12 h-full gap-7">
                <div className="grid grid-cols-2 gap-7">
                    <OptionFrame 
                        icon={"assets/icons/imageIcon.png"} 
                        altIcon={"icono imagen"} 
                        iconText={"Imagenes"}
                        linkTo={"/imagesPage"}
                        iconClassName={"h-2/6 absolute top-[20%] right-[10%]"}
                    />
                    <OptionFrame 
                        icon={"assets/icons/videosIcon.png"} 
                        altIcon={"icono video"} 
                        iconText={"Videos"}
                        linkTo={"/videosPage"}
                        iconClassName={"h-2/6 absolute top-[20%] right-[10%]"}
                    />
                </div>
            
                    <OptionFrame 
                        icon={"assets/icons/bookIcon.png"} 
                        altIcon={"icono book"}
                        iconText={"Historietas"}
                        linkTo={"/comicsPage"}
                        iconClassName={"h-3/6 absolute top-[25%] right-[5%]"}
                    />
        
            </div>
        </div>
        
    </div>
</section>

    </>
    )
}

export default LoginPage;