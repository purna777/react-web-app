import { useState } from "react"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"

interface Props {
    onClick: () => void;
}

export const Like = ( {onClick}: Props) => {
const [status, setStatus] = useState(false)

const toggle = () => {
    setStatus(!status);
    onClick();
}

if (!status) return (
        <AiFillHeart color="lightcoral" size="40" onClick={ toggle }/>
  )
return <AiOutlineHeart size="40" onClick={ toggle }/>
}
