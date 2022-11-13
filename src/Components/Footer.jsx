import React from "react";

export default function Footer() {
  let style = {
    display: "grid",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "none",
    fontSize: "14px",
    textAlign: "left",
    // border: "1px solid red",
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
          paddingTop: "120px",
          paddingBottom: "50px",
          justifyContent: "repeat(6,1fr)",
        }}
      >
        <div style={{ width: "16%" }}>
          <p style={style}>
            <span style={{ fontSize: "20px", fontWeight: "500" }}>
              Products
            </span>
          </p>
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

        <div style={{ width: "16%" }}>
          <p style={style}>
            <span style={{ fontSize: "20px", fontWeight: "500" }}>
              Resources
            </span>
          </p>
          <p style={style}>Marketing Library</p>
          <p style={style}>Free Marketing Tools</p>
          <p style={style}>Marketing Glossary</p>
          <p style={style}>Integrations Directory</p>
        </div>
        <div style={{ width: "16%" }}>
          <p style={style}>
            <span style={{ fontSize: "20px", fontWeight: "500" }}>
              Community
            </span>
          </p>
          <p style={style}>Agencies & Freelancers</p>
          <p style={style}>Developers</p>
          <p style={style}>Events</p>
        </div>
        <div style={{ width: "16%" }}>
          <p style={style}>
            <span style={{ fontSize: "20px", fontWeight: "500" }}>Company</span>
          </p>
          <p style={style}>Our Story</p>
          <p style={style}>Newsroom</p>
          <p style={style}>Annual Report</p>
          <p style={style}>Careers</p>
          <p style={style}>Accessibility</p>
        </div>
        <div style={{ width: "16%" }}>
          <p style={style}>
            <span style={{ fontSize: "20px", fontWeight: "500" }}>Help</span>
          </p>
          <p style={style}>Contact Us</p>
          <p style={style}>Hire an Expert</p>
          <p style={style}>Help Center</p>
          <p style={style}>Talk to Sales</p>
        </div>
        <div style={{ width: "16%", display: "grid", marginBottom: "80px" }}>
          <img
            style={{ width: "155px", height: "30px" }}
            src="https://eep.io/images/yzco4xsimv0y/73ZAoe8O3Y7SXQLeCNTq5u/8ddf1f63b4abdf7f67149d3a9d74a0bd/MCP.svg?w=260&fm=webp&q=80"
            alt="logo"
          />
          <p
            style={{
              width: "173px",
              fontSize: "13px",
              fontWeight: "300",
              textAlign: "left",
            }}
          >
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
            style={{ width: "155px", height: "30px" }}
            src="https://eep.io/images/yzco4xsimv0y/5itQmdXHB6vMuAcvyWp5MR/ef5cd2cecd4c92b7029a22ec67585c65/Courier.svg?w=260&fm=webp&q=80"
            alt="courier logo"
          />
          <p
            style={{
              width: "173px",
              fontSize: "13px",
              fontWeight: "300",
              textAlign: "left",
            }}
          >
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
      <div style={{ backgroundColor: "#E7B75F", border: "1px solid #E7B75F" }}>
        <div>
          <hr />
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            padding: "40px 50px 40px 260px",
            backgroundColor: "#E7B75F",
          }}
        >
          <div style={{ marginRight: "80px" }}>
            <img
              style={{ height: "30px", width: "103px", marginRight: "30px" }}
              src="https://eep.io/images/yzco4xsimv0y/1u3hha7FE0Q402e2qsMu6a/5e403548149c1618b64034284f692ff1/icon-ios.svg?w=320&fm=webp&q=80"
            />
            <img
              style={{ height: "30px", width: "103px" }}
              src="https://eep.io/images/yzco4xsimv0y/64EpnI4RsQI66c2y2O60G2/4c34d7bc4dd7a4362c7e19a06c109e21/icon-android.svg?w=320&fm=webp&q=80"
            />
          </div>
          <div style={{ display: "flex", gap: "15px" }}>
            <img
              style={{ height: "16px", width: "17px", marginRight: "15px" }}
              src="https://eep.io/images/yzco4xsimv0y/5daYAeMRSgIUUiSquGwsgI/1904e3f818575ec9625fa15dab193243/icon-facebook.svg?w=320&fm=webp&q=80"
            />
            <img
              style={{ height: "16px", width: "17px", marginRight: "15px" }}
              src="https://eep.io/images/yzco4xsimv0y/3VjJhbqftKuok6gqYuUQKy/328d56c5d13ad50b9679b11e716bb218/icon-twitter.svg?w=320&fm=webp&q=80"
            />
            <img
              style={{ height: "16px", width: "17px", marginRight: "15px" }}
              src="https://eep.io/images/yzco4xsimv0y/RlNw7Xkw8uKYAUoYU4aQw/ff3eada8736da9e63fbd9f929c6a677c/icon-instagram.svg?w=320&fm=webp&q=80"
            />
            <img
              style={{ height: "16px", width: "17px", marginRight: "15px" }}
              src="https://eep.io/images/yzco4xsimv0y/n5saFR4miW4U4ygUIQo0A/8f9c60cb133b80fda2fe9bdb825b4a5f/icon-linkedin.svg?w=320&fm=webp&q=80"
            />
            <img
              style={{ height: "16px", width: "17px", marginRight: "15px" }}
              src="https://eep.io/images/yzco4xsimv0y/2z1ra9BrgQewIqMQckMasg/58e3e8ec04acd60f0642f89dfbd71218/icon-youtube.svg?w=320&fm=webp&q=80"
            />
            <img
              style={{ height: "16px", width: "17px", marginRight: "15px" }}
              src="https://eep.io/images/yzco4xsimv0y/7nawBEArBKpxRukK66OZtN/af9879112b20982e13748d47b24c8681/pinterest-logo.svg?w=320&fm=webp&q=80"
            />
          </div>
          <div style={{ marginLeft: "60px" }}>
            <select
              style={{
                height: "40px",
                width: "138px",
                padding: "5px 10px 10px 10px",
                // border: "1px solid black",
                marginBottom: "30px",
                backgroundColor: "#E7B75F",
                marginLeft: "0px",
                display: "grid",
              }}
            >
              <option>English</option>
            </select>
            <p
              style={{
                width: "316px",
                height: "140px",
                // border: "1px solid red",
                fontSize: "13px",
                lineHeight: "20px",
                textAlign: "left",
                // marginLeft: "60px",
              }}
            >
              ©2001-2022 All Rights Reserved. Mailchimp® is a registered
              trademark of The Rocket Science Group. Apple and the Apple logo
              are trademarks of Apple Inc. Mac App Store is a service mark of
              Apple Inc. Google Play and the Google Play logo are trademarks of
              Google Inc. Privacy | Terms | Cookie Preferences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
