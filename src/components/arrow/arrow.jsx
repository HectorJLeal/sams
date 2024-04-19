import Link from 'next/link'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Arrow = ({currentPage, backTo}) => {
    return(
        <div className="flex justify-evenly w-4/12 ml-8">
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