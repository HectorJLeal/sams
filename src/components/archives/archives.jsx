import Link from 'next/link'

const Archives = ({ icon, pdfAlt, archivetitle, link }) => {
    return (
        <div className="flex justify-between h-10 w-11/12 border-b-2 mt-2">
            <div className="flex items-center w-3/4 h-5/6 gap-3">
                <div className="flex w-[30px] h-5/6 justify-center items-center rounded-full" style={{ backgroundColor: "#004B8D" }}>
                    <img className="w-1/2 h-1/2" src={icon} alt={pdfAlt} />
                </div>
                <div className="flex w-10/12 text-xs">
                    {archivetitle}
                </div>
            </div>

            <div className="flex justify-evenly items-center w-1/4">
                <div>
                <Link href={"/contentPage"}>
                    <button>
                        <img src="assets/icons/viewIcon.png" alt="viewIcon.png" />
                    </button>
                </Link>
                </div>
                <div>
                    <button>
                        <img src="assets/icons/downloadIcon.png" alt="downloadIcon.png" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Archives;
