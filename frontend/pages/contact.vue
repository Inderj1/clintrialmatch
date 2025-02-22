<script setup>
definePageMeta({
  layout: "landing",
  title: "Contact Us - CropMatrix",
  meta: [
    { hid: 'description', name: 'description', content: 'Get in touch with CropMatrix. We are here to help with any inquiries or support you need.' },
    { hid: 'og:title', property: 'og:title', content: 'Contact Us - CropMatrix' },
    { hid: 'og:description', property: 'og:description', content: 'Get in touch with CropMatrix. We are here to help with any inquiries or support you need.' },
    { hid: 'og:url', property: 'og:url', content: 'https://cropmatrix.com/contact' },
    { hid: 'twitter:title', name: 'twitter:title', content: 'Contact Us - CropMatrix' },
    { hid: 'twitter:description', name: 'twitter:description', content: 'Get in touch with CropMatrix. We are here to help with any inquiries or support you need.' },
  ],
  script: [
    {
      type: 'application/ld+json',
      json: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'CropMatrix',
        url: 'https://cropmatrix.com/contact',
        logo: 'assets/img/cropmatrix-logo.svg',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          email: 'admin@cropmatrix.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Edinburgh, Scotland',
            addressCountry: 'GB'
          }
        }
      }
    }
  ]
});
</script>

<template>
  <main class="contact-container min-h-screen relative w-full">
    <div class="absolute inset-0 bg-gradient-to-br from-header/10 via-background/20 to-accent/30 backdrop-blur-sm"></div>
    <LandingContainer class="relative z-10">
      <LandingSectionhead>
        <template v-slot:title>
          <span class="text-font bg-clip-text text-transparent bg-gradient-to-r from-font to-text">Let's get in touch!</span>
        </template>
      </LandingSectionhead>

      <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
        <div>
          <p class="text-lg leading-relaxed text-text mt-3">
            Do you have a question or need more information? Please enter your information and describe your inquiry, and we'll get back to you shortly. Thanks!
          </p>
          
          <p class="text-lg leading-relaxed text-text mt-3">
            We do not accept job applications from this form. Please visit our <a href="#" class="text-font hover:text-text transition-colors">careers page</a> for opportunities at CropMatrix.
          </p>

          <div class="mt-8">
            <div class="flex items-center mt-4 space-x-2 text-text">
              <Icon class="text-font w-4 h-4" name="uil:envelope" />
              <a href="mailto:admin@cropmatrix.com" class="text-font hover:text-text transition-colors">admin@cropmatrix.com</a>
            </div>
          </div>

          <div class="mt-12">
            <h3 class="font-medium text-xl text-font mb-4">GENERATIVE AI WORKSHOP</h3>
            <p class="text-lg leading-relaxed text-text">Looking to attend to our Generative AI Workshop?</p>
            <a href="#" class="text-font hover:text-text transition-colors">Sign Up for Free</a>
          </div>

          <div class="mt-12">
            <h3 class="font-medium text-xl text-font mb-4">TOOLKIT SUPPORT</h3>
            <p class="text-lg leading-relaxed text-text">Looking for technical support on the CropMatrix Toolkit?</p>
            <a href="#" class="text-font hover:text-text transition-colors">Get Support</a>
          </div>
        </div>
        <div>
          <LandingContactform />
        </div>
      </div>
    </LandingContainer>
  </main>
</template>

<style scoped>
.contact-container {
  position: relative;
  overflow: hidden;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  padding-top: 5rem; /* Add padding to account for fixed navbar */
  background: #C0C0C0;
}
</style>
