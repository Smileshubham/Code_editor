// Function to execute code safely
function executeCode(code) {
    try {
        return new Function(code)();
    } catch (error) {
        console.error(error);
    }
}

// Function to run the code in the code editor
function run() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");

    // Inject HTML into the iframe
    output.contentDocument.body.innerHTML = htmlCode;

    // Create a new <style> element and set its content to the CSS code
    let style = document.createElement("style");
    style.innerHTML = cssCode;

    // Append the <style> element to the <head> of the iframe document
    output.contentDocument.head.appendChild(style);

    // Execute JavaScript code safely
    executeCode(jsCode);
}

// Add event listener for the "Run" button
document.getElementById("run-button").addEventListener("click", function () {
    run();
});

// Add event listener for the "Copy" button
document.getElementById("copy-button").addEventListener("click", function () {
    const jsCode = document.getElementById("js-code").value;
    navigator.clipboard.writeText(jsCode).then(function () {
        alert("JavaScript code copied to clipboard!");
    });
});

// Add event listener for the "Save" button
document.getElementById("save-button").addEventListener("click", function () {
    // Replace this with your save functionality (e.g., saving to a file)
    alert("Save functionality not implemented in this example.");
});

let isLocked = false;

// Add event listener for the "Lock/Unlock" button
document.getElementById("lock-button").addEventListener("click", function () {
    isLocked = !isLocked;
    const jsCodeTextarea = document.getElementById("js-code");
    if (isLocked) {
        jsCodeTextarea.removeAttribute("readonly");
        document.getElementById("lock-button").textContent = "Unlock";
    } else {
        jsCodeTextarea.setAttribute("readonly", true);
        document.getElementById("lock-button").textContent = "Lock";
    }
});

// Initial run to display any default content in the textareas
run();
