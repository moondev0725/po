document.querySelectorAll("[data-demo-root]").forEach((root) => {
  const eyebrow = root.querySelector("[data-demo-eyebrow]");
  const title = root.querySelector("[data-demo-title]");
  const desc = root.querySelector("[data-demo-desc]");
  const viewport = root.querySelector(".stage-viewport");
  const hotspots = [...root.querySelectorAll(".demo-hotspot")];

  const initial = {
    eyebrow: eyebrow?.textContent || "",
    title: title?.innerHTML || "",
    desc: desc?.textContent.trim() || "",
  };

  const activate = (hotspot) => {
    hotspots.forEach((item) => item.classList.toggle("is-active", item === hotspot));
    if (eyebrow) eyebrow.textContent = hotspot.dataset.eyebrow || initial.eyebrow;
    if (title) title.innerHTML = hotspot.dataset.title || initial.title;
    if (desc) desc.textContent = hotspot.dataset.desc || initial.desc;
  };

  const reset = () => {
    hotspots.forEach((item) => item.classList.remove("is-active"));
    if (eyebrow) eyebrow.textContent = initial.eyebrow;
    if (title) title.innerHTML = initial.title;
    if (desc) desc.textContent = initial.desc;
  };

  hotspots.forEach((hotspot) => {
    hotspot.addEventListener("mouseenter", () => activate(hotspot));
  });

  viewport?.addEventListener("mouseleave", reset);
});
