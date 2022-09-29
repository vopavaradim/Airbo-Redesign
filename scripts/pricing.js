const toggle = document.getElementById('toggle');

const vers = document.getElementById("vers");

toggle.addEventListener('change', e => {
    vers.classList.toggle('show-annualy');
});
