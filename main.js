document.addEventListener('DOMContentLoaded', function () {
  const productImages = document.querySelectorAll('.product-option img');

  productImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
      img.style.transition = 'transform 0.3s ease';
      img.style.transform = 'scale(2.0)';
    });

    img.addEventListener('mouseleave', () => {
      img.style.transition = 'transform 0.3s ease';
      img.style.transform = 'scale(1)';
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".order-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартную отправку

    const name = form.querySelector('input[type="text"]').value;
    const delivery = form.querySelector("#delivery").value;
    const email = form.querySelector('input[type="email"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const product = form.querySelector('input[name="product"]:checked')?.value || "Not selected";

    alert(
      `Order sent:\nName: ${name}\nDelivery: ${delivery}\nEmail: ${email}\nPhone: ${phone}\nProduct: ${product}`
    );
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".order-formS");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // предотвращаем стандартную отправку

    const name = form.querySelector('input[type="text"]').value.trim();
    const swag = form.querySelector('#swag-level').value;
    const wishes = form.querySelector('textarea[name="wishes"]').value.trim() || "(пусто)";
    const email = form.querySelector('input[type="email"]').value.trim();

    alert(
      `Данные формы:\n` +
      `Name: ${name}\n` +
      `Level swagi: ${swag}\n` +
      `Your idea: ${wishes}\n` +
      `Email: ${email}`
    );
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.querySelector('input[name="phone"]');

  // Автоподстановка +7 при фокусе
  phoneInput.addEventListener("focus", function () {
    if (this.value.trim() === "") {
      this.value = "+7";
    }
  });

  // Фильтрация: только цифры и +
  phoneInput.addEventListener("input", function () {
    // Сохраняем + только в начале, остальные удаляются
    const cleaned = this.value.replace(/[^\d]/g, "");
    if (this.value.startsWith("+")) {
      this.value = "+" + cleaned;
    } else {
      this.value = cleaned;
    }
  });
});

const textarea = document.getElementById('wishes');
const initialHeight = 60; // исходная высота в px

function adjustHeight(el) {
  el.style.height = 'auto'; // сбросить, чтобы получить scrollHeight
  const newHeight = el.scrollHeight + 'px';
  el.style.height = newHeight; // плавное изменение с transition
}

textarea.addEventListener('input', () => {
  adjustHeight(textarea);
});

textarea.addEventListener('focus', () => {
  adjustHeight(textarea);
});

textarea.addEventListener('blur', () => {
  textarea.style.height = initialHeight + 'px';
});

 const range = document.getElementById('swag-level');
const fill = document.querySelector('.swag-fill');

function updateFill(value) {
  fill.innerHTML = ''; // очищаем
  // Максимум 12 смайликов, например
  const maxEmojis = 12;
  const count = Math.round((value / 100) * maxEmojis);
  for (let i = 0; i < count; i++) {
    const emoji = document.createElement('div');
    emoji.className = 'money-emoji';
    fill.appendChild(emoji);
  }
  fill.style.width = `${(value / 100) * 100}%`;
}

range.addEventListener('input', () => {
  updateFill(range.value);
});
updateFill(range.value);

