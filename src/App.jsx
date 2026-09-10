import { LINK_GROUPS } from "./data";
import { ICONS } from "./Icons";
import Mascot from "./Mascot";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <main className="card">
        <Mascot />

        <p className="logo">
          <span className="de">De</span>
          <span className="ocana">Ocaña</span>
          <span className="lindo">lindo</span>
        </p>

        <p className="welcome">¡Bienvenidos!</p>

        {LINK_GROUPS.map((group) => (
          <section key={group.label}>
            <h2 className="group-label">{group.label}</h2>
            <ul className="links">
              {group.links.map((link) => {
                const { Icon, className } = ICONS[link.icon];
                return (
                  <li key={link.title}>
                    <a
                      className="btn"
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className={className} aria-hidden="true">
                        <Icon />
                      </span>
                      <span className="btn-label">{link.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}

        <p className="footer">De Ocaña Lindo</p>
      </main>
    </div>
  );
}
