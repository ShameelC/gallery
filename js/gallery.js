const gallery = document.getElementById("gallery");

async function loadGallery() {

    try {

        const response = await fetch("gallery/gallery.json");
        const photos = await response.json();

        gallery.innerHTML = "";

        photos.forEach(photo => {

            const item = document.createElement("div");
            item.className = "gallery-item";

            item.innerHTML = `
                <img
                    src="${photo.image}"
                    alt="${photo.title}"
                    loading="lazy"
                >

                <a
                    class="source-badge"
                    href="${photo.post_url}"
                    target="_blank"
                >
                    ${photo.source}
                </a>
            `;

            gallery.appendChild(item);

        });

    } catch (error) {

        console.error(error);

        gallery.innerHTML = `
            <p style="text-align:center;">
                Failed to load gallery.
            </p>
        `;
    }
}

loadGallery();
