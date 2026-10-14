export default function Home() {
  return (
    <main>
      <h1>Bayes Intelligence</h1>

      <section aria-labelledby="about-heading">
        <h2 id="about-heading">About</h2>
        <p>
          We have seen several revolutions in the financial markets over the
          decades. Advances in computer technology gave rise to quantitative
          firms, which dominated by capitalizing on the synergy from computing
          power, market data and mathematical models.
        </p>
        <p>
          We are now seeing a major shift. AI capabilities have reached a
          threshold where they can analyze vast amounts of information, test
          investment ideas and support decisions across financial markets. This
          shift is creating a new category of investment companies that combine
          established investment principles with the latest AI models.
        </p>
      </section>

      <section aria-labelledby="mission-heading">
        <h2 id="mission-heading">Our mission</h2>
        <p>
          We’re building an AI research lab focused on post-training advanced
          models to uncover market edges and generate alpha. We apply that work
          through our hedge fund, grounding our models in financial evidence and
          market context.
        </p>
      </section>

      <section aria-labelledby="contact-heading">
        <h2 id="contact-heading">Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:kswaroop.hebbar@gmail.com">
            kswaroop.hebbar@gmail.com
          </a>
        </p>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Bayes Intelligence</p>
      </footer>
    </main>
  );
}
