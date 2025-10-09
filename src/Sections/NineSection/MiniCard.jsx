import "../NewSevenSection/Group11055.css";

export const MiniCard = ({ className, first }) => {
    return (
        <div className={"group-1105-5  " + className}>
            <svg
                className="group"
                width="35"
                height="51"
                viewBox="0 0 35 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 23V7.14835C0 6.30643 0.335019 5.50068 0.928206 4.91584L5.03075 0.871089C5.59752 0.312309 6.35468 0 7.14254 0H23"
                    stroke="#00E599"
                    strokeWidth="0.929688"
                />
            </svg>
            <div className="frame-1410103863 ">
                <div className="haifa-israel text-left">
                    {!first
                        ? <div>
                            152 Derech Menachem Begin
                            Tel Aviv,<br /> Israel, 6492106. POB 138
                        </div>
                        : <div>
                            152 Derech Menachem Begin
                            Tel Aviv, Israel, 6492106. POB 138
                        </div>
                    }
                </div>
            </div>
            <svg
                className="group2"
                width="35"
                height="51"
                viewBox="0 0 35 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M35 29V44.1625C35 44.9678 34.6652 45.7385 34.072 46.2979L29.9689 50.1668C29.4025 50.7013 28.6452 51 27.8572 51H12"
                    stroke="#00E599"
                    strokeWidth="0.929688"
                />
            </svg>
        </div>
    );
};

export default MiniCard;