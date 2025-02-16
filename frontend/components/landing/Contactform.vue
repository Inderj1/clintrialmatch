\<script setup>
onMounted(() => {
  const form = document.getElementById("form");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.classList.add("was-validated");
    if (!form.checkValidity()) {
      form.querySelectorAll(":invalid")[0].focus();
      return;
    }
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Sending...";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          result.classList.add("text-green-500");
          result.innerHTML = json.message;
        } else {
          result.classList.add("text-red-500");
          result.innerHTML = json.message;
        }
      })
      .catch((error) => {
        result.innerHTML = "Something went wrong!";
      })
      .then(function () {
        form.reset();
        form.classList.remove("was-validated");
        setTimeout(() => {
          result.style.display = "none";
        }, 5000);
      });
  });
});
</script>

<template>
  <!-- To make this contact form work, create your free access key from https://web3forms.com/
     Then you will get all form submissions in your email inbox. -->
  <form action="https://api.web3forms.com/submit" method="POST" id="form" class="needs-validation" novalidate>
    <input type="hidden" name="access_key" value="f656e7e3-c47a-4f40-a611-f3375b052645
" />
    <!-- Create your free access key from https://web3forms.com/ -->
    <input type="checkbox" class="hidden" style="display: none" name="botcheck" />
    <div class="mb-5">
        <input type="text" placeholder="First Name" required
        class="w-full px-4 py-3 border-2 placeholder:text-text rounded-md outline-none focus:ring-4 border-font focus:border-text ring-font/20 bg-white/80"
        name="firstName" />
      <div class="empty-feedback invalid-feedback text-font text-sm mt-1">
        Please provide your first name.
      </div>
    </div>
    <div class="mb-5">
      <input type="text" placeholder="Last Name" required
        class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
        name="lastName" />
      <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
        Please provide your last name.
      </div>
    </div>
    <div class="mb-5">
      <input type="email" placeholder="Business Email" required
        class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
        name="email" />
      <div class="empty-feedback text-red-400 text-sm mt-1">
        Please provide your business email.
      </div>
      <div class="invalid-feedback text-red-400 text-sm mt-1">
        Please provide a valid email address.
      </div>
    </div>
    <div class="mb-5">
      <input type="tel" placeholder="Phone Number"
        class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
        name="phone" />
    </div>
    <div class="mb-5">
      <input type="text" placeholder="Company Name" required
        class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
        name="company" />
      <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
        Please provide your company name.
      </div>
    </div>
    <div class="mb-5">
      <select name="inquiryType" required
        class="w-full px-4 py-3 border-2 text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100">
        <option value="" disabled selected>Please Select</option>
        <option value="general">General Inquiry</option>
        <option value="sales">Sales Inquiry</option>
        <option value="support">Technical Support</option>
        <option value="other">Other</option>
      </select>
      <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
        Please select an inquiry type.
      </div>
    </div>
    <div class="mb-5">
      <textarea name="message" required placeholder="Message"
        class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"></textarea>
      <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
        Please enter your message.
      </div>
    </div>
    <LandingButton type="submit" size="lg" block>Send Message</LandingButton>
    <div id="result" class="mt-3 text-center"></div>
  </form>
</template>

<style>
.invalid-feedback,
.empty-feedback {
  display: none;
}

.was-validated :placeholder-shown:invalid~.empty-feedback {
  display: block;
}

.was-validated :not(:placeholder-shown):invalid~.invalid-feedback {
  display: block;
}

.is-invalid,
.was-validated :invalid {
  border-color: #dc3545;
}
</style>
