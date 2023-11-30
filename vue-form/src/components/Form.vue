<script>

import icon from '../assets/user-regular.svg';

  export default {
      data() {
        return {
          error: "Błędne",
          
          userData: {
            fname: {
              value: '',
              max: 32,
              required: false, 
              validate: true, 
              error: ''
            },
            lname: {
              value: '',
              max: 48,
              required: false,
              validate: true,
              error: ''
            },
            email: {
              value: '',
              max: 32,
              required: true,
              validate: true,
              error: '',
              regex: '[a-z0-9]+@[a-z]+\.[a-z]{2,3}'
            },
            phone: {
              value: '',
              min: 6,
              max: 15,
              required: true,
              validate: true,
              error: ''
            },
            message: {
              value: '',
              min: 0,
              max: 250,
              required: false,
              validate: true,
              error: ''
            },
            checkbox: {
              required: true,
              checked: false,
              validate: true,
              error: ''
            },
          },
          formSent: false,
          icon: icon
        }
      },
      methods: {
        validation(e) {

            //fname
              if(this.userData.fname.value.length == 0 && this.userData.fname.required) {
                this.userData.fname.error = 'Pole nie może być puste';
                this.userData.fname.validate = false;
                return;
              }

              if(this.userData.fname.value.length > this.userData.fname.max ) {
                this.userData.fname.error = `Maksymalnie ${this.userData.fname.max} znaki`
                this.userData.fname.validate = false;
                return
              }

              this.userData.fname.validate = true;

            //lname
              if(this.userData.lname.value.length == 0 && this.userData.lname.required) {
                this.userData.lname.error = 'Pole nie może być puste';
                this.userData.lname.validate = false;
                return;
              }

              if(this.userData.lname.value.length > this.userData.lname.max ) {
                this.userData.lname.error = `Maksymalnie ${this.userData.lname.max} znaków`
                this.userData.lname.validate = false;
                return
              }

              this.userData.lname.validate = true;

            //email
              if(this.userData.email.value.length == 0 && this.userData.email.required) {
                this.userData.email.error = 'Pole nie może być puste';
                this.userData.email.validate = false;
                return;
              }

              let checkRegexEmail = new RegExp(this.userData.email.regex);

              if(!checkRegexEmail.test(this.userData.email.value)) {
                this.userData.email.error = 'Niepoprawny format adresu email'
                this.userData.email.validate = false;
                return
              }

              this.userData.email.validate = true;

            //phone
              if(this.userData.phone.value.length == 0 && this.userData.phone.required) {
                this.userData.phone.error = 'Pole nie może być puste';
                this.userData.phone.validate = false;
                return;
              }

              if(this.userData.phone.value.length < this.userData.phone.min || this.userData.phone.value.length > this.userData.phone.max) {

                let checkRegexTel = new RegExp('^[0-9]*$');

                if(!this.userData.phone.value.isNumber) {
                  this.userData.phone.error = `Podaj od ${this.userData.phone.min} do ${this.userData.phone.max} cyfr`;
                  this.userData.phone.validate = false;
                  return;
                }
              }

              this.userData.phone.validate = true;

            //message
            if(this.userData.message.value.length == 0 && this.userData.message.required) {
              this.userData.message.error = 'Pole nie może być puste';
              this.userData.message.validate = false;
              return;
            }

            if(this.userData.message.value.length > this.userData.message.max) {
              this.userData.message.error = `Maksymalnie ${this.userData.message.max} znaków`;
              this.userData.message.validate = false;
              return;
            }

            this.userData.message.validate = true;

            //checkbox
            if(!this.userData.checkbox.checked && this.userData.checkbox.required) {
              this.userData.checkbox.error = 'Zgoda jest obowiązkowa';
              this.userData.checkbox.validate = false;
              return
              
            } else {
              this.userData.checkbox.validate = true;
            }

            this.formSent = true;

        },

      }
    }

</script>

