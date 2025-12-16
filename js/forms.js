document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".kontakt-form");
  const outputBox = document.querySelector(".output-box p");

  if (!form || !outputBox) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // stop page reload

    const fullname = document.querySelector("#fullname").value.trim();
    const email = document.querySelector("#email").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const occasion = document.querySelector("#occasion").value.trim();
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;
    const message = document.querySelector("#message").value.trim();

    const summary = `
      Thank you, ${fullname || "dear customer"}!
      We have received your inquiry.

      📧 Email: ${email || "not provided"}
      📞 Phone: ${phone || "not provided"}
      🎉 Occasion: ${occasion || "not specified"}
      📅 Preferred date: ${date || "not specified"}
      ⏰ Preferred time: ${time || "not specified"}

      Your message:
      ${message || "(no extra message)"}
    `;

    outputBox.textContent = summary;
  });
});
