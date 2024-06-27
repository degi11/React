import GithubSM from "../logo/github-sm.svg"
import TwitterSM from "../logo/twitter-sm.svg"
import FigmaSM from "../logo/figma-sm.svg"

export const IconLinks = () => {
    return(
        <div className="flex gap-[6px]">
            <img src={GithubSM}/>
            <img src={TwitterSM}/>    
            <img src={FigmaSM}/>
        </div>
    );
}