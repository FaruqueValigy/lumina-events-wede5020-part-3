(() => {
    'use strict';

    const form = document.querySelector('#booking-form, #enquiry-form, #contact-form');
    const status = document.querySelector('#form-status, #enquiry-status, #contact-status');

    if (form && status) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            status.className = 'form-status';

            if (!form.checkValidity()) {
                form.reportValidity();
                status.textContent = 'Please complete the required fields with valid details.';
                status.classList.add('error');
                return;
            }

            if (form.id === 'enquiry-form') {
                const guests = Number(form.querySelector('[name="guests"]')?.value || 0);
                const event = form.querySelector('[name="event"]')?.value || 'event';
                const estimate = guests ? Math.max(2500, guests * 180) : 2500;
                status.textContent = `Thank you. Your ${event.toLowerCase()} enquiry is ready. An indicative planning range starts at approximately R${estimate.toLocaleString('en-ZA')}.`;
            } else if (form.id === 'contact-form') {
                status.textContent = 'Your message is valid and ready to be sent to Lumina Events.';
            } else {
                status.textContent = 'Thank you. Your enquiry is ready to be sent to Lumina Events.';
            }
            status.classList.add('success');
        });
    }

    const filterCards = (input, cards, emptyMessage) => {
        if (!input || !cards.length) return;
        const update = () => {
            const query = input.value.trim().toLowerCase();
            let visible = 0;
            cards.forEach((card) => {
                const matches = !query || card.dataset.gallerySearch?.includes(query) || card.dataset.serviceCard?.includes(query);
                card.hidden = !matches;
                if (matches) visible += 1;
            });
            let message = input.parentElement.querySelector('.filter-status');
            if (!message) {
                message = document.createElement('p');
                message.className = 'filter-status';
                message.setAttribute('role', 'status');
                input.parentElement.append(message);
            }
            message.textContent = visible ? `${visible} result${visible === 1 ? '' : 's'} shown.` : emptyMessage;
        };
        input.addEventListener('input', update);
        update();
    };

    filterCards(document.querySelector('#gallery-search'), [...document.querySelectorAll('[data-gallery-card]')], 'No portfolio items match that search.');
    filterCards(document.querySelector('#service-search'), [...document.querySelectorAll('[data-service-card]')], 'No services match that search.');

    const mapElement = document.querySelector('#event-map');
    if (mapElement && window.L) {
        const map = L.map(mapElement).setView([-26.2041, 28.0473], 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
            maxZoom: 19
        }).addTo(map);
        L.marker([-26.2041, 28.0473]).addTo(map).bindPopup('<strong>Lumina Events</strong><br>Johannesburg, South Africa').openPopup();
    }

    const lightbox = document.querySelector('#gallery-lightbox');
    const lightboxImage = document.querySelector('#lightbox-image');
    const lightboxTitle = document.querySelector('#lightbox-title');
    const closeButton = lightbox?.querySelector('.lightbox-close');
    let lastFocusedItem;

    const closeLightbox = () => {
        if (!lightbox) return;
        lightbox.hidden = true;
        document.body.style.overflow = '';
        lastFocusedItem?.focus();
    };

    document.querySelectorAll('[data-gallery-item]').forEach((item) => {
        item.addEventListener('click', () => {
            if (!lightbox || !lightboxImage || !lightboxTitle) return;
            lastFocusedItem = item;
            lightboxImage.src = item.dataset.galleryItem;
            lightboxImage.alt = item.querySelector('img')?.alt || '';
            lightboxTitle.textContent = item.dataset.galleryTitle || '';
            lightbox.hidden = false;
            document.body.style.overflow = 'hidden';
            closeButton?.focus();
        });
    });

    closeButton?.addEventListener('click', closeLightbox);
    lightbox?.addEventListener('click', (event) => {
        if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && lightbox && !lightbox.hidden) closeLightbox();
    });
})();
