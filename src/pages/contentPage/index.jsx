import Arrow from "@/components/arrow/arrow";
import { pdfs } from "@/utils/constants";

const ContentPage = () => {
    return(
        <section className="h-screen w-screen relative">
            <div className="flex w-full items-center my-5">
                <Arrow
                    backTo={"/documentsPage"}
                    currentPage={"Checar"}
                />
            
            </div>
        </section> 
    )
}
export default ContentPage;