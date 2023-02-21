import Image from "next/image";

const About = () => {
  return (
    <aside className="row g-0 banner">
      <h3 className="name gray p-2">ABOUT ME</h3>
      <div className="banner col-lg-4">
        {/* <Image
          src="assets/me.png"
          className="img-fluid about-img"
          alt="a picture of me"
        /> */}
      </div>
      <div className="col-lg-8 about-text">
        <p className="bio">
          Long before Dinosaurs existed, I was already a Full stack developer
          and I love working with Ruby especially when I put it on Rails, I
          enjoy solving complex problems except when it&apos;s too complex then
          I enjoy it even more. I write in JavaScript and my favorite front-end
          library is React, I test with Jest and RSpec. I like MySQL and
          PostgreSQL. I love Elephants because they have exceptional memories,
          are majestic yet powerful and intelligent. <br />
          <br />I occasionally write to share my knowledge on blogs - well, that
          is just a way of calming myself when I feel like smashing my screen
          because something isn&apos;t working as intended. Why not send me a
          <a href="mailto:ahmadchata@gmail.com">message</a> so I can tell you
          more.
        </p>
      </div>
    </aside>
  );
};

export default About;
