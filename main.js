(() => {
  let observer = new MutationObserver(() => {
    let items = document.querySelectorAll(
      ".feed-shared-update-v3, .feed-shared-update-v2"
    );
    items.forEach((item) => {
      if (
        item.outerHTML.match(
          /((likes|celebrates|loves|supports) this|finds this (funny|insightful)|anniversary|Just finished the course|s job update)/
        )
      ) {
        item.remove();
      }
    });
  });
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
