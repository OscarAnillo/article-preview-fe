import ImageComponent from "./image-component";
import TextComponent from "./text-component";

export default function WrapperComponent(){
    return (
        <div>
            <ImageComponent />
            <TextComponent />
        </div>
    )
}