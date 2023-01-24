import DOMPurify from "isomorphic-dompurify";

export default function WPHTMLContent({ html }: any) {
  return (
    <div className="text-xl my-4 post-content">
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}></div>
    </div>
  );
}
