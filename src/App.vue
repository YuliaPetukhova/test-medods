<template>
  <div id="app">

    <div class="table">
      <h1>Создание Клиента</h1>
      <form @submit.prevent="submitForm">
        <label for="username">Имя:</label>
        <input
            type="text"
            id="username"
            v-model="formData.username"
            placeholder="Введите имя"
        />

        <label for="usersurname">Фамилия:</label>
        <input
            type="text"
            id="usersurname"
            v-model="formData.usersurname"
            placeholder="Введите фамилию"
        />

        <label for="userpatronymic">Отчество:</label>
        <input
            type="text"
            id="userpatronymic"
            v-model="formData.userpatronymic"
            placeholder="Введите отчество"
        />

        <label for="dateirth">Дата рождения:</label>
        <input
            type="text"
            id="datebirth"
            v-model="formData.datebirth"
            placeholder="Введите дату рождения"
        />

        <label for="phonenumber">Номер телефона:</label>
        <input
            type="text"
            id="phonenumber"
            v-model="formData.phonenumber"
            placeholder="Введите свой номер телефона"
        />

        <label for="sex">Пол:</label>
        <input
            type="text"
            id="sex"
            v-model="formData.sex"
            placeholder="Введите пол"
        />

        <!--        <multiselect v-model="value" :options="options"></multiselect>-->

        <select
            id="doctor"
        >
          <option>Иванов</option>
          <option>Захаров</option>
          <option>Чернышева</option>
        </select>

        <button type="submit">Создать</button>
      </form>
    </div>
  </div>

</template>

<script>
export default {
  data()
  {
    return {
      formData: {
        username: '',
        usersurname: '',
        userpatronymic: '',
        datebirth: '',
        phonenumber: '',
        sex: '',
        doctor: ''
      }
    };
  }
  ,
  methods: {
    submitForm()
    {
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
  width: 400px;
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


@media (max-width: 425px) {

  input {
    width: 300px;
    height: 50px;
  }
}

@media (min-width: 1024px) {
}

</style>