import DOMPurify from "isomorphic-dompurify";

export default function WPHTMLContent({ html }: { html: string }) {
  return (
    <div className="  post-content">
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}></div>
    </div>
  );
}
