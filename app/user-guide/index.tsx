import { CopyOutlined, EnterOutlined } from "@ant-design/icons"
import { BrandTitles_Output } from "../const"



export const UserGuide = (props: {isHome?: boolean}) => {
  return (
    <section>
        <h2 className="text-2xl">{`How to Use the ${props.isHome ? BrandTitles_Output.Home : `Phone Number`} Generator`}</h2>
        <p className="text-gray-400 text-sm mb-3 pl-4">Our phone number generator is user-friendly and easy to use. Follow these simple steps:</p>
        <ol className="list-decimal list-inside italic">
        <li>When you land on the page, we automatically generate a new phone number for you.</li>
        <li>To generate another number, simply click the <EnterOutlined /> icon.</li>
        <li>Once you have the number you need, click the <CopyOutlined /> icon to copy it to your clipboard.</li>
    </ol>
</section>
  )
}
