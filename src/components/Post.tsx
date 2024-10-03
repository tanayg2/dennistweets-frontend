import { InstagramEmbed, TikTokEmbed, XEmbed } from "react-social-media-embed"
import { Button } from "./Button"
import { Smile } from "lucide-react"
import { Source } from "./Timeline"

type PostType = {
  link: string
  type: Source
}
export const Post = (props: PostType) => {
  if (!props.link) return null
  const Element = {
    twitter: XEmbed,
    tiktok: TikTokEmbed,
    instagram: InstagramEmbed,
  }[props.type]

  return (
    <div>
      <Element url={props.link} width={430} />
      <Button variant="outline" size="sm">
        <Smile className="w-4 h-4 mr-2" />
        React
      </Button>
    </div>
  )
}
