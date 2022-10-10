document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const ul = document.querySelector("ul");
  const liTest = document.getElementById("test");

  // Unsere Event Listener hören nicht nur auf Events, die direkt auf ihnen passieren,
  // sondern bekommen auch alles mit, was sich in deren Children abspielt.
  // Beispiel: Ein Klick auf das li sorgt automatisch dafür, dass es das übergeordnete ul und sogar das document auch mitbekommen.
  // Dieses Prinzip nennt sich Bubbling.
  // Zuvor wird bei dem Klick aber noch "von oben nach unten" das konkrete Ziel gesucht. Das ist das sog. Capturing.
  // Wir "zielen" also auf das Element (Capture Phase), treffen es (Target Phase), und erzählen allen auf dem Weg davon (Bubbling Phase).
  document.addEventListener("click", function (event) {
    // In event.target sehen das eigentliche Ziel des Events.
    // Wir haben hier also Zugriff auf den Ursprung.
    // In event.currentTarget finden wir das aktuelle Element, welches das Event empfängt.
    // currentTarget hängt also davon ab, wo wir gerade auf das Event hören.
    console.log("document", event.target, event.currentTarget);
  });

  ul.addEventListener("click", function (event) {
    console.log("ul", event.target, event.currentTarget);
  });

  liTest.addEventListener("click", function (event) {
    // Wenn wir nicht möchten, dass ein Event weitergeben wird,
    // können wir es mit event.stopPropagation() aufhalten.
    // event.stopPropagation();
    console.log("li", event.target, event.currentTarget);
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const task = form.elements.task.value;

    const newTask = document.createElement("li");
    newTask.innerText = task;

    // Fügen wir an jedes neue Element einen Event Listener hinzu,
    // kann das unser Skript verlangsamen.
    // Denn je mehr überwacht werden muss, desto mehr hat der Browser zu tun
    // und desto langsamer wird unser Skript, bzw. unsere Seite.
    // newTask.addEventListener("click", function () {
    //     newTask.remove();
    // });

    ul.appendChild(newTask);

    // Nur zum Testen deaktiviert.
    // form.reset();
  });

  // Besser als einzelne Event Listener wäre ein einziger auf dem Parent:
  // Durch das Bubbling kommt der Klick auf ein li ja auch im ul an.
  // Hier hören wir also auf den Klick und finden das passende li mittels event.target.
  ul.addEventListener("click", function (event) {
    if (event.target.matches("li")) event.target.remove();
  });
});

list.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  }
});
