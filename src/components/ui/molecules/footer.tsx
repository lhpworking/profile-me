import { Heart } from "lucide-react"

const Footer:React.FC = () =>{
    return(
        <footer className="border-t border-dashed border-slate-400 mt-16">
            <div className="container flex justify-between h-16 items-center">
                <p className="text-base font-medium flex items-center gap-1 ">
                    Made by LHP with <Heart fill="red" color="red" />
                </p>
                <p className="text-base font-medium">
                    &copy; {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    )
}
export { Footer}