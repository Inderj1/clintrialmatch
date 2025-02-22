<script setup>
import { onMounted } from 'vue';

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
  <div class="bg-white py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-2">Contact Us</h2>
        <p class="text-gray-600 text-center mb-8">Get expert advice for your crop protection needs</p>
        
        <form action="https://api.web3forms.com/submit" method="POST" id="form" class="needs-validation space-y-6" novalidate>
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
          <input type="checkbox" class="hidden" style="display: none" name="botcheck" />
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <input type="text" required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                name="firstName" />
              <div class="empty-feedback invalid-feedback text-red-500 text-sm mt-1">
                Please provide your first name.
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <input type="text" required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                name="lastName" />
              <div class="empty-feedback invalid-feedback text-red-500 text-sm mt-1">
                Please provide your last name.
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                name="email" />
              <div class="empty-feedback text-red-500 text-sm mt-1">
                Please provide your email.
              </div>
              <div class="invalid-feedback text-red-500 text-sm mt-1">
                Please provide a valid email address.
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input type="tel"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                name="phone" />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Company/Farm Name</label>
            <input type="text" required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              name="company" />
            <div class="empty-feedback invalid-feedback text-red-500 text-sm mt-1">
              Please provide your company/farm name.
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Crop Type</label>
              <select name="cropType" required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                <option value="" disabled selected>Select Crop Type</option>
                <option value="vegetables">Vegetables</option>
                <option value="fruits">Fruits</option>
                <option value="flowers">Flowers</option>
                <option value="cereals">Cereals</option>
                <option value="other">Other</option>
              </select>
              <div class="empty-feedback invalid-feedback text-red-500 text-sm mt-1">
                Please select a crop type.
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
              <select name="inquiryType" required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                <option value="" disabled selected>Select Inquiry Type</option>
                <option value="pest-control">Pest Control Solutions</option>
                <option value="pollination">Pollination Services</option>
                <option value="technical">Technical Support</option>
                <option value="distribution">Distribution Partnership</option>
                <option value="other">Other</option>
              </select>
              <div class="empty-feedback invalid-feedback text-red-500 text-sm mt-1">
                Please select an inquiry type.
              </div>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea name="message" required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 h-36"
              placeholder="Please describe your needs or questions..."></textarea>
            <div class="empty-feedback invalid-feedback text-red-500 text-sm mt-1">
              Please enter your message.
            </div>
          </div>

          <button type="submit" 
            class="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors">
            Send Message
          </button>
          
          <div id="result" class="mt-3 text-center"></div>
        </form>
      </div>
    </div>
  </div>
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
