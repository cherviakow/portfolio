import css from "./Projects.module.css";

export default function Projects() {
  return (
    <>
      <div className={css.projDiv}>
        <h1 className={css.projects}>Projects</h1>
        <p className={css.pp}>barber-lime.vercel.app</p>
        <a className={css.pp} href="barber-lime.vercel.app"></a>
        <a className={css.pp}
              href="https://barber-lime.vercel.ap"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
      </div>
    </>
  );
}
