export function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

export function mediaCardTemplate(info) {
  return `<a href="${info.link}" class="media-card">
    <img src="${info.image}" alt="${info.name}" class="media-card__image" />
    <div class="media-card__content">
      <h3 class="media-card__title">${info.name}</h3>
      <p class="media-card__description">${info.description}</p>
    </div>
  </a>`;}

function getMailingAddress(addresses) {
  const mailing = addresses.find((address)=> address.type === "Mailing");
  return mailing;
}
function getVoicePhone(addresses) {
  const voice = addresses.find((address)=> address.type === "Voice");
  return voice;
  
}

export function footerTemplate(info) {
  const mailing = getMailingAddress(info.addresses);
  const voice = getVoicePhone(info.contacts.phoneNumbers);
  return `
  <section class="contact">
    <h3>Contact Info</h3>
    <h4>Mailing Address</h4>
    <div>
    <p>${mailing.line1}</p>
    <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p>
    <h4>Phone</h4>
    <p>${voice}</p> 
    </div>
  </section>
  `;
}