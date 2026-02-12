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

// Listener global para el menú
document.addEventListener("DOMContentLoaded", () => {
    if (typeof firebase === "undefined") return;

    const auth = firebase.auth();
    const authLink = document.getElementById("authLink");

    if (!authLink) return;

    auth.onAuthStateChanged(user => {
        if (user) {
            authLink.textContent = "Cerrar sesión";
            authLink.href = "#";
            authLink.onclick = (e) => {
                e.preventDefault();
                logoutFirebase().then(() => {
                    window.location.href = "/";
                });
            };
        } else {
            authLink.textContent = "Iniciar sesión";
            authLink.href = "/Account/Login";
            authLink.onclick = null;
        }
    });
    function cargarCatalogo() {
        const storage = firebase.storage();
        const storageRef = storage.ref("catalogo");

        storageRef.listAll()
            .then(result => {
                const container = document.getElementById("catalogoContainer");
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
    }
});
