import styles from "../styles/Project.module.css";

const Projects = () => {
  return (
    <div className={`${styles.main}`}>
      <h1 className="name-heading text-center monteya-font orange mt-4">
        Projects
      </h1>
      <div className={styles.projectsHolder}>
        <a href="#" className={styles.projectsOne}></a>
        <a href="#" className={styles.projects}></a>
        <a href="#" className={styles.projects}></a>
        <a href="#" className={styles.projects}></a>
      </div>
      <div className={styles.projectsHolder}>
        <a href="#" className={styles.projectsOne}></a>
        <a href="#" className={styles.projects}></a>
        <a href="#" className={styles.projects}></a>
        <a href="#" className={styles.projects}></a>
      </div>
    </div>
  );
};

export default Projects;