<template>
  <section>
    <figure>
      <img :src="icon" alt="icon">
    </figure>

    <h1>Formularz</h1>

    <form v-if="!formSent">
      <label>
        <input name="fname" type="text" v-model="userData.fname.value" placeholder="Wpisz imię" @blur="validation">
        <p class="error" v-if="!userData.fname.validate">{{ userData.fname.error }}</p>
      </label>

      <label>
        <input name="lname" type="text" v-model="userData.lname.value" placeholder="Wpisz naziwsko" @blur="validation">
        <p class="error" v-if="!userData.lname.validate">{{ userData.lname.error }}</p>
      </label>

      <label>
        <input name="email" type="text" v-model="userData.email.value" placeholder="Wpisz email" @blur="validation">
        <p class="error" v-if="!userData.email.validate">{{ userData.email.error }}</p>
      </label>

      <label>
        <input name="tel" type="text" v-model="userData.phone.value" placeholder="Podaj numer telefonu"
          @blur="validation">
        <p class="error" v-if="!userData.phone.validate">{{ userData.phone.error }}</p>
      </label>

      <label>
        <textarea name="message" type="text" v-model="userData.message.value" placeholder="Napisz wiadomość"
          @blur="validation"></textarea>
        <p class="error" v-if="!userData.message.validate">{{ userData.message.error }}</p>
      </label>

      <label class="checkbox">

        <input type="checkbox" name="checkbox" v-model="userData.checkbox.checked">
        <span></span>
        Akceptuję regulamin i politykę prywatności
        <p class="error" v-if="!userData.checkbox.validate">{{ userData.checkbox.error }}</p>
      </label>


      <button type="submit" @click.prevent="validation">Wyślij</button>

    </form>

    <div class="formSent" v-if="formSent">
      <p>Formularz wysłany!</p>
      <button type="button" @click="formSent = false">Wróć</button>
    </div>

  </section>
</template>

<style scoped>
  section {
      background-color: #fff;
      border-radius: 1rem;
      padding: 2rem 2rem 3rem;
      margin: auto;
      max-width: 90%;
      width: 800px;
      position: relative;
      margin: 3rem auto;
  }

  h1 {
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  }

  figure {
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.1);
    display: inline-block;
    padding: 1.5rem 1.5rem 1.3rem;;
    border-radius: 50%;
    margin: 0 auto 1rem;
    position: absolute;
    top: 0;
    left: 50%;
    translate: -50% -2rem;
    background-color: #fff;
  }

  figure img {
    height: 1.8rem;
  }
  .error {
    color: red;
    margin: 5px 0 0;
    text-align: left;
    font-size: 0.9rem;
    font-weight: 500;
  }

  form {
    display: flex;
    flex-wrap: wrap;
  }

  label {
    width: 100%;
    margin: 0 0 1rem;
  }

  input,
  textarea {
    width: 100%;
    border-width: 0 0 1px 0;
    border-color: #b4b4b4;
   padding: 1rem 1rem 0.5rem;
   margin: 0 0 0.5rem;
   transition: border-color 0.5s, background-color 0.5s;
   font-size: 1rem;
  }

  input:active,
  input:focus,
  textarea:focus,
  textarea:active {
    outline: none;
    border-width: 0 0 1px 0;
    background-color: #f4f4f4;
    border-color: #1E3231;
  }

  textarea {
    background-color: #f4f4f4;
    min-height: 10rem;
    max-height: 20rem;
    min-width: 100%;
    max-width: 100%;
    margin-top: 0.5rem;
  }

  .checkbox {
    cursor: pointer;
  }
  .checkbox input {
    display: none;
  }

  .checkbox input + span {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid #619b8a;
    background-color: #fff;
    margin-bottom: -2px;
    margin-right: 10px;
    border-radius: 0.2rem;
    position: relative;
  }

  .checkbox input + span::before {
    content: '\2713';
    position: absolute;
    top: -1.8px;
    left: 2px;
    font-weight: bold;
    color: #fff;
    font-size: 0.8rem;
    display: none;
  }

  .checkbox input:checked + span {
    background-color: #619b8a;
  }
  .checkbox input:checked + span::before {
    display: block;
  }

  button {
    display: inline-block;
    padding: 0.8rem;
    cursor: pointer;
    background-color: #1E3231;
    color: #fff;
    border-radius: 2rem;
    width: 8rem;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 0.9rem;
    transition: box-shadow 0.5s;
    margin: auto;
    margin-top: 0.5rem;
  }

  button:hover {
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.4);
  }

  .formSent {
    text-align: center;
  }

  .formSent p {
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    margin: 3rem 0 1.5rem;
  }

  @media (min-width: 768px) {
    section {
      padding: 2rem 5rem 3rem;
    }

    h1 {
      font-size: 2rem;
    }

  }

</style>
