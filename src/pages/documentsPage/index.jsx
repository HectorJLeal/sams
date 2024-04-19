import FrameFullWidth from "@/components/frameFullWidth/frameFullWith";
import Arrow from "@/components/arrow/arrow";
import Archives from "@/components/archives/archives";
import { pdfs } from "@/utils/constants";

const DocumentsPage = () =>{

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
                        icon={"assets/icons/pdfIcon.png"}
                        pdfAlt={"pdfIcon"} 
                        archivetitle={pdfs[0]} 
                    />
                    <Archives 
                        icon={"assets/icons/pdfIcon.png"}
                        pdfAlt={"pdfIcon"} 
                        archivetitle={pdfs[1]} 
                    />
                    <Archives 
                        icon={"assets/icons/pdfIcon.png"}
                        pdfAlt={"pdfIcon"} 
                        archivetitle={pdfs[2]} 
                    />
                </div>  
            </div>
        

        </section>
    )
}

export default DocumentsPage;