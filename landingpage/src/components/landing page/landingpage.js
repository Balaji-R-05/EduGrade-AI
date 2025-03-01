// src/components/LandingPage/LandingPage.js
import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to EduGrade-AI!</h1>
          <p>
          The objective of this project is to develop an AI-powered teacher assistant that automates the grading process and provides personalized feedback to students. By leveraging artificial intelligence, the solution aims to reduce the workload of educators, allowing them to focus more on teaching and mentoring. This system will ensure timely, accurate, and constructive feedback, fostering a more effective learning environment. Additionally, it will support UN Sustainable Development Goal 4 (Quality Education) by promoting inclusive and equitable learning opportunities for all students, particularly in under-resourced educational settings.
          </p>
          <button className="cta-button">Take me Home</button>
        </div>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <div className="features-list">
          <div className="feature">
            <h3>1. Integration with Colleges</h3>
            <p>The system seamlessly integrates with college learning management systems (LMS) and academic databases to streamline assignment submissions, grading, and feedback distribution. It ensures easy access for educators and students while maintaining data security and compliance with institutional policies.</p>
          </div>
          <div className="feature">
            <h3>2. Grading and Evaluating System</h3>
            <p>The AI-powered grading system automates the assessment of assignments, quizzes, and exams. It evaluates student performance based on predefined rubrics, reducing grading time and ensuring fair, consistent, and unbiased assessment.</p>
          </div>
          <div className="feature">
            <h3>3. AI Quizz</h3>
            <p>The platform generates adaptive quizzes using AI, tailoring questions based on individual student progress. It can provide instant feedback and explanations, helping students reinforce their understanding and identify areas for improvement.</p>
          </div>
          <div className="feature">
            <h3>4. AI Study Buddy</h3>
            <p>A virtual AI-powered assistant that helps students understand complex topics, answer queries, and provide study guidance. It acts as a 24/7 learning companion, offering explanations, summarizing topics, and suggesting additional resources.</p>
          </div>
          <div className="feature">
            <h3>5. AI Grading</h3>
            <p>This feature automates grading for subjective and objective answers using AI models that analyze context, grammar, and content relevance. It supports multiple formats, including essays, coding assignments, and multiple-choice questions.</p>
          </div>
          <div className="feature">
            <h3>6. AI Homeworks</h3>
            <p>The AI system assigns personalized homework based on a student’s learning progress and weaknesses. It ensures that students receive targeted practice to enhance their understanding while preventing unnecessary repetition of mastered concepts.</p>
          </div>
          <div className="feature">
            <h3>7. Extra Courses</h3>
            <p>The platform offers additional learning materials, courses, and skill-enhancement programs beyond the standard curriculum. These courses help students explore new subjects, gain certifications, and develop industry-relevant skills.</p>
          </div>
          <div className="feature">
            <h3>8. Course Recommendations</h3>
            <p>An AI-driven recommendation system suggests relevant courses based on a student’s academic performance, interests, and career goals. This ensures personalized learning paths that align with each student's strengths and aspirations.</p>
          </div>
          <div className="feature">
            <h3>9. AI-Powered Progress Tracking & Insights</h3>
            <p>The system provides detailed analytics on student performance, tracking their progress over time. It identifies strengths and areas needing improvement, generating reports for both students and educators. Teachers can use these insights to personalize instruction, while students receive data-driven recommendations for improving their learning outcomes.</p>
          </div>
        </div>
      </section>

      

      <section className="cta-bottom">
        <h2>Ready to take the next step?</h2>
        <button className="cta-button">Teacher</button>
        <button className="cta-button">Student</button>
        <br/>
      </section>

      <section className="faq">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>What is your product about?</h3>
                <p>Our product is a cutting-edge solution designed to simplify your workflow and boost productivity.</p>
              </div>
              <div className="faq-item">
                <h3>How much does it cost?</h3>
                <p>We offer various pricing plans tailored to your specific needs. Please visit our pricing page for more details.</p>
              </div>
              <div className="faq-item">
                <h3>Do you have a free trial?</h3>
                <p>Yes, we offer a 14-day free trial so you can try out our product and see if it's the right fit for you.</p>
              </div>
              <div className="faq-item">
                <h3>How can i contact you?</h3>
                <p>You can contact us via our contact page, or via mail at contact@mail.com</p>
              </div>
            </div>
          </section>

    </div>
  );
}

export default LandingPage;
