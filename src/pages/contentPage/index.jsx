
import ButtonToReturn from "@/components/buttonToReturn/buttonToReturn";
import BasicBreadcrumbs from "@/components/breadcrumb/breadcrumb";


const ContentPage = ({ archiveTitle, section, hide}) => {

    return (
        <section className="h-screen w-screen relative">
            <div className="flex w-full items-center my-5">
                {/* Pasa pdfTitle al componente Arrow */}
                <ButtonToReturn
                    hideCurrent={hide}
                    currentPage={archiveTitle} // Utiliza pdfTitle como currentPage
                />
                <BasicBreadcrumbs 
                     previousPage={section}
                     page={archiveTitle}
                     hidePage={hide}
                />
                
            </div>
        </section>
    );
};

export default ContentPage;