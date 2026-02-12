// ===============================
// Firebase helpers
// ===============================

// Login
function loginWithFirebase(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
}

// Logout
function logoutFirebase() {
    return firebase.auth().signOut();
}

// Ya NO actualizamos el menú aquí.
// El navbar (authLink + admin/email) se maneja en _Layout.cshtml.
// Si lo duplicamos aquí, se sobreescribe y no vemos "admin/email, cerrar sesión".

document.addEventListener("DOMContentLoaded", () => {
    if (typeof firebase === "undefined") return;


    window.cargarCatalogoDesdeStorage = function () {
        const storage = firebase.storage();
        const storageRef = storage.ref("catalogo");

        storageRef.listAll()
            .then(result => {
                const container = document.getElementById("catalogoContainer");
                if (!container) return;

                container.innerHTML = "";

                result.items.forEach(itemRef => {
                    itemRef.getDownloadURL().then(url => {
                        const card = document.createElement("div");
                        card.className = "catalogo-card";

                        card.innerHTML = `
                            <img src="${url}" alt="Servicio grooming">
                            <h3>Servicio Grooming</h3>
                        `;

                        container.appendChild(card);
                    });
                });
            })
            .catch(err => console.error(err));
    };
});
