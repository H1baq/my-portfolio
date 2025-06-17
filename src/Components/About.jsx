import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="about-title">
              About 
            </h2>
            <div className="about-text" id="about">
              <p>
                Hibaq Studio is a creative-led practice crafting intentional visuals and web experiences for dreamers, small brands, and startups. With a focus on clarity, aesthetic, and purpose, we help ideas feel as good as they look.              </p>
              <p>
                We blend design thinking with development craft building cohesive brand identities, digital assets, and websites that tell your story and move your audience.              </p>
              <p>
                Whether you're launching your first brand or redesigning your digital space, we collaborate to create work that's both beautiful and functional rooted in authenticity, and built to last.

              </p>
            </div>
          </div>
          
          <div className="about-image-container">
            <div className="about-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=600&fit=crop" 
                alt="Studio workspace"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
