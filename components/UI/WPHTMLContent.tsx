import DOMPurify from "isomorphic-dompurify";

export default function WPHTMLContent({ html }: { html: string }) {
  return (
    <div className="text-navbar-drawer  post-content">
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}></div>
    </div>
  );
}
