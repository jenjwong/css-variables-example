const controls = document.querySelectorAll(".controls input");
let lastVal = null;

function handleUpdate() {
  if (this.value !== lastVal) {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }
  lastVal = this.value;
}

controls.forEach((control) => {
  control.addEventListener('change', handleUpdate, false);
  control.addEventListener('mousemove', handleUpdate, false);
});
