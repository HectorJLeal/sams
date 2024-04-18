
import CustomizedProgressBar from "@/components/circularProgress";

const LoginPage = () => {
    return(
       <section className="h-screen w-screen relative" style={{backgroundColor: "#004B8D"}}>
            <img className="h-4/6 w-full absolute" src="assets/bgImages/loginBg.png" alt="fondo" />
            <div className="flex flex-col justify-between h-full w-full gap-10">
                <div className="flex justify-center items-center z-10 h-1/6 w-full relative">  
                    <img className="w-[175px] h-[103px] absolute top-10" src="assets/bgImages/samsTitle.png" alt="Titulo Sams" />
                </div>
                <div className="flex justify-center items-center z-10 h-4/6 w-full">   
                    <img className="w-4/6 h-5/6" src="assets/hoodies/loginHoodie.png" alt="hoodie inicio" />
                </div>
                <div className="flex justify-center items-center z-10 h-1/6 w-full relative">    
                    <CustomizedProgressBar classname={"absolute left-20"} />
                </div>
              
        
            </div>
        </section>
    )
}

export default LoginPage;