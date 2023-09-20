import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../atoms/card"
import { Button } from "../atoms/button"
import { ArrowRightIcon, LayersIcon } from "lucide-react"
import Link from "next/link"

interface ProductCardProps {
    title: string
    desc?: string
    imgSrc: string,
    webLink: string,
    detailsLink: string
    alt: string
}

const ProductCard: React.FC<ProductCardProps> = ({
    title,
    desc,
    imgSrc,
    alt,
    detailsLink= '/hoaTruyen',
    webLink = '/',
}) => {
    return (
        <Card className="border border-dashed border-slate-400">
            <CardHeader>
                {title && <CardTitle className="text-2xl">{title}</CardTitle>}
                {desc && <CardDescription>{desc}</CardDescription>}
            </CardHeader>
            <CardContent>
                <div className="aspect-video">
                    {/* <Image src={imgSrc} width={500} height={500} alt={alt}></Image>
                     */}
                    <img className="w-full h-full object-cover" src={imgSrc}/>
                </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
                    <Button variant={'outline'} className="items-center gap-1 font-medium text-sm border border-dashed border-slate-400" asChild>
                        <Link href={detailsLink}>
                            Details
                            <LayersIcon className="w-4 h-4"></LayersIcon>
                        </Link>
                    </Button>
                    <Button variant={'default'} className="items-center gap-1 font-medium text-sm" asChild>
                        <Link href={webLink}>
                            Website
                            <ArrowRightIcon className="w-4 h-4"></ArrowRightIcon>
                        </Link>
                    </Button>
            </CardFooter>
        </Card>
    )
}

export { ProductCard }