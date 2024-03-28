import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  return (
    <article class="popover-hint">
      <h1>OOOOOOOOOPS</h1>
      <h1>404</h1>
      <p>Sorry {i18n(cfg.locale).pages.error.notFound}</p>
      <a href="../">Home</a>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
