<template>

  <div class="table">
    <h1>Создание Клиента</h1>
    <form @submit.prevent="submitForm">
      <label for="username">Имя:</label>
      <input
          type="text"
          id="username"
          v-model="formData.firstName"
          placeholder="Введите имя"
      />

      <label for="usersurname">Фамилия:</label>
      <input
          type="text"
          id="usersurname"
          v-model="formData.lastName"
          placeholder="Введите фамилию"
      />

      <label for="userpatronymic">Отчество:</label>
      <input
          type="text"
          id="userpatronymic"
          v-model="formData.userPatronymic"
          placeholder="Введите отчество"
      />

      <label for="dateirth">Дата рождения:</label>
      <input
          type="text"
          id="datebirth"
          v-model="formData.dateBirth"
          placeholder="Введите дату рождения"
      />

      <label for="phonenumber">Номер телефона:</label>
      <input
          type="text"
          id="phonenumber"
          v-model="formData.phoneNumber"
          placeholder="Введите свой номер телефона"
      />

      <div class="sex">
        <label for="sex">Пол:</label>

        <input class="check" type="radio" id="m" value="М" v-model="formData.sex"/>
        <label for="m">М</label>

        <input class="check" type="radio" id="f" value="Ж" v-model="formData.sex"/>
        <label for="f">Ж</label>
      </div>

      <label>Группа клиентов</label>
      <select class="table" id="groups" multiple>
        <option>VIP</option>
        <option>Проблемные</option>
        <option>ОМС</option>
      </select>

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

      <label for="issuedate">Дата выдачи*:</label>
      <input
          type="text"
          id="issuedate"
          v-model="formData.issueDate"
          placeholder="Введите дату выдачи"
      />

      <button type="submit">Создать</button>
    </form>
  </div>

</template>

<script>
export default {
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        userPatronymic: '',
        dateBirth: '',
        phoneNumber: '',
        sex: '',
        doctor: '',
        checkbox: '',
        index: '',
        country: '',
        region: '',
        city: '',
        street: '',
        home: '',
        typeDocument:'',
        series:'',
        num: '',
        issuedBy:'',
        issueDate: '',
      }
    };
  }
  ,
  methods: {
    submitForm() {
      // Здесь можно добавить логику для отправки данных на сервер
      console.log('Данные формы:', this.formData);
    }
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

@media (max-width: 425px) {

  input {
    width: 300px;
    height: 50px;
  }
}

@media (min-width: 1024px) {
}

</style>