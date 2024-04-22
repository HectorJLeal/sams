import FrameFullWidth from "@/components/frameFullWidth/frameFullWith";
import Arrow from "@/components/arrow/arrow";
import Archives from "@/components/archivesfiles/archives";
import BasicBreadcrumbs from "@/components/breadcrumb/breadcrumb";
import { comics } from "@/utils/constants";
import { keys } from "@/utils/constants";
import { useState } from "react";
import ContentPage from "../contentPage";
import { findUrl } from "@/utils/functions";

const ComicsPage = () =>{

    const [selectedComic, setSelectedComic] = useState(null);
    const [file, setFile] = useState(keys[2])
    
    const handlePdfClick = (archiveTitle) => {
        setSelectedComic(archiveTitle);
    };

    return (
    <> 
        <section className={`${selectedComic === null ? "h-screen w-screen relative" : "hidden"}`}>
            <div className="flex w-full items-center my-5">
                <Arrow
                    backTo={"/"}
                    currentPage={"Historietas"}
                />
                <BasicBreadcrumbs
                        goTo={"/comicsPage"}
                        previousPage={"Historietas"}
                        page={""}
                />
            </div>

            <div className="flex flex-col items-center h-5/6 w-full gap-4">
                <FrameFullWidth 
                 textFrameFull={"Consulta nuestra información en los archivos adjuntos"}
                 imageSource={"assets/hoodies/hoodieAssetsPages.png"}
                 imageAlt={"hoodie page 2"}
                 textClassname="text-end w-full text-xs md:text-2xl lg:text-3xl md:text-center absolute top-10 md:top-7 right-6"
                 bgImage={"assets/bgImages/bgline.png"}
                />
            <div className="flex flex-col w-11/12 items-center mt-5">
                {comics.map(archiveTitle => (
                    <Archives 
                        key={archiveTitle}
                        icon={"assets/icons/bookIcon.png"}
                        pdfAlt={"pdfIcon"} 
                        archivetitle={archiveTitle} 
                        onClick={() => handlePdfClick(archiveTitle)}
                        downloadArchive={() => findUrl(archiveTitle)}
                    />
                ))}
            </div>    
            </div>
        </section>
        {selectedComic && <ContentPage archiveTitle={selectedComic} section={file}  hide={() => handlePdfClick(null)}/>}
    </>
    )
}

export default ComicsPage;