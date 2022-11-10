import React from "react";

export default function Footer() {
  let style = {
    display: "grid",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "none",
    fontSize: "12px",
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          backgroundColor: "#E7B75F",
          paddingLeft: "200px",
          paddingRight: "200px",
          gap: "15px",
          
        }}
      >
        <div>
          <p style={style}>Products</p>
          <p style={style}>Why Mailchimp?</p>
          <p style={style}>Product Updates</p>
          <p style={style}>Email Marketing</p>
          <p style={style}>Websites</p>
          <p style={style}>Transactional Email</p>
          <p style={style}>How We Compare</p>
          <p style={style}>GDPR Compliance</p>
          <p style={style}>Security</p>
          <p style={style}>Status</p>
          <p style={style}>Mobile App</p>
        </div>

        <div>
          <p style={style}>Resources</p>
          <p style={style}>Marketing Library</p>
          <p style={style}>Free Marketing Tools</p>
          <p style={style}>Marketing Glossary</p>
          <p style={style}>Integrations Directory</p>
        </div>
        <div>
          <p style={style}>Community</p>
          <p style={style}>Agencies & Freelancers</p>
          <p style={style}>Developers</p>
          <p style={style}>Events</p>
        </div>
        <div>
          <p style={style}>Company</p>
          <p style={style}>Our Story</p>
          <p style={style}>Newsroom</p>
          <p style={style}>Annual Report</p>
          <p style={style}>Careers</p>
          <p style={style}>Accessibility</p>
        </div>
        <div>
          <p style={style}>Help</p>
          <p style={style}>Contact Us</p>
          <p style={style}>Hire an Expert</p>
          <p style={style}>Help Center</p>
          <p style={style}>Talk to Sales</p>
        </div>
        <div>
          <img
            src="https://eep.io/images/yzco4xsimv0y/73ZAoe8O3Y7SXQLeCNTq5u/8ddf1f63b4abdf7f67149d3a9d74a0bd/MCP.svg?w=260&fm=webp&q=80"
            alt="logo"
          />
          <p style={style}>
            Films, podcasts, and original series that celebrate the
            entrepreneurial spirit.
          </p>
          <p style={style}>
            <a
              class="ctaArrow cta--small"
              href="https://mailchimp.com/presents/"
            >
              Check it out
            </a>
          </p>
          <img
            src="https://eep.io/images/yzco4xsimv0y/5itQmdXHB6vMuAcvyWp5MR/ef5cd2cecd4c92b7029a22ec67585c65/Courier.svg?w=260&fm=webp&q=80"
            alt="courier logo"
          />
          <p style={style}>
            Expert insights, industry trends, and inspiring stories that help
            you live and work on your own terms.
          </p>
          <p style={style}>
            <a
              class="ctaArrow cta--small"
              href="https://mailchimp.com/presents/"
            >
              Learn more
            </a>
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}
