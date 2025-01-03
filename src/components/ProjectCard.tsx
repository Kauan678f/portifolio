import '../styles/ProjectCard.css'

interface ProjectCardProps {
    image: string;
    tags: string[];
    link: string;
  }

export default function ProjetoCarda(props: ProjectCardProps){
    // const [show, setShow] = useState(false);

    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="project-card">
        {/* <div className={`${show ?  'show' : 'noShow'}`}>
          <h2 id='h2'>Ver</h2>
        </div> */}
        <img src={props.image} className="project-card-image" style={{ backgroundImage: `url(${props.image})` }} />
        
      <div className="project-card-content">
        <div className="project-card-tags">
          {props.tags.map((tag, index) => (
            <span key={index} className="project-card-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
    )
}