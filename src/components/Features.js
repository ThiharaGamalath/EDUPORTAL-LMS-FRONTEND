import React from 'react';
import './Features.css';
import im4 from '../assets/im4.jpg';
import im5 from '../assets/im5.jpg';
import im6 from '../assets/im6.jpg';

const features = [
  {
    img: im4,
    title: "Manage Academic Activities",
    description: "Access modules, assignments, and results seamlessly.",
  },
  {
    img: im5,
    title: "Track Performance",
    description: "Monitor attendance, assessments, and overall progress.",
  },
  {
    img: im6,
    title: "Admin Control",
    description: "Comprehensive control for managing the system.",
  },
];

const news = [
  {
    title: "New Semester Announcement",
    date: "January 15, 2025",
    details:
      "The new semester will officially begin on January 15, 2025. Orientation sessions and module enrollments will take place in the first week. Students are encouraged to check the academic calendar and prepare accordingly.",
  },
  {
    title: "Research Conference 2025",
    date: "March 10, 2025",
    details:
      "The university will host its annual research conference in March. Participants can submit papers until February 15, 2025. Sessions will include keynote speeches, panel discussions, and networking opportunities.",
  },
  {
    title: "IT Course Enrollment Open",
    date: "February 1, 2025",
    details:
      "Enrollment for new IT courses will open on February 1. These courses are designed to provide cutting-edge knowledge in AI, Data Science, and Cybersecurity. Interested students can register online.",
  },
];

const faqs = [
  {
    question: "How do I register as a student?",
    answer: "You can register via the 'Register as Student' button on the home page.",
  },
  {
    question: "What courses are available?",
    answer: "Visit the Academics section to see the full list of courses.",
  },
  {
    question: "How do I contact the university?",
    answer: "Refer to the contact information at the bottom of the page.",
  },
];

function Features() {
  return (
    <div>
      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">Our Features</h2>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-card-img">
                <img src={feature.img} alt={feature.title} />
              </div>
              <div className="feature-card-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <button className="learn-more-btn" aria-label={`Learn more about ${feature.title}`}>Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* News Section */}
      <section className="news">
        <h2 className="section-title">University News</h2>
        <div className="news-grid">
          {news.map((item, index) => (
            <div className="news-card" key={index}>
              <h3>{item.title}</h3>
              <p><strong>Date:</strong> {item.date}</p>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2 className="section-title">FAQs</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={index}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Features;
