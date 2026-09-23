import { Container } from './styles'
import ScrollAnimation from 'react-animate-on-scroll'
import Vasu from '../../assets/Vasu.jpg'

const mainSkills = ['JavaScript', 'Node.js', 'Express.js', 'C++']

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={100}>
          <p>
            Hi there! I'm Vasu, an passionate about integrating Electronics and Software skilled in web development and some EC skills.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={200} style={{ marginTop: '2rem', marginBottom: '2rem' }}>
          <p>
            I build full-stack web applications using React.js and modern backend frameworks, implementing scalable APIs and efficient state management. I design responsive and user-friendly interfaces, integrate databases, and optimize performance for real-world applications. Alongside software development, I apply my Electronics and Communication knowledge to work with embedded systems, circuit design, and hardware-software integration.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4>Bachelor of Engineering in Electronics and Communication</h4>
            <p>Government Engineering College, Surat | July 2024 - Present</p>
            <p>7.60 CGPA</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={500}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          {mainSkills.map((skill, index) => (
            <ScrollAnimation animateIn="fadeInUp" delay={(index + 1) * 100} key={skill}>
              <div className="hability">{skill}</div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={210}>
          <img src={Vasu} alt="Vasu Patel" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
