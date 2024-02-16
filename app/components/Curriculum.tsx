import React from 'react'
import { Button } from '@nextui-org/react'
import {DownloadIcon} from './icons'
import Link from 'next/link'

export const Curriculum = () => { 
return(<>
<Link href={'/CurriculoLuana.pdf'} target="_blank" rel="noopener noreferrer">
<Button className='px-8 my-8' color="secondary" variant="ghost" endContent={<DownloadIcon/>}>
Currículo
</Button>  
</Link>
</>)}