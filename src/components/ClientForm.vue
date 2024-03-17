<template>

  <div class="table">
    <h1>Создание Клиента</h1>
    <form @submit.prevent="submitForm">
      <label for="lastName">Фамилия:</label>
      <input
          type="text"
          id="lastName"
          v-model="formData.lastName"
          placeholder="Введите фамилию"
      />
      <div class="error-message" v-if="v$.lastName.$error">*Поле обязательное для заполнения.</div>

      <label for="username">Имя:</label>
      <input
          type="text"
          id="username"
          v-model="formData.firstName"
          placeholder="Введите имя"
      />
      <div class="error-message" v-if="v$.firstName.$error">*Поле обязательное для заполнения.</div>


      <label for="userPatronymic">Отчество:</label>
      <input
          type="text"
          id="userPatronymic"
          v-model="formData.userPatronymic"
          placeholder="Введите отчество"
      />

      <label for="dateBirth">Дата рождения:</label>
      <input
          type="text"
          id="dateBirth"
          v-model="formData.dateBirth"
          placeholder="Введите дату рождения"
      />
      <div class="error-message" v-if="v$.dateBirth.$error">*Поле обязательное для заполнения.</div>

      <label for="phoneNumber">Номер телефона:</label>
      <input
          type="text"
          id="phoneNumber"
          v-model="formData.phoneNumber"
          placeholder="Введите свой номер телефона"
      />
      <div class="error-message" v-if="v$.phoneNumber.$error">*Поле обязательное для заполнения.</div>

      <div class="sex">
        <label for="sex">Пол:</label>

        <input class="check" type="radio" id="m" value="М" v-model="formData.sex"/>
        <label for="m">М</label>

        <input class="check" type="radio" id="f" value="Ж" v-model="formData.sex"/>
        <label for="f">Ж</label>
      </div>

      <label>Группа клиентов</label>
      <select class="table" id="groups" v-model="formData.groups" multiple>
        <option>VIP</option>
        <option>Проблемные</option>
        <option>ОМС</option>
      </select>
      <div class="error-message" v-if="v$.groups.$error">*Поле обязательное для заполнения.</div>

      <label>Лечащий врач</label>
      <select class="select" id="doctor">
        <option>Иванов</option>
        <option>Захаров</option>
        <option>Чернышева</option>
      </select>

      <input class="check" type="checkbox" id="checkbox" v-model="formData.checkbox">
      <label for="checkbox">Не отправлять СМС</label>

      <div>Адрес</div>
      <label for="index">Индекс:</label>
      <input
          type="text"
          id="index"
          v-model="formData.index"
          placeholder="Введите индекс"
      />

      <label for="country">Страна:</label>
      <input
          type="text"
          id="country"
          v-model="formData.country"
          placeholder="Введите страну"
      />

      <label for="region">Область:</label>
      <input
          type="text"
          id="region"
          v-model="formData.region"
          placeholder="Введите область"
      />

      <label for="city">Город*:</label>
      <input
          type="text"
          id="city"
          v-model="formData.city"
          placeholder="Введите город"
      />
      <div class="error-message" v-if="v$.city.$error">*Поле обязательное для заполнения.</div>

      <label for="street">Улица:</label>
      <input
          type="text"
          id="street"
          v-model="formData.street"
          placeholder="Введите улицу"
      />

      <label for="home">Дом:</label>
      <input
          type="text"
          id="home"
          v-model="formData.home"
          placeholder="Введите дом"
      />

      <div>Паспорт:</div>

      <label>Тип документа*</label>
      <select class="select" id="typeDocument">
        <option>Паспорт</option>
        <option>Свидетельство о рождении</option>
        <option>Вод. удостоверение</option>
      </select>
      <div class="error-message" v-if="v$.typeDocument.$error">*Выберите один из документов</div>

      <label for="series">Серия:</label>
      <input
          type="text"
          id="series"
          v-model="formData.series"
          placeholder="Введите серию"
      />

      <label for="num">Номер:</label>
      <input
          type="text"
          id="num"
          v-model="formData.num"
          placeholder="Введите номер"
      />

      <label for="issuedBy">Кем выдан:</label>
      <input
          type="text"
          id="issuedBy"
          v-model="formData.issuedBy"
          placeholder="Введите название организации"
      />

      <label for="issueDate">Дата выдачи*:</label>
      <input
          type="text"
          id="issueDate"
          v-model="formData.issueDate"
          placeholder="Введите дату выдачи"
      />
      <div class="error-message" v-if="v$.issueDate.$error">*Поле обязательное для заполнения.</div>

      <button type="submit">Создать</button>
    </form>
  </div>

</template>

<script>
import {useVuelidate} from '@vuelidate/core'
import {required} from '@vuelidate/validators'

export default {
  setup() {
    return {
      v$: useVuelidate(),
      "$error": false,
    }
  },
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        userPatronymic: '',
        dateBirth: '',
        phoneNumber: '',
        sex: '',
        groups: '',
        doctor: '',
        checkbox: '',
        index: '',
        country: '',
        region: '',
        city: '',
        street: '',
        home: '',
        typeDocument: '',
        series: '',
        num: '',
        issuedBy: '',
        issueDate: '',
      }
    };
  },

  validations() {
    return {
      firstName: {required},
      lastName: {required},
      dateBirth: {required},
      phoneNumber: {required},
      groups: {required},
      city: {required},
      typeDocument: {required},
      issueDate: {required},
    }
  },

  methods: {
      async submitForm () {
        const isFormCorrect = await this.v$.$validate()
        // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
        if (!isFormCorrect) return
          console.log('Данные формы:', this.formData);
      },

    // submitForm() {
    //   // Здесь можно добавить логику для отправки данных на сервер
    //   console.log('Данные формы:', this.formData);
    // }
  }

}
</script>

<style scoped>
table, form, h1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input, select {
  width: 60%;
  height: 50px;
}

label {
  padding: 0 1rem;
  font-size: 17px;
}

button {
  margin-top: 10px;
  font-size: 25px;
}

.sex {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 300px;
  height: 50px;
  margin: 5px 0;
}

.check {
  height: 20px;
}

.select {
  margin-bottom: 10px
}

.error-message{
  font-weight: bold;
  color: red;
}

@media (max-width: 425px) {

  input {
    width: 300px;
    height: 50px;
  }
}

@media (min-width: 1024px) {
}

</style>