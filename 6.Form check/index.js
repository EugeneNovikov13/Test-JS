class FormCheck {
    constructor(options) {
        this.name = document.querySelector(options.name);
        this.phone = document.querySelector(options.phone);
        this.pswd = document.querySelector(options.password);
        this.pswdCnfr = document.querySelector(options.password_confirm);
    };
    submit() {
        let btn = document.querySelector('#form1_sub');
        btn.addEventListener('click', () => {
            this.counter = 0;
            this.checkName();
            this.checkPhone();
            this.checkPassword();
            this.confirm();
        })
    };
    checkName() {
        let nameSpan = document.getElementById('form1_incorrect-user-name');
        let t = /^[A-ZА-Я][A-Za-zА-Яа-я]{1,29}$/;
        if (!t.test(this.name.value)) {
            nameSpan.innerHTML = 'Incorrect first name';
            this.counter++;
        }
        else nameSpan.innerHTML = '';
    };
    checkPhone() {
        let telSpan = document.getElementById('form1_incorrect-user-phone');
        let t3 = /^\+?\d{10,15}$/;
        if (!t3.test(this.phone.value)) {
            telSpan.innerHTML = 'Incorrect number';
            this.counter++;
        }
        else {
            telSpan.innerHTML = '';
        }
    };
    checkPassword() {
        let pswdSpan = document.getElementById('form1_incorrect-password');
        if (this.pswd.value.length < 8 || this.pswd.value.length > 40) {
            pswdSpan.innerText = 'From 8 to 40 symbols';
            this.counter++
        }
        else pswdSpan.innerText = ''
        if (! /[A-Z]/.test(this.pswd.value)) {
            pswdSpan.innerText = 'Password has no big letters';
            this.counter++
        }
        if (! /[a-z]/.test(this.pswd.value)) {
            pswdSpan.innerText = 'Password has no small letters';
            this.counter++
        }
        if (! /\d/.test(this.pswd.value)) {
            pswdSpan.innerText = 'Password has no digit';
            this.counter++
        }
        let pswdCnfrSpan = document.getElementById('form1_incorrect-pass-confirm');
        if (this.pswdCnfr.value !== this.pswd.value) {
            pswdCnfrSpan.innerText = 'Password must match';
            this.counter++
        }
        else pswdCnfrSpan.innerText = ''
    };
    confirm() {
        if (this.counter < 1) alert('Thank you for registration');
    }
}
let options = { name: '#form1_user-name',
            phone: '#form1_user-phone',
            password: '#form1_password',
            password_confirm: '#form1_pass-confirm'};
let form1 = new FormCheck(options);
form1.submit();