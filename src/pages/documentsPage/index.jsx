import FrameFullWidth from "@/components/frameFullWidth/frameFullWith";
import Arrow from "@/components/arrow/arrow";
import BasicBreadcrumbs from "@/components/breadcrumb/breadcrumb";
import Archives from "@/components/archivesfiles/archives";
import { pdfs } from "@/utils/constants";
import { keys } from "@/utils/constants";
import { useState } from "react";
import ContentPage from "../contentPage";

const DocumentsPage = () =>{
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [file, setFile] = useState(keys[0])

    const handlePdfClick = (pdfTitle) => {
        setSelectedPdf(pdfTitle);
    };
    console.log("actual " + selectedPdf)
    

    return (
     <>   
        <section className={`${selectedPdf === null ? "h-screen w-screen relative" : "hidden"}`}>
            <div className="flex w-full items-center my-5">
                <Arrow
                    backTo={"/"}
                    currentPage={"Documentos"}
                />
                <BasicBreadcrumbs
                    previousPage={"Documentos"}
                    page={""}
                />

            </div>

            <div className="flex flex-col items-center h-5/6 w-full gap-4">
                <FrameFullWidth 
                 textFrameFull={"Consulta nuestra información en los archivos adjuntos"}
                 imageSource={"assets/hoodies/hoodieAssetsPages.png"}
                 imageAlt={"hoodie page 2"}
                 textClassname="text-end w-full text-xs md:text-3xl md:text-center absolute top-10 md:top-7 right-6"
                 bgImage={"assets/bgImages/bgline.png"}
                />
            <div className="flex flex-col w-11/12 md:w-full items-center mt-5">
                {pdfs.map(archiveTitle => (
                    <Archives 
                        key={archiveTitle}
                        icon={"assets/icons/pdfIcon.png"}
                        pdfAlt={"pdfIcon"} 
                        archivetitle={archiveTitle} 
                        onClick={() => handlePdfClick(archiveTitle)}
                    />
                ))}
            </div>  
            </div> 

        </section>
        {selectedPdf && <ContentPage archiveTitle={selectedPdf} section={file}  hide={() => handlePdfClick(null)}/>}

    </>        
    )
}

export default DocumentsPage;