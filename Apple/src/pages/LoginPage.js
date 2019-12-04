import React,
{
  Component
} from 'react';

import './LoginPage.css';
import Input from "./../components/Login/Input";
import is from 'is_js';

function validateForm(){
    const validateUsername = /^[a-zA-Z\-]+$/;
    //var validfirstUsername = document.frm.firstName.value.match(nameRegex);
    if(validateUsername == null){
        alert("Your first name is not valid. Only characters A-Z, a-z and '-' are  acceptable.");
        document.frm.firstName.focus();
        return false;
    }
}



class LoginPage extends Component {

  state = {
    isFormValid: false,
    formControls: {
      username: {
        value: '',
        type: 'username',
        label: 'Логин',
        errorMessage: 'Введите admin',
        valid: false,
        touched: false,
        validation: {
          required: true,
          username: true
        }
      },
      passwords: {

          value: '',
          type: 'passwords',
          label: 'Пароль',
          errorMessage: 'Введите 12345',
          valid: false,
          touched: false,
          validation: {
            required: true,
            minLenght: 6
          }

      }
    }
  }
  usernameHandler = () => {

  }

  sumbitHandler = event => {
    event.preventDefault()
  }

  validateControl(value, validation) {
    if (!validation) {
        return true
    }

    let isValid = true

    if (validation.required){
      isValid = value.trim() !== '' && isValid
    }

    if (validation.username){
      isValid = validateForm(value) && isValid
    }

    if (validation.minLenght){
      isValid = value.length >= validation.minLenght && isValid
    }

    return isValid
  }

  onChangeHandler = (event, controlName) => {



    const formControls = { ...this.state.formControls }
    const control = { ...formControls[controlName] }

    control.value = event.target.value
    control.touched = true
    control.valid = this.validateControl(control.value, control.validation)

    formControls[controlName] = control

    let isFormValid = true
    Object.keys(formControls).forEach(name =>{
      isFormValid = formControls[name].valid && isFormValid
    })

    this.setState({
      formControls, isFormValid
    })
  }

  renderInputs(){
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      return (
        <Input
        key={controlName + index}
        type={control.type}
        value={control.value}
        valid={control.valid}
        touched={control.touched}
        label={control.label}
        shouldValidate={!!control.validation}
        errorMessage={control.errorMessage}
        onChange={event => this.onChangeHandler(event, controlName)}
        />
      )
    })


  }

  render() {
    return (
      <div className="LoginPage">
          <h1>Авторизация</h1>
                          <form onSubmit={this.sumbitHandler}>
                              { this.renderInputs() }

                              <button className="form" type="success" onClick={this.usernameHandler}
                              //disabled={!this.state.isFormValid}
                              >
                              Войти</button>
                          </form>

      </div>
    );
  }
}

export default LoginPage;
