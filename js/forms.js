document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".kontakt-form");
  const outputBox = document.querySelector(".output-box");

  if (!form || !outputBox) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent reload

    const fullname = document.querySelector("#fullname").value.trim();
    const email = document.querySelector("#email").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const occasion = document.querySelector("#occasion").value.trim();
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;
    const message = document.querySelector("#message").value.trim();

    // BEAUTIFUL FORMATTED OUTPUT ✨
    const summary = `
      <div style="text-align: center;">
        
        <strong>Thank you, ${fullname || "dear customer"}!</strong><br>
        We have received your inquiry.<br><br>

        <strong>———— Contact Info ————</strong><br>
        <strong>Full name:</strong> ${fullname || "not provided"}<br>
        <strong>Email:</strong> ${email || "not provided"}<br>
        <strong>Phone:</strong> ${phone || "not provided"}<br><br>

        <strong>———— Request Details ————</strong><br>
        <strong>Occasion:</strong> ${occasion || "not specified"}<br>
        <strong>Preferred date:</strong> ${date || "not specified"}<br>
        <strong>Preferred time:</strong> ${time || "not specified"}<br><br>

        <strong>———— Message ————</strong><br>
        ${message || "(no extra message)"}
      </div>
    `;

    outputBox.innerHTML = summary;
  });
});
