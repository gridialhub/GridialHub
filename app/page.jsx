import Link from "next/link";

export default function Home() {
  return (
    <div className="home" style={{ display: "grid", gap: 24 }}>
      {/* HERO: introducción y botón */}
      <section
        className="card"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: 0
        }}
      >
        <div className="hero__bg" aria-hidden="true" />
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 24,
            padding: 60,
            maxWidth: 900,
            margin: "0 auto"
          }}
        >
          <div className="intro-box">
            <p
              className="intro-text"
              style={{
                fontSize: 20,
                lineHeight: 1.6,
                color: "var(--fg)",
                maxWidth: 700,
                marginBottom: 28
              }}
            >
              Bienvenido a <b>GridialHub</b>, un espacio creado para todos los
              amantes del <b>gaming</b> y la <b>tecnología</b>. Aquí podrás
              mantenerte al día con las últimas novedades del mundo gamer, los
              lanzamientos más esperados, curiosidades sobre hardware y eventos
              de la comunidad. Además, podrás participar en{" "}
              <b>sorteos exclusivos</b> pensados para nuestros seguidores más
              fieles.
            </p>

            <Link
              href="/sorteos"
              className="btn"
              style={{
                fontSize: 18,
                padding: "12px 28px",
                borderRadius: 12
              }}
            >
              Participar en sorteos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
