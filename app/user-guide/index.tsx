import { CopyOutlined, EnterOutlined } from "@ant-design/icons"
import { BrandTitles_Output } from "../const"
import { H2Header } from "../server-components/h2-header"



export const UserGuide = (props: {isHome?: boolean}) => {
  return (
    <section>
        <H2Header>{`How to Generate Random Phone Number`}</H2Header>
        <p className="text-gray-400 text-sm mb-3 pl-4">Our phone number generator is user-friendly and easy to use. Follow these simple steps:</p>
        <ol className="list-decimal list-inside italic">
        <li>When you land on the page, we automatically generate a new phone number for you.</li>
        <li>To generate random phone number, simply click the <EnterOutlined /> icon.</li>
        <li>Once you have the number you need, click the <CopyOutlined /> icon to copy it to your clipboard.</li>
    </ol>
</section>
  )
}
