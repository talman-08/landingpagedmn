const form = document.getElementById("registerForm");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Show instant feedback
  status.textContent = "⏳ Saving...";
  status.style.color = "blue";

  try {
    // Save user info to Firestore
    await addDoc(collection(db, "customers"), {
      name,
      email,
      createdAt: new Date().toISOString(),
    });

    status.textContent = "✅ Saved successfully!";
    status.style.color = "green";
    form.reset();

  } catch (error) {
    console.error("❌ Error saving:", error);
    status.textContent = "❌ Failed to save!";
    status.style.color = "red";
  }


    // protect.js
  if (!localStorage.getItem("subscribed")) {
    window.location.href = "index.html"; // redirect back to landing page
  }

});
