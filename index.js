(async () => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});

  let paper = tab.url;

  paper = paper
    .replaceAll("_", " ")
    .replace("ms", "paper")
    .replace("qp", "paper")
    .replace("  ", " ");

  const firstIndex = paper.lastIndexOf("/") + 1;

  paper = paper
    .replace(" m", " feb march 20")
    .replace(" s", " may june 20")
    .replace(" w", " october november 20")
    .replace(".pdf", "");

  const lastIndex = paper.length;

  paper = paper.slice(firstIndex, lastIndex);

  chrome.windows.create({"url": `https://www.youtube.com/results?search_query=${encodeURIComponent(paper)}`/*, "incognito": true*/})
  window.close()
})();
