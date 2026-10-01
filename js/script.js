(() => {
    'use strict';

    const form = document.querySelector('#booking-form');
    const status = document.querySelector('#form-status');

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

            status.textContent = 'Thank you. Your enquiry is ready to be sent to Lumina Events.';
            status.classList.add('success');
        });
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
