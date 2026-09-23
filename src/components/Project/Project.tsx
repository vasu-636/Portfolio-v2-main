import { Container } from './styles'
import ScrollAnimation from 'react-animate-on-scroll'
import githubIcon from '../../assets/github.svg'

const projects = [
  {
    title: 'DVD Rental REST API',
    repository: 'https://github.com/vasu-636/Node-ER.git',
    description:
      'Built a REST API for a rental system with modular routes and controllers. Added JWT authentication, protected routes, and role-based authorization for film, inventory, customer, staff, and rental resources.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT'],
  },
  {
    title: 'Admin Panel & Product Management System',
    repository: 'https://github.com/vasu-636/AdminDashboardWithOTPverificationAndProductCRUD.git',
    description:
      'Developed an MVC application for product and category management with CRUD operations and server-side validation. Added session authentication, password hashing, protected routes, OTP password recovery, and image uploads.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Passport.js'],
  },
  {
    title: 'Medicine Warehouse Inventory Management System',
    repository: 'https://github.com/vasu-636/Mini-Project.git',
    description:
      'Developed a modular inventory management application with separate controllers, services, models, and middleware. Added medicine CRUD, inventory transfers, expiry and low-stock alerts, role-based access control, audit logging, and CSV reporting.',
    technologies: ['Python', 'Tkinter', 'MongoDB', 'PyMongo', 'bcrypt'],
  },
  {
    title: 'Zomato Inspired Delivery Partner Dashboard',
    repository: 'https://github.com/vasu-636/Zomato.git',
    description:
      'Developed a delivery partner dashboard with authentication and protected routes. Added menu management, order tracking, revenue analytics, centralized state management, and API integration.',
    technologies: ['React.js', 'Redux Toolkit', 'Axios', 'Firebase'],
  },
]

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project) => (
          <ScrollAnimation animateIn="flipInX" key={project.title}>
            <article className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <title>Project</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
                <div className="project-links">
                  <a href={project.repository} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}>
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </footer>
            </article>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  )
}
