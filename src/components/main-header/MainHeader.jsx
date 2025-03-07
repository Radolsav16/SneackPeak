import Header from "../header/Header";
import WhiteHeader from "../white-header/WhiteHeader";

export default function MainHeader({
    isWhite,
    setModal
}){
    return(
        <>
        {isWhite ? <WhiteHeader setModal={setModal} /> : <Header setModal={setModal}/>}
        </>
    )
}