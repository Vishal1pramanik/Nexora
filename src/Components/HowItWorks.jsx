export default function HowItWorks() {
  const steps = [
    [
      "01",
      "Create your workspace",
      "Set up a focused home for every project and priority.",
    ],
    [
      "02",
      "Connect your team and workflows",
      "Bring the people and tools you already use into rhythm.",
    ],
    [
      "03",
      "Automate and grow",
      "Turn momentum into a system that scales with you.",
    ],
  ];
  return (
    <section id="process" className="process-section section-pad">
      <div className="section-heading-row">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" /> A BETTER WAY TO WORK
          </div>
          <h2>
            From scattered
            <br />
            <em>to synchronized.</em>
          </h2>
        </div>
        <p>
          Get your whole team moving in the same direction, without adding more
          noise to the room.
        </p>
      </div>
      <div className="steps">
        <div className="step-line" />
        {steps.map(([number, title, text]) => (
          <div className="step" key={number}>
            <span className="step-number">{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <span className="step-arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  );
}
