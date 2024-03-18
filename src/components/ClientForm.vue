<template>
  <div class="form">
    <h1>Создание Клиента</h1>
    <form @submit.prevent="submitForm()">

      <div class="first-block">

        <div>
          <label for="lastName">Фамилия*:</label>
          <input
              type="text"
              id="lastName"
              v-model="data.lastName"
              placeholder="Введите фамилию"
          />
          <div class="error-message" v-if="v$.data.lastName.$error">*Поле обязательное для заполнения.</div>
        </div>

        <div>
          <label for="username">Имя*:</label>
          <input
              type="text"
              id="username"
              v-model="data.firstName"
              placeholder="Введите имя"
          />
          <div class="error-message" v-if="v$.data.firstName.$error">*Поле обязательное для заполнения.</div>
        </div>

        <div>
          <label for="userPatronymic">Отчество:</label>
          <input
              type="text"
              id="userPatronymic"
              v-model="data.userPatronymic"
              placeholder="Введите отчество"
          />
        </div>

        <div>
          <label for="dateBirth">Дата рождения*:</label>
          <input
              type="date"
              id="dateBirth"
              v-model="data.dateBirth"
              placeholder="Введите дату рождения"
          />
          <div class="error-message" v-if="v$.data.dateBirth.$error">*Введите дату</div>
        </div>

        <div>
          <label for="phoneNumber">Номер телефона*:</label>
          <input
              type="tel"
              id="phoneNumber"
              v-model="data.phoneNumber"
              placeholder="Введите номер в формате 71234567890"
              pattern="7{1}\d{10}"
          />
          <div class="error-message" v-if="v$.data.phoneNumber.$error">*Введите 11 символов. Поле обязательное для
            заполнения.
          </div>
        </div>

        <div>
          <div class="sex">
            <label for="sex">Пол:</label>

            <label for="m">М</label>
            <input class="check" type="radio" id="m" value="М" v-model="data.sex"/>

            <label for="f">Ж</label>
            <input class="check" type="radio" id="f" value="Ж" v-model="data.sex"/>
          </div>
        </div>

        <div>
          <label>Группа клиентов*</label>
          <select id="groups" v-model="data.groups" multiple>
            <option>VIP</option>
            <option>Проблемные</option>
            <option>ОМС</option>
          </select>
          <div class="error-message" v-if="v$.data.groups.$error">*Выберите группу</div>
        </div>

        <div>
          <label>Лечащий врач</label>
          <select class="select" id="doctor" v-model="data.doctor">
            <option>Иванов</option>
            <option>Захаров</option>
            <option>Чернышева</option>
          </select>
        </div>

        <div>
          <label for="checkbox">Не отправлять СМС</label>
          <input type="checkbox" id="checkbox" v-model="data.checkbox">
        </div>
      </div>

      <div class="second-block">
        <div>
          <label for="index">Индекс:</label>
          <input
              type="text"
              id="index"
              v-model="data.index"
              placeholder="Введите индекс"
          />
        </div>

        <div>
          <label for="country">Страна:</label>
          <input
              type="text"
              id="country"
              v-model="data.country"
              placeholder="Введите страну"
          />
        </div>

        <div>
          <label for="region">Область:</label>
          <input
              type="text"
              id="region"
              v-model="data.region"
              placeholder="Введите область"
          />
        </div>

        <div>
          <label for="city">Город*:</label>
          <input
              type="text"
              id="city"
              v-model="data.city"
              placeholder="Введите город"
          />
          <div class="error-message" v-if="v$.data.city.$error">*Поле обязательное для заполнения.</div>
        </div>

        <div>
          <label for="street">Улица:</label>
          <input
              type="text"
              id="street"
              v-model="data.street"
              placeholder="Введите улицу"
          />
        </div>

        <div>
          <label for="home">Дом:</label>
          <input
              type="text"
              id="home"
              v-model="data.home"
              placeholder="Введите дом"
          />
        </div>

      </div>

      <div class="third-block">

        <div>
          <label>Тип документа*</label>
          <select class="select" id="typeDocument" v-model="data.typeDocument"
          >
            <option>Паспорт</option>
            <option>Свидетельство о рождении</option>
            <option>Вод. удостоверение</option>
          </select>
          <div class="error-message" v-if="v$.data.typeDocument.$error">*Выберите один из документов</div>
        </div>

        <div>
          <label for="series">Серия:</label>
          <input
              type="text"
              id="series"
              v-model="data.series"
              placeholder="Введите серию"
          />
        </div>

        <div>
          <label for="num">Номер:</label>
          <input
              type="text"
              id="num"
              v-model="data.num"
              placeholder="Введите номер"
          />
        </div>

        <div>
          <label for="issuedBy">Кем выдан:</label>
          <input
              type="text"
              id="issuedBy"
              v-model="data.issuedBy"
              placeholder="Введите название"
          />
        </div>

        <div>
          <label for="issueDate">Дата выдачи*:</label>
          <input
              type="date"
              id="issueDate"
              v-model="data.issueDate"
              placeholder="Введите дату выдачи"
          />
          <div class="error-message" v-if="v$.data.issueDate.$error">*Введите дату</div>
        </div>

      </div>

      <div class="submit-btn">
        <button type="submit">Создать</button>
      </div>

    </form>
  </div>

