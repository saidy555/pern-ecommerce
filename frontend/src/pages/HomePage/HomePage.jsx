import { Link } from "react-router";
import styles from "./homepage.module.css";

const HomePage = () => {
  return (
    <main>
      <section>
        <h1>Innovating Health & Beauty, Naturally.</h1>
        <p>
          Trusted pharmaceutical and cosmetic solutions for skin care, hair
          care, dental care, and diabetic wellness. Proudly made in Egypt.
        </p>
        <Link>Explore Our Products</Link>
        <Link>Contact Us</Link>
      </section>
      <section>
        <h2>About Us</h2>
        <figure>
          <figcaption>
            At LotusCare, we believe in the power of science blended with
            nature. Based in Egypt, we are dedicated to improving lives through
            high-quality pharmaceuticals and cosmetics. Our portfolio includes
            trusted solutions for:
          </figcaption>
          <ul>
            <li>Skin Care – Hydration, protection, and radiance.</li>

            <li>Hair Care – Nourishment and strength from root to tip.</li>

            <li>
              Dental Care – Daily protection for brighter, healthier smiles.
            </li>

            <li>
              Diabetic Medication – Safe, effective treatments for better
              quality of life.
            </li>
          </ul>
          <p>
            With a commitment to innovation, safety, and affordability, we are
            proud to serve families across Egypt and beyond.
          </p>
        </figure>
      </section>
      <section>
        <h2>Featured Product Categories</h2>
        <ul>
          <li>
            🌿 Skin Care – Dermatologist-tested creams, cleansers, and serums.
          </li>
          <li>💆 Hair Care – Shampoos, conditioners, and scalp treatments.</li>
          <li>😁 Dental Care – Toothpastes and oral hygiene essentials.</li>
          <li>
            💊 Diabetic Care – Reliable medication for effective diabetes
            management.
          </li>
        </ul>
      </section>
      <section>
        <h2>Why Choose Us?</h2>

        <ul>
          <li>
            ✔ Trusted Quality – Manufactured under strict pharmaceutical
            standards.
          </li>
          <li>
            ✔ Affordable Solutions – Accessible products for every household.
          </li>
          <li>
            ✔ Innovation Driven – Combining science, research, and natural
            ingredients.
          </li>
          <li>
            ✔ Made in Egypt – Supporting local healthcare and beauty industries.
          </li>
        </ul>
      </section>
      <section>
        <h2>Testimonials</h2>
        <div>
          <blockquote>
            “Finally, a local brand that delivers international quality in both
            cosmetics and medicine.”
          </blockquote>
          <p>
            --Hoover Sukhdeep,
            <br />
            Former Sucker,
            <br />
            Aspiring DDoS Cop
          </p>
        </div>
      </section>
      <section>
        <h2>Call to Action</h2>
        <p>
          Join thousands who trust LotusCare for their health and beauty needs.
        </p>
        <Link>Shop Now</Link>
        <Link>Partner With Us</Link>
      </section>
    </main>
  );
};

export default HomePage;
