import { Metadata } from "next";
import { siteContent } from "@/lib/content";
import { EraSlider } from "@/components/EraSlider";

export const metadata: Metadata = {
  title: "QuirkyBytes - The Dawn Era (1995-1997)",
  description: "Experience QuirkyBytes through early HTML design",
};

export default function DawnEraPage() {
  const { company, services, portfolio, testimonials } = siteContent;

  return (
    <>
      <EraSlider />
      {/* Era 1: 1995-1997 - The Dawn of the Web */}
      {/* Gray background, Times New Roman, basic HTML structure */}
      <div
        style={{
          backgroundColor: "#c0c0c0",
          fontFamily: "Times New Roman, Times, serif",
          fontSize: "16px",
          color: "#000",
          minHeight: "100vh",
          paddingTop: "60px", // Space for era slider
        }}
      >
        <center>
          <table width="600" cellPadding="10" cellSpacing="0">
            <tbody>
              <tr>
                <td style={{ backgroundColor: "#c0c0c0" }}>
                  {/* Header */}
                  <h1 style={{ fontSize: "24px", marginBottom: "0" }}>
                    Welcome to {company.name}
                  </h1>
                  <p>
                    <i>{company.tagline}</i>
                  </p>

                  <hr style={{ height: "2px", backgroundColor: "#808080", border: "none" }} />

                  {/* Navigation */}
                  <p>
                    [<a href="#about" style={{ color: "#0000ff" }}>About Us</a>] |
                    [<a href="#services" style={{ color: "#0000ff" }}>Services</a>] |
                    [<a href="#portfolio" style={{ color: "#0000ff" }}>Portfolio</a>] |
                    [<a href="#guestbook" style={{ color: "#0000ff" }}>Guestbook</a>] |
                    [<a href="#contact" style={{ color: "#0000ff" }}>Contact</a>]
                  </p>

                  <hr style={{ height: "2px", backgroundColor: "#808080", border: "none" }} />

                  {/* Welcome */}
                  <p style={{ marginTop: "20px" }}>
                    <b>Welcome to the {company.name} Homepage!</b>
                  </p>
                  <p>{company.description}</p>
                  <p>
                    This page is best viewed at <b>640x480</b> resolution with{" "}
                    <b>Netscape Navigator 2.0</b> or higher.
                  </p>

                  <hr style={{ height: "2px", backgroundColor: "#808080", border: "none" }} />

                  {/* About Section */}
                  <h2 id="about" style={{ fontSize: "20px" }}>
                    About {company.name}
                  </h2>
                  <p>
                    {company.name} is a web development studio. We build 
                    World Wide Web pages, interactive applications, and computer games.
                  </p>
                  <p>
                    Custom work only. No templates.
                  </p>

                  <hr style={{ height: "2px", backgroundColor: "#808080", border: "none" }} />

                  {/* Services Section */}
                  <h2 id="services" style={{ fontSize: "20px" }}>
                    Our Services
                  </h2>
                  <ul>
                    {services.map((service) => (
                      <li key={service.id} style={{ marginBottom: "10px" }}>
                        <b>{service.name}</b> - {service.shortDesc}
                        <br />
                        <i>Pricing: {service.price}</i>
                      </li>
                    ))}
                  </ul>

                  <hr style={{ height: "2px", backgroundColor: "#808080", border: "none" }} />

                  {/* Portfolio Section */}
                  <h2 id="portfolio" style={{ fontSize: "20px" }}>
                    Our Portfolio
                  </h2>
                  <p>Here are some of our recent projects:</p>
                  <table
                    border={1}
                    cellPadding="5"
                    cellSpacing="0"
                    style={{ borderCollapse: "collapse", width: "100%" }}
                  >
                    <thead>
                      <tr style={{ backgroundColor: "#808080", color: "#fff" }}>
                        <th>Project</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      {portfolio.map((project) => (
                        <tr key={project.id}>
                          <td>
                            <b>{project.name}</b>
                          </td>
                          <td>{project.shortDesc}</td>
                          <td>
                            {project.status === "live" ? (
                              <span style={{ color: "green" }}>ONLINE</span>
                            ) : (
                              <span style={{ color: "orange" }}>COMING SOON</span>
                            )}
                          </td>
                          <td>{project.year}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <hr style={{ height: "2px", backgroundColor: "#808080", border: "none" }} />

                  {/* Guestbook Section */}
                  <h2 id="guestbook" style={{ fontSize: "20px" }}>
                    Guestbook
                  </h2>
                  <p>
                    <i>Sign our guestbook and let us know what you think!</i>
                  </p>
                  <table
                    border={1}
                    cellPadding="5"
                    cellSpacing="0"
                    style={{ borderCollapse: "collapse", width: "100%" }}
                  >
                    <thead>
                      <tr style={{ backgroundColor: "#808080", color: "#fff" }}>
                        <th>Name</th>
                        <th>Message</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {testimonials.map((t, i) => (
                        <tr key={i}>
                          <td>{t.name}</td>
                          <td>{t.message}</td>
                          <td>{t.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p>
                    <a href="/guestbook" style={{ color: "#0000ff" }}>
                      [Sign the Guestbook]
                    </a>
                  </p>

                  <hr style={{ height: "2px", backgroundColor: "#808080", border: "none" }} />

                  {/* Contact Section */}
                  <h2 id="contact" style={{ fontSize: "20px" }}>
                    Contact Us
                  </h2>
                  <p>
                    For inquiries, please use our{" "}
                    <a href="/contact" style={{ color: "#0000ff" }}>
                      electronic inquiry form
                    </a>.
                  </p>
                  <p>
                    <i>You will receive a response from @quirkybytes.com</i>
                  </p>

                  <hr style={{ height: "2px", backgroundColor: "#808080", border: "none" }} />

                  {/* Footer */}
                  <p style={{ textAlign: "center", fontSize: "14px" }}>
                    This page has been accessed{" "}
                    <b>
                      <span style={{ color: "red" }}>420,069</span>
                    </b>{" "}
                    times since December 1999.
                    <br />
                    <br />
                    Last updated: January 26, 2026
                    <br />
                    <br />
                    <a href="/contact" style={{ color: "#0000ff" }}>
                      Contact the Webmaster
                    </a>
                    <br />
                    <br />
                    Copyright © 2026 {company.name}. All rights reserved.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>
    </>
  );
}
