function verifyId() {
  let id = document.getElementById("bgmiId").value;
  let message = document.getElementById("verifyMessage");
  if (id.trim() === "") {
    message.innerHTML = "❌ Please enter a valid BGMI ID";
    message.style.color = "red";
  } else {
    message.innerHTML = "✅ ID Verified!";
    message.style.color = "lightgreen";
    document.getElementById("packages").style.display = "block";
  }
}

function selectPackage(uc) {
  document.getElementById("paymentModal").style.display = "block";
}

function closeModal() {
  document.getElementById("paymentModal").style.display = "none";
}