</template>

<script>
import {useVuelidate} from '@vuelidate/core'
import {required, numeric, minLength, maxLength} from '@vuelidate/validators'


export default {
  setup() {
    return {
      v$: useVuelidate(),
    }
  },
  data() {
    return {
      data: {
        lastName: '',
        firstName: '',
        userPatronymic: '',
        dateBirth: '',
        phoneNumber: '',
        sex: '',
        groups: [],
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
      },
    };
  },


  validations() {
    return {
      data: {
        firstName: {required},
        lastName: {required},
        dateBirth: {required},
        phoneNumber: {
          required,
          numeric,
          minLength: minLength(11),
          maxLength: maxLength(11),
        },
        groups: {required},
        city: {required},
        typeDocument: {required},
        issueDate: {required},
      }
    }
  },

  methods: {
    async submitForm() {
      const isValid = await this.v$.$validate()

      if (!isValid) {
        return;
      }

      this.data = {
        lastName: '',
        firstName: '',
        userPatronymic: '',
        dateBirth: '',
        phoneNumber: '',
        sex: '',
        groups: [],
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
      };

      this.v$.$reset();

      alert('Клиент успешно создан');
    },
  }

}
</script>

<style scoped>
.first-block, .second-block, .third-block {
  display: flex;
  flex-wrap: wrap;
  padding: 0 1rem;
}

.first-block > div {
  margin: 5px 5px;
  flex: 27%;
}

.second-block > div {
  margin: 5px 5px;
  flex: 30%;
}

.third-block > div {
  margin: 0 5px;
  flex: 15%;
}

input:not([type='checkbox'], [type='radio']), select {
  width: 100%;
  height: 50px;
  border-radius: 30px;
  padding: 0 1rem;
  box-shadow: gray;
  border: solid 1px gray;
  text-decoration: none;
  outline: none;
}

label {
  padding: 0 1rem;
  font-size: 17px;
}

.submit-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 5px 0;
}


.submit-btn button {
  font-size: 20px;
  align-items: center;
  appearance: none;
  background-color: #3EB2FD;
  background-image: linear-gradient(1deg, #4F58FD, #149BF3 99%);
  background-size: calc(100% + 20px) calc(100% + 20px);
  border-radius: 100px;
  border-width: 0;
  box-shadow: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-flex;
  height: auto;
  justify-content: center;
  line-height: 1.5;
  padding: 6px 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: background-color .2s,background-position .2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;
}

.submit-btn button:active,
.submit-btn button:focus {
  outline: none;
}

.submit-btn button:hover {
  background-position: -20px -20px;
}

.submit-btn button:focus:not(:active) {
  box-shadow: rgba(40, 170, 255, 0.25) 0 0 0 .125em;
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

.error-message {
  font-weight: bold;
  color: #fa3939;
}

@media (max-width: 425px) {
  .first-block > div {
    flex: 100%;
  }

  .second-block > div {
    flex: 100%;
  }

  .third-block > div {
    flex: 100%;
  }
}
</style>