import { useEffect, useState } from "react";

const CESPage = () => {
  const [htmlContent, setHtmlContent] = useState<string>("");

  useEffect(() => {
    const fetchHtml = async () => {
      const response = await fetch("/skuberLA.html");
      const html = await response.text();
      setHtmlContent(html);
    };

    fetchHtml();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default CESPage;
