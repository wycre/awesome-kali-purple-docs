import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Attribution: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    return (
      <p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">
        <a property="dct:title" rel="cc:attributionURL" href="https://wycre.github.io/awesome-kali-purple-docs/">Awesome Kali Purple Docs</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://wycre.net">David Jones</a> is licensed under 
        <a href="https://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;"> CC BY-SA 4.0
          <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;margin-bottom:0px;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""> </img>
          <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;margin-bottom:0px;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""> </img>
          <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;margin-bottom:0px;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt=""> </img>
        </a>
      </p> 
    )
  }

  Attribution.css = style
  return Attribution
}) satisfies QuartzComponentConstructor
