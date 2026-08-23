
async function run() {
  const res = await fetch("https://www.goodreads.com/review/list_rss/203081565?shelf=read");
  const xml = await res.text();
  const itemsRegex = /<item>([\s\S]*?)<\/item>/g;
  const items = [...xml.matchAll(itemsRegex)];
  
  console.log("Total items:", items.length);
  
  const getCdataOrText = (tag, str) => {
    const r = new RegExp(`<${tag}>(?:<!\\[CDATA\\[)?(.*?)(?:\\]\\]>)?<\\/${tag}>`, "is");
    const m = str.match(r);
    return m ? m[1].trim() : "";
  };

  const parsedItems = items.map(match => {
    const itemXml = match[1];
    const title = getCdataOrText("title", itemXml);
    const link = getCdataOrText("link", itemXml);
    const description = getCdataOrText("description", itemXml);
    const thumbnailMatch = description.match(/<img[^>]+src="([^">]+)"/i);
    const thumbnail = thumbnailMatch ? thumbnailMatch[1] : "";
    return { title, link, thumbnail, descriptionLength: description.length };
  });

  console.log("First item:", parsedItems[0]);
}
run();

