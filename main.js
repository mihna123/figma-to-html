// Simple checkbox logic
const checkboxes = document.getElementsByTagName("input");
const button = document.getElementsByTagName("button")[0];

checkboxes[0].addEventListener("change", (e) => {
    console.log(e.target.checked);
    for(let i = 0; i < checkboxes.length; ++i) {
        checkboxes[i].checked = e.target.checked;
    }
});

for(let i = 1; i < checkboxes.length; ++i) {
    checkboxes[i].addEventListener("change", () => {
        checkboxes[0].checked = false;
    })
};


button.addEventListener("click", (e) => {
    // Don't reload the page on button click
    e.preventDefault();
    for(let i = 0; i < checkboxes.length; ++i) {
        checkboxes[i].checked = false;
    }

});
