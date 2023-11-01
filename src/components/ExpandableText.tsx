import React, { useState } from 'react'

interface Props {
    children: string;
    maxChars?: number
}
export const ExpandableText = ({children, maxChars = 10}: Props) => {
    const [isExpand, setExpand] = useState(false)
    if (children.length <= maxChars) return <p>{children}</p>
    const text = isExpand ? children : children.substring(0, maxChars)
  return (
    <p>{text}...<button onClick={() => setExpand(!isExpand)}>{isExpand ? 'Less': "More"}</button></p>
  )
}
