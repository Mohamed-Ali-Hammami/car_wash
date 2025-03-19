"use client";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className="container">
      <main className="main-content">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-text">
            <h1 className="title">Lavage Auto Éclat - Votre Voiture Mérite la Perfection</h1>
            <p className="description">
              Nettoyage professionnel et écologique pour tous types de véhicules. 
              Des forfaits sur mesure avec séchage manuel, traitement céramique et 
              lustrage professionnel. Profitez d&apos;un service premium sans sortir de votre voiture !
            </p>
            <div className="cta-buttons">
              <a href="#" className="cta-button">
                Réservez votre lavage
              </a>
            </div>
          </div>
          <Image
            src="/images/img6.jpg"
            alt="Voiture étincelante après lavage"
            width={700}
            height={400}
            className="hero-image"
          />
        </div>

        {/* Services Grid */}
        <div className="sections-grid">
          <div className="section-item">
            <div className="image-container">
              <Image
                src="/images/img5.jpg"
                alt="Lavage extérieur détaillé"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h2>Lavage Extérieur Premium</h2>
          </div>
          
          <div className="section-item">
            <div className="image-container">
              <Image
                src="/images/img4.jpeg"
                alt="Nettoyage intérieur complet"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h2>Nettoyage Intérieur Profond</h2>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="partners-section">
          <div className="partner-image">
            <Image
              src="/images/img3.webp"
              alt="Équipe de lavage professionnelle"
              width={400}
              height={300}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
          <div className="partner-info">
            <h2>Pourquoi Nous Choisir ?</h2>
            <p>
              • Produits écologiques certifiés<br/>
              • Technologie de lavage sans eau<br/>
              • Résultats garantis en 60 minutes<br/>
              • Stationnement couvert pour tous temps
            </p>
            <div className="cta-buttons">
              <a href="#" className="cta-button">
                Découvrez nos forfaits
              </a>
            </div>
          </div>
        </div>

        {/* Before/After Gallery */}
        <div className="partner-logos">
          <div className="logo-item">
            <Image
              src="/images/img2.jpg"
              alt="Voiture avant lavage"
              width={150}
              height={100}
            />
          </div>
          <div className="logo-item">
            <Image
              src="/images/img1.jpg"
              alt="Voiture après lavage"
              width={150}
              height={100}
            />
          </div>
          <div className="logo-item">
            <Image
              src="/images/image_blue.avif"
              alt="Intérieur sale"
              width={150}
              height={100}
            />
          </div>
          <div className="logo-item">
            <Image
              src="/images/logo.png"
              alt="Intérieur nettoyé"
              width={150}
              height={100}
            />
          </div>
        </div>
      </main>
    </div>
  );
}