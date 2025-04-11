// ===== نظام الشرائح =====
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// ===== نظام الطوارئ =====
function openEmergencyModal() {
    document.getElementById("emergencyModal").style.display = "block";
    document.getElementById("modalOverlay").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeEmergencyModal() {
    document.getElementById("emergencyModal").style.display = "none";
    document.getElementById("modalOverlay").style.display = "none";
    document.body.style.overflow = "auto";
    
    document.getElementById("emergencyType").value = "";
    document.getElementById("emergencyDescription").value = "";
    document.getElementById("errorMessage").style.display = "none";
}

function validateAndSend() {
    let type = document.getElementById("emergencyType").value;
    let description = document.getElementById("emergencyDescription").value.trim();
    let errorMessage = document.getElementById("errorMessage");

    if (!type && !description) {
        errorMessage.textContent = "❌ Please select or describe the emergency!";
        errorMessage.style.display = "block";
        return;
    }

    if (confirm("⚠️ Are you sure you want to send the emergency report?")) {
        alert("🚨 Emergency reported successfully!");
        closeEmergencyModal();
    }
}

// ===== نظام المصادقة =====
function setupAuthModals() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const forgotPasswordModal = document.getElementById('forgotPasswordModal');
    const closeLogin = document.getElementById('closeLogin');
    const closeSignup = document.getElementById('closeSignup');
    const closeForgotPassword = document.getElementById('closeForgotPassword');
    const switchToLogin = document.getElementById('switchToLogin');
    const switchToSignup = document.getElementById('switchToSignup');
    const backToLogin = document.getElementById('backToLogin');
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    const googleLoginBtn = document.getElementById('googleLoginBtn');
    const googleSignupBtn = document.getElementById('googleSignupBtn');

    // فتح وإغلاق النوافذ
    const openModal = (modal) => {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };

    const closeModal = (modal) => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    // أحداث النقر
    loginBtn.addEventListener('click', () => openModal(loginModal));
    signupBtn.addEventListener('click', () => openModal(signupModal));
    
    closeLogin.addEventListener('click', () => closeModal(loginModal));
    closeSignup.addEventListener('click', () => closeModal(signupModal));
    closeForgotPassword.addEventListener('click', () => closeModal(forgotPasswordModal));

    // التنقل بين النوافذ
    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(signupModal);
        openModal(loginModal);
    });

    switchToSignup.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(loginModal);
        openModal(signupModal);
    });

    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(loginModal);
        openModal(forgotPasswordModal);
    });

    backToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(forgotPasswordModal);
        openModal(loginModal);
    });

    // إغلاق النوافذ عند النقر خارجها
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('auth-modal')) {
            closeModal(e.target);
        }
    });

    // معالجة إرسال النماذج
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login functionality would be implemented here');
        closeModal(loginModal);
    });

    document.getElementById('signupForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Signup functionality would be implemented here');
        closeModal(signupModal);
    });

    document.getElementById('forgotPasswordForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Password reset link would be sent to your email');
        closeModal(forgotPasswordModal);
    });

    // تسجيل الدخول عبر جوجل
    googleLoginBtn.addEventListener('click', () => {
        alert('Google login would be implemented here');
        closeModal(loginModal);
    });

    googleSignupBtn.addEventListener('click', () => {
        alert('Google signup would be implemented here');
        closeModal(signupModal);
    });
}

// ===== تهيئة الصفحة =====
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة نظام الشرائح
    showSlide(currentIndex);
    setInterval(nextSlide, 3000);

    // تهيئة نظام الطوارئ
    document.querySelector('.emergency-btn').addEventListener('click', openEmergencyModal);
    document.querySelector('.emergency').addEventListener('click', openEmergencyModal);
    document.querySelector('.send-button').addEventListener('click', validateAndSend);
    document.querySelector('.close-button').addEventListener('click', closeEmergencyModal);

    // تهيئة نظام المصادقة
    setupAuthModals();

    // تنظيف localStorage إذا لزم الأمر
    if (localStorage.getItem("emergencySent") === "true") {
        localStorage.removeItem("emergencySent");
    }
});
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".announcement-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.innerText;
    cards.forEach(card => {
      if (category === "All" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
function openPDF(pdfFile) {
    // Open the corresponding PDF in a new tab
    window.open(pdfFile, '_blank');
}
function showContent(id) {
    document.getElementById(id).style.display = 'block';
  }

  function hideContent() {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
      content.style.display = 'none';
    });}






