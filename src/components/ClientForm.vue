<!--<script setup>-->

<!--// import Multiselect from 'vue-multiselect'-->
<!--// let multiselect = Vue.component('multiselect', Multiselect);-->
<!--//-->
<!--// export default {-->
<!--//-->
<!--//   components: {Multiselect},-->
<!--//   groupUsers() {-->
<!--//     return {-->
<!--//       form: {-->
<!--//         value: 'null',-->
<!--//         options: ['list', 'of', 'options']-->
<!--//       }-->
<!--//     }-->
<!--//   },-->
<!--//-->
//   data() {
//     return {
//       formData: {
//         username: '',
//         usersurname: '',
//         userpatronymic: '',
//         datebirth: '',
//         phonenumber: 1,
//         sex: '',
//         doctor: ''
//       }
//     };
//   },
//   methods: {
//     submitForm() {
//       // Здесь можно добавить логику для отправки данных на сервер
//       console.log('Данные формы:', this.formData);
//     }
//   }
<!--// };-->




<!--</script>-->

<!--<template>-->
<!--&lt;!&ndash;  <div class="table">&ndash;&gt;-->
<!--&lt;!&ndash;    <h1>Создание Клиента</h1>&ndash;&gt;-->
<!--&lt;!&ndash;    <form @submit.prevent="submitForm">&ndash;&gt;-->
<!--&lt;!&ndash;      <label for="username">Имя:</label>&ndash;&gt;-->
<!--&lt;!&ndash;      <input&ndash;&gt;-->
<!--&lt;!&ndash;          type="text"&ndash;&gt;-->
<!--&lt;!&ndash;          id="username"&ndash;&gt;-->
<!--&lt;!&ndash;          v-model="formData.username"&ndash;&gt;-->
<!--&lt;!&ndash;          placeholder="Введите имя"&ndash;&gt;-->
<!--&lt;!&ndash;      />&ndash;&gt;-->

<!--&lt;!&ndash;      <label for="usersurname">Фамилия:</label>&ndash;&gt;-->
<!--&lt;!&ndash;      <input&ndash;&gt;-->
<!--&lt;!&ndash;          type="text"&ndash;&gt;-->
<!--&lt;!&ndash;          id="usersurname"&ndash;&gt;-->
<!--&lt;!&ndash;          v-model="formData.usersurname"&ndash;&gt;-->
<!--&lt;!&ndash;          placeholder="Введите фамилию"&ndash;&gt;-->
<!--&lt;!&ndash;      />&ndash;&gt;-->

<!--&lt;!&ndash;      <label for="userpatronymic">Отчество:</label>&ndash;&gt;-->
<!--&lt;!&ndash;      <input&ndash;&gt;-->
<!--&lt;!&ndash;          type="text"&ndash;&gt;-->
<!--&lt;!&ndash;          id="userpatronymic"&ndash;&gt;-->
<!--&lt;!&ndash;          v-model="formData.userpatronymic"&ndash;&gt;-->
<!--&lt;!&ndash;          placeholder="Введите отчество"&ndash;&gt;-->
<!--&lt;!&ndash;      />&ndash;&gt;-->

<!--&lt;!&ndash;      <label for="dateirth">Дата рождения:</label>&ndash;&gt;-->
<!--&lt;!&ndash;      <input&ndash;&gt;-->
<!--&lt;!&ndash;          type="text"&ndash;&gt;-->
<!--&lt;!&ndash;          id="datebirth"&ndash;&gt;-->
<!--&lt;!&ndash;          v-model="formData.datebirth"&ndash;&gt;-->
<!--&lt;!&ndash;          placeholder="Введите дату рождения"&ndash;&gt;-->
<!--&lt;!&ndash;      />&ndash;&gt;-->

<!--&lt;!&ndash;      <label for="phonenumber">Номер телефона:</label>&ndash;&gt;-->
<!--&lt;!&ndash;      <input&ndash;&gt;-->
<!--&lt;!&ndash;          type="text"&ndash;&gt;-->
<!--&lt;!&ndash;          id="phonenumber"&ndash;&gt;-->
<!--&lt;!&ndash;          v-model="formData.phonenumber"&ndash;&gt;-->
<!--&lt;!&ndash;          placeholder="Введите свой номер телефона"&ndash;&gt;-->
<!--&lt;!&ndash;      />&ndash;&gt;-->

<!--&lt;!&ndash;      <label for="sex">Пол:</label>&ndash;&gt;-->
<!--&lt;!&ndash;      <input&ndash;&gt;-->
<!--&lt;!&ndash;          type="text"&ndash;&gt;-->
<!--&lt;!&ndash;          id="sex"&ndash;&gt;-->
<!--&lt;!&ndash;          v-model="formData.sex"&ndash;&gt;-->
<!--&lt;!&ndash;          placeholder="Введите пол"&ndash;&gt;-->
<!--&lt;!&ndash;      />&ndash;&gt;-->

<!--&lt;!&ndash;      <multiselect v-model="value" :options="options"></multiselect>&ndash;&gt;-->

<!--&lt;!&ndash;      <select&ndash;&gt;-->
<!--&lt;!&ndash;          id="doctor"&ndash;&gt;-->
<!--&lt;!&ndash;      >&ndash;&gt;-->
<!--&lt;!&ndash;        <option>Иванов</option>&ndash;&gt;-->
<!--&lt;!&ndash;        <option>Захаров</option>&ndash;&gt;-->
<!--&lt;!&ndash;        <option>Чернышева</option>&ndash;&gt;-->
<!--&lt;!&ndash;      </select>&ndash;&gt;-->

<!--&lt;!&ndash;      <button type="submit">Создать</button>&ndash;&gt;-->
<!--&lt;!&ndash;    </form>&ndash;&gt;-->
<!--&lt;!&ndash;  </div>&ndash;&gt;-->


<!--  <template>-->
<!--    <div>-->
<!--      <h1>Регистрация пользователя</h1>-->
<!--      <form @submit.prevent="submitForm">-->
<!--        <label for="username">Имя пользователя:</label>-->
<!--        <input-->
<!--            type="text"-->
<!--            id="username"-->
<!--            v-model="formData.username"-->
<!--            placeholder="Введите имя пользователя"-->
<!--        />-->

<!--        <label for="email">Email:</label>-->
<!--        <input-->
<!--            type="email"-->
<!--            id="email"-->
<!--            v-model="formData.email"-->
<!--            placeholder="Введите email"-->
<!--        />-->

<!--        <label for="password">Пароль:</label>-->
<!--        <input-->
<!--            type="password"-->
<!--            id="password"-->
<!--            v-model="formData.password"-->
<!--            placeholder="Введите пароль"-->
<!--        />-->

<!--        <button type="submit">Зарегистрироваться</button>-->
<!--      </form>-->
<!--    </div>-->
<!--  </template>-->

<!--</template>-->


<!--<style scoped>-->

<!--table, form, h1 {-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  align-items: center;-->
<!--}-->

<!--input, select {-->
<!--  width: 400px;-->
<!--  height: 50px;-->
<!--}-->

<!--label {-->
<!--  padding: 0 1rem;-->
<!--  font-size: 17px;-->
<!--}-->

<!--button {-->
<!--  margin-top: 10px;-->
<!--  font-size: 25px;-->
<!--}-->

<!--@media (max-width: 425px) {-->

<!--  input {-->
<!--    width: 300px;-->
<!--    height: 50px;-->
<!--  }-->
<!--}-->

<!--@media (min-width: 1024px) {-->

<!--}-->
<!--</style>-->
