const form = document.querySelector("form");
const formSubmitWrapper = document.querySelector(".form-submit-wrapper");
const formInput = document.querySelector("input[type='text']");
const submitBtn = document.querySelector(".submit");
const errorMessage = document.querySelector(".error-message");
const errorIcon = document.querySelector(".error-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const validEmailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const isValidEmail = validEmailCheck.test(formInput.value.trim());

  if (!isValidEmail) {
    submissionErrorState();
  } else {
    submissionSuccessState();
  }
});

function submissionErrorState() {
  errorMessage.style.visibility = "unset";
  errorMessage.style.animation = "errorMessageEffect 150ms linear";
  errorIcon.style.visibility = "unset";
  errorIcon.style.animation = "errorIconEffect 150ms linear";
  formSubmitWrapper.style.border = "1px solid hsl(0, 93%, 68%)";
}

function submissionSuccessState() {
  errorMessage.style.visibility = "hidden";
  errorIcon.style.visibility = "hidden";
  formSubmitWrapper.style.border = "";
  formInput.style.opacity = "0.2";

  submitBtn.innerHTML = `
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><g stroke="white"><circle cx="12" cy="12" r="9.5" fill="none" stroke-linecap="round" stroke-width="3"><animate attributeName="stroke-dasharray" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0 150;42 150;42 150;42 150"/><animate attributeName="stroke-dashoffset" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0;-16;-59;-59"/></circle><animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></g></svg>
    </span>`;

  setTimeout(() => {
    formInput.style.display = "none";
    errorIcon.style.display = "none";
    errorMessage.style.visibility = "hidden";
    submitBtn.style.width = "100%";
    submitBtn.style.pointerEvents = "none";
    submitBtn.style.cursor = "initial";

    submitBtn.innerHTML = `<span style="display:block;text-align:center">Thank you for subscribing</span>`;

    submitBtn.firstChild.style.animation =
      "submissionMessageEffect 200ms linear";
  }, 2500);
}
