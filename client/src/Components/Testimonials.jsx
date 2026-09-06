const testimonials = [
  [
    "“NEXORA gave our team a shared rhythm. We spend less time looking for updates and more time making progress.”",
    "Maya Chen",
    "VP Operations",
    "Lattice Labs",
    "MC",
  ],
  [
    "“The best part is how invisible the automation feels. Our process is faster, but our team still feels in control.”",
    "Jon Bell",
    "Creative Director",
    "Northstar Studio",
    "JB",
  ],
  [
    "“We replaced five disconnected tools with one place that actually makes the work easier to understand.”",
    "Arianna Fox",
    "Head of Product",
    "Fieldwork",
    "AF",
  ],
];

export default function Testimonials() {
  return (
    <section id="stories" className="stories-section section-pad">
      <div className="section-heading-row">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" /> FROM THE PEOPLE DOING THE WORK
          </div>
          <h2>
            Good work speaks
            <br />
            <em>for itself.</em>
          </h2>
        </div>
        <span className="story-count">CUSTOMER STORIES</span>
      </div>
      <div className="testimonial-grid">
        {testimonials.map(([quote, name, role, company, initials]) => (
          <article className="testimonial" key={name}>
            <span className="quote-mark">“</span>
            <blockquote>{quote}</blockquote>
            <div className="person">
              <span className="avatar">{initials}</span>
              <div>
                <b>{name}</b>
                <small>
                  {role} · {company}
                </small>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
