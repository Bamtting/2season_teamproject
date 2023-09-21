$(document).ready(function () {
  let tl = gsap.timeline({
    repeat: -1,
  });

  const slides = gsap.utils.toArray(".imgContainer");
  const lines = gsap.utils.toArray(".line");

  tl.to(
    slides,
    {
      ease: Expo.easeInOut,
      width: "100%",
      duration: 4,
      stagger: 4,
    },
    "flag"
  )
    .to(
      ".heading h1",
      {
        ease: Expo.easeInOut,
        stagger: 4,
        duration: 4,
        top: 0,
      },
      "flag"
    )
    .to(
      ".visual_text",
      {
        ease: Expo.easeInOut,
        stagger: 4,
        duration: 4,
        top: "0%",
      },
      "flag"
    )
    .to(
      ".visual_text",
      {
        delay: 4,
        ease: Expo.easeInOut,
        stagger: 4,
        duration: 1,
        opacity: 0,
      },
      "flag"
    )
    .to(
      ".heading h1",
      {
        delay: 4,
        ease: Expo.easeInOut,
        stagger: 4,
        duration: 2,
        top: "-200%",
      },
      "flag"
    );
  tl.eventCallback("onUpdate", () => {
    const progress = tl.progress();
    lines.forEach((dot, index) => {
      dot.classList.toggle(
        "active",
        index * 0.25 <= progress && progress < (index + 1) * 0.25
      );
    });
  });
});
