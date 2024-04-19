
    import FrameFullWidth from "@/components/frameFullWidth/frameFullWith";
    import Arrow from "@/components/arrow/arrow";
    import Archives from "@/components/archives/archives";
    
    const  VideosPage = () =>{
    
    
        const videos = [
            "Video SM celulares-tablet",
            "Video SM computo",
            "Video SM electronica",
            "Video SM linea blanca",
            "Video SM Pantallas"
        ]
    
        return (
            <section className="h-screen w-screen relative">
                <div className="flex w-full items-center my-5">
                    <Arrow
                        backTo={"/"}  
                        currentPage={"Documentos"}
                    />
                </div>
    
                <div className="flex flex-col items-center h-5/6 w-full gap-4">
                    <FrameFullWidth 
                     textFrameFull={"Consulta nuestra información en los archivos adjuntos"}
                     imageSource={"assets/hoodies/hoodieAssetsPages.png"}
                     imageAlt={"hoodie page 2"}
                     textClassname="text-end w-full text-xs absolute top-10 right-6"
                     bgImage={"assets/bgImages/bgline.png"}
                    />
                    <div className="flex flex-col w-11/12 items-center mt-5">
                        <Archives 
                            icon={"assets/icons/videosIcon.png"}
                            pdfAlt={"videosIcon"} 
                            archivetitle={videos[0]} 
                        />
                        <Archives 
                            icon={"assets/icons/videosIcon.png"}
                            pdfAlt={"videosIcon"} 
                            archivetitle={videos[1]} 
                        />
                        <Archives 
                            icon={"assets/icons/videosIcon.png"}
                            pdfAlt={"videosIcon"} 
                            archivetitle={videos[2]} 
                        />
                        <Archives 
                            icon={"assets/icons/videosIcon.png"}
                            pdfAlt={"videosIcon"} 
                            archivetitle={videos[3]} 
                        />
                        <Archives 
                            icon={"assets/icons/videosIcon.png"}
                            pdfAlt={"videosIcon"} 
                            archivetitle={videos[4]} 
                        />
                    </div>  
                </div>
            
    
            </section>
        )
    }   

    export default VideosPage;