(() => {

    /* Add/remove "cin-status-online" class on <body /> to track online status. */
    const { body: { classList } } = document;
    document.addEventListener("offline", () => {
        classList.remove("cin-status-online");
    });
    document.addEventListener("online", () => {
        classList.add("cin-status-online");
        console.log(Array.from(classList));
    });
    if (navigator.onLine) {
        classList.add("cin-status-online");
    }

    /* Add/remove "cin-status-visible" class on <body /> to track online status. */
    document.addEventListener("visibilitychange", ({ target: { visibilityState } }) => {
        if ("visible" === visibilityState) {
            classList.add("cin-status-visible");
        } else {
            classList.remove("cin-status-visible");
        }
    });
    if ("visible" === document.visibilityState) {
        classList.add("cin-status-visible");
    }

    /* Add "cin-standalone" class to the body if the app is installed, typically on a mobile device. */
    let standalone = window.matchMedia("(display-mode: standalone)").matches;
    if (!standalone) {
        if ("standalone" in navigator) {
            standalone = !!navigator.standalone;
        }
    }
    if (standalone) {
        classList.add("cin-standalone");
    }
})();
