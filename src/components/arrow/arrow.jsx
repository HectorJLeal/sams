import Link from 'next/link'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Arrow = ({currentPage, backTo}) => {
    console.log("currentPage:", currentPage);
    return(
        <div className="flex justify-start gap-4 w-10/12 ml-8 md:hidden">
            <Link href={backTo}>
                <button>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
            </Link>    
            <span className="font-medium" style={{color:  "#004B8D"}}>{currentPage}</span>
         </div>
    )
}

export default Arrow;