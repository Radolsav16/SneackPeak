import Image from "../components/image/Image";
import Sponsor from "../components/sponsor/Sponsor";

export default function SponsorPage({
    setWhite
}){
    setWhite(false);
    document.body.style.backgroundColor = 'black';
    return(
        <>
            <Sponsor />
            <Image />
        </>
    )
}